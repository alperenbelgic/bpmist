using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using bpmist.common.Commands;
using bpmist.common.DataModels.DocumentTypes;
using bpmist.common.DataModels.SubDocumentTypes;
using bpmist.common.ICommands;
using bpmist.data.ICommands;
using Google.Api;
using Google.Apis.Discovery;

namespace bpmist.business.Commands
{
    public partial class SendUserActionCommand
    {
        protected override async Task<SendUserActionResult> ExecuteImplementationAsync(SendUserActionParameter parameter, IContextInformation contextInformation)
        {
            // get the process instance
            string processId = parameter.ProcessId;
            string processInstanceId = parameter.ProcessInstanceId;

            var getProcessInstanceResult =
            await this.GetProcessInstanceQuery.ExecuteAsync(new data.ICommands.GetProcessInstanceParameter(processId, processInstanceId), contextInformation);

            // TODO: check error

            ProcessInstance processInstance = getProcessInstanceResult.Value.ProcessInstance;

            var taskInstance = processInstance.TaskInstances.FirstOrDefault(ti => ti.Id == parameter.TaskInstanceId);

            // the process instance has this task instance as active task instance
            if (false == this.IsTaskInProcessAndActive(taskInstance)) { throw SendUserActionResult.TaskIsNotInProcessOrNotActive(); }

            // actionid contains in the task
            if (false == this.IsActionIdContainedInTask(taskInstance, parameter.ActionId, out ActionModel action)) { throw SendUserActionResult.ActionIdNotContainedInTask(); }

            // user is assigned or 
            // TODO: no other user assigned and in the group of those selected group
            if (false == this.HasCurrentUserAuthorisationToCallAction(taskInstance, contextInformation.User.UserId)) { throw SendUserActionResult.UserNotAuthorised(); }

            // Action points to a valid process item
            if (false == this.DoesActionPointsToAValidProcessItem(processInstance, action, out TaskModel nextTask, out bool processCompleted, out bool processCanceled)) { throw SendUserActionResult.ActionNotPointingAValidProcessItem(); }

            // TODO: other validations?

            var currentlyAssignedUserResult = await this.GetOrganizationUserQuery.ExecuteAsync(new data.ICommands.GetOrganizationUserParameter(taskInstance.AssignedUserId), contextInformation);
            // TODO: handle query error
            var currentlyAssignedUser = currentlyAssignedUserResult.Value.OrganizationUser;

            // close current task
            // how? - list all required things

            //      remove the task from user's inbox - if exists (for newly started tasks, it may not be added)
            this.RemoveCurrentTaskFromTaskOwnersInbox(processInstance, currentlyAssignedUser, parameter.TaskInstanceId, contextInformation);

            await SaveOrganizationUser(currentlyAssignedUser, contextInformation);

            //      set current task as completed or canceled
            this.SetTaskInstanceCompleted(taskInstance, processCanceled);

            string newTaskInstanceId = null;
            string newTaskName = null;
            string assignedName = null;

            if (processCompleted)
            {
                this.CompleteProcessInstance(processInstance);
            }
            else if (processCanceled)
            {
                this.CancelProcessInstance(processInstance);
            }
            else
            {
                // create the next task(s)
                // how? who is assigned etc.
                (newTaskInstanceId, newTaskName, assignedName) = await this.AddNewTaskInstanceInProcessInstance(
                    processId, processInstance, previousTaskInstance: taskInstance, currentlyAssignedUser, nextTask, contextInformation);
            }

            await this.SaveProcessInstance(processId, processInstance, contextInformation);

            return new SendUserActionResult(processCompleted, processCanceled, newTaskInstanceId, newTaskName, assignedName);
        }

        private void CompleteProcessInstance(ProcessInstance processInstance)
        {
            processInstance.ProcessState = ProcessStates.Completed;
        }
        private void CancelProcessInstance(ProcessInstance processInstance)
        {
            processInstance.ProcessState = ProcessStates.Cancelled;
        }

        private async Task SaveProcessInstance(string processId, ProcessInstance processInstance, IContextInformation contextInformation)
        {
            await this.SaveProcessInstanceCommand.ExecuteAsync(new SaveProcessInstanceParameter(processId, processInstance), contextInformation);
        }

        private async Task<(string NewTaskInstanceId, string NewTaskName, string AssignedName)> AddNewTaskInstanceInProcessInstance(
            string processId, ProcessInstance processInstance, TaskInstance previousTaskInstance, OrganizationUser currentlyAssignedUser, TaskModel nextTask, IContextInformation contextInformation)
        {
            /*
            // Analysis:
            scenarios for a task is assigned:
            - previous task completed, new task created and assigned to someone 
            - pervious task completed, new task created and assigned to a group
            - prevoius task completed, new task created and assigned to a pool ( a group of users not having a group, just configured )
            - a current task assigned to a group or a group of users is pulled to themselves by someone
            - a current task assigned to someone by someone authorised
            - a current task is put back to the group or pool

            we need notification scenarions as well. 
            what to send when to send to whom

            */

            (bool canBeAssignedToASpecificUser, OrganizationUser user) =
                await this.Can_Task_Instance_Be_Assigned_To_A_Specific_User(nextTask, currentlyAssignedUser, contextInformation);

            // TODO: if cannot be assigned to a user, there must be a group by business rules. if group is unexpectedly not present, this spcific situation should be a known exception. 

            var newTaskInstance =
            new TaskInstance()
            {
                StartedAt = DateTime.UtcNow,
                TaskState = canBeAssignedToASpecificUser ? TaskStates.Active : TaskStates.Waiting,
                Task = nextTask
            };

            if (canBeAssignedToASpecificUser)
            {
                newTaskInstance.AssignedUserId = user.Id;
                newTaskInstance.AssigneeName = user.UserFullName;

                AddTaskToUsersInbox(processId, processInstance, user, newTaskInstance);

                await this.SaveOrganizationUser(user, contextInformation);
            }
            else if (nextTask.AssigningConfiguration?.AssigningGroupId != null)
            {
                var getGroupQuery = await this.GetGroupQuery.ExecuteAsync(new GetGroupParameter(nextTask.AssigningConfiguration.AssigningGroupId), contextInformation);
                // TODO: Check if group exists
                var group = getGroupQuery.Value.Group;

                newTaskInstance.AssignedGroupId = nextTask.AssigningConfiguration.AssigningGroupId;
                newTaskInstance.AssigneeName = group.GroupName;

                AddTaskToGroupInbox(processId, processInstance, newTaskInstance, group);

                await this.SaveGroup(group, contextInformation);
            }
            else
            {
                // TODO: mis-configuration - handle properly - if it is even possible haha.
                throw new NotImplementedException();
            }

            var taskInstanceList = processInstance.TaskInstances.ToList();
            taskInstanceList.Add(newTaskInstance);
            processInstance.TaskInstances = taskInstanceList.ToArray();

            return (newTaskInstance.Id, newTaskInstance.Task.TaskName, newTaskInstance.AssigneeName);
        }

        private static void AddTaskToGroupInbox(string processId, ProcessInstance processInstance, TaskInstance newTaskInstance, Group group)
        {
            var groupTasks = group.GroupTasks.ToList();
            groupTasks.Add(new DenormalizedTaskInstance()
            {
                DueDate = null, // TODO: calculate due date
                ProcessId = processId,
                ProcessInstanceId = processInstance.Id,
                ProcessName = processInstance.ProcessName,
                TaskInstanceId = newTaskInstance.Id,
                TaskName = newTaskInstance.Task.TaskName,
                TaskState = newTaskInstance.TaskState
            });
            group.GroupTasks = groupTasks.ToArray();
        }

        private static void AddTaskToUsersInbox(string processId, ProcessInstance processInstance, OrganizationUser user, TaskInstance newTaskInstance)
        {
            var userTasks = user.Tasks.ToList();
            userTasks.Add(new DenormalizedTaskInstance()
            {
                DueDate = null, // TODO: calculate due date
                ProcessId = processId,
                ProcessInstanceId = processInstance.Id,
                ProcessName = processInstance.ProcessName,
                TaskInstanceId = newTaskInstance.Id,
                TaskName = newTaskInstance.Task.TaskName,
                TaskState = newTaskInstance.TaskState
            });

            user.Tasks = userTasks.ToArray();
        }

        private async Task SaveGroup(Group group, IContextInformation contextInformation)
        {
            await this.SaveGroupCommand.ExecuteAsync(new SaveGroupParameter(group), contextInformation);
        }

        private async Task<(bool canAssignToSpecificUser, OrganizationUser user)> Can_Task_Instance_Be_Assigned_To_A_Specific_User(TaskModel nextTask, OrganizationUser currentlyAssignedUser, IContextInformation contextInformation)
        {
            var assigningConfiguration = nextTask.AssigningConfiguration;

            string assignedUserId = null;

            if (assigningConfiguration?.AssigningRule?.AssignToManager ?? false)
            {
                // Analysis:
                // we need to learn previous item's user?
                // so are these different? 
                //  - action user
                //  - assigned user
                // so in some instances, action user might be different, for example, a god user. 

                if (currentlyAssignedUser.ManagerId != null)
                {
                    assignedUserId = currentlyAssignedUser.ManagerId;

                    // TODO: ? manager id corresponds to a real user
                }
                else
                {
                    // TODO: who to assign then? to the same user? to a process owner
                    assignedUserId = currentlyAssignedUser.Id;
                }
            }
            else if (assigningConfiguration.AssigningUserId != null)
            {
                // TODO: is this a real & active user?
                assignedUserId = assigningConfiguration.AssigningUserId;
            }

            if (!string.IsNullOrEmpty(assignedUserId))
            {
                var getUserResult = await this.GetOrganizationUserQuery.ExecuteAsync(new GetOrganizationUserParameter(assignedUserId), contextInformation);

                if (getUserResult.Successful)
                {
                    var user = getUserResult.Value.OrganizationUser;

                    // TODO: Is user deactivated? Assign it but, inform process owners.

                    return (true, user);
                }
                else
                {
                    // TODO: This is unexpected. Should we inform anyone? 

                    return (false, null);
                }
            }
            else
            {
                return (false, null);
            }
        }

        private bool DoesActionPointsToAValidProcessItem(ProcessInstance processInstance, ActionModel action, out TaskModel nextTask, out bool processCompleted, out bool processCanceled)
        {
            nextTask = null;
            processCompleted = false;
            processCanceled = false;

            string nextItemId = action.NextItemId;

            if (nextItemId == null)
            {
                processCompleted = true;
                return true;
            }
            else if (nextItemId == "cancel")
            {
                processCanceled = true;
                return true;
            }

            nextTask = processInstance.ProcessModel.Tasks.FirstOrDefault(t => t.Id == nextItemId);

            if (nextTask != null)
            {
                // it is a task
                return true;
            }
            else
            {
                // TODO:! check for Conditions, ParallelTaskStartItems, ParallelTaskEndItems
                // TODO:! check if nothing is found. it is an exception
                return false;
            }
        }

        private void SetTaskInstanceCompleted(TaskInstance taskInstance, bool isCanceled)
        {
            taskInstance.TaskState = isCanceled ? TaskStates.Canceled : TaskStates.Completed;
            taskInstance.CompletedAt = DateTime.UtcNow;
        }

        private void RemoveCurrentTaskFromTaskOwnersInbox(ProcessInstance processInstance, OrganizationUser currentlyAssingedUser, string taskInstanceId, IContextInformation contextInformation)
        {
            var taskInstance = processInstance.TaskInstances.FirstOrDefault(ti => ti.Id == taskInstanceId);

            if (taskInstance == null)
            {
                return;
            }

            string assingedUserId = taskInstance.AssignedUserId;

            if (string.IsNullOrEmpty(assingedUserId))
            {
                return;
            }

            // keep other tasks
            currentlyAssingedUser.Tasks = currentlyAssingedUser.Tasks.Where(t => t.TaskInstanceId != taskInstanceId).ToArray();
        }

        private async Task SaveOrganizationUser(OrganizationUser user, IContextInformation contextInformation)
        {
            await this.SaveOrganizationUserCommand.ExecuteAsync(new SaveOrganizationUserParameter(user), contextInformation);
        }

        private bool HasCurrentUserAuthorisationToCallAction(TaskInstance taskInstance, string userId)
        {
            return userId == taskInstance.AssignedUserId;
        }

        private bool IsActionIdContainedInTask(TaskInstance taskInstance, string actionId, out ActionModel action)
        {
            action = taskInstance.Task?.Actions.FirstOrDefault(a => a.Id == actionId);

            return action != null;
        }

        private bool IsTaskInProcessAndActive(TaskInstance taskInstance)
        {
            if (taskInstance == null)
            {
                return false;
            }

            return taskInstance.TaskState != TaskStates.Completed && taskInstance.TaskState != TaskStates.Canceled;
        }

        protected override async Task<IEnumerable<OperationErrorInformation>> ValidateAsync(SendUserActionParameter parameter, IContextInformation contextInformation)
        {
            return Enumerable.Empty<OperationErrorInformation>();
        }
    }
}
