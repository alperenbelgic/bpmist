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

            ProcessInstance processInstance = getProcessInstanceResult.Value.ProcessInstace;

            var taskInstance = processInstance.TaskInstances.FirstOrDefault(ti => ti.Id == parameter.TaskInstanceId);

            // the process instance has this task instance as active task instance
            if (false == this.IsTaskInProcessAndActive(taskInstance)) { throw SendUserActionResult.TaskIsNotInProcessOrNotActive(); }

            // actionid contains in the task
            if (false == this.IsActionIdContainedInTask(taskInstance, parameter.ActionId, out ActionModel action)) { throw SendUserActionResult.ActionIdNotContainedInTask(); }

            // user is assigned or 
            // TODO: no other user assigned and in the group of those selected group
            if (false == this.HasCurrentUserAuthorisationToCallAction(taskInstance, contextInformation.User.UserId)) { throw SendUserActionResult.UserNotAuthorised(); }

            // Action points to a valid process item
            if (false == this.DoesActionPointsToAValidProcessItem(processInstance, action, out TaskModel nextTask, out bool processCompleted)) { throw SendUserActionResult.ActionNotPointingAValidProcessItem(); }

            // TODO: other validations?

            var currentlyAssignedUserResult = await this.GetOrganizationUserQuery.ExecuteAsync(new data.ICommands.GetOrganizationUserParameter(taskInstance.AssignedUserId), contextInformation);
            // TODO: handle query error
            var currentlyAssignedUser = currentlyAssignedUserResult.Value.OrganizationUser;

            // close current task
            // how? - list all required things

            //      remove the task from user's inbox - if exists (for newly started tasks, it may not be added)
            this.RemoveCurrentTaskFromTaskOwnersInbox(processInstance, currentlyAssignedUser, parameter.TaskInstanceId, contextInformation);

            await SaveOrganizationUser(currentlyAssignedUser, contextInformation);

            //      set current task as completed
            this.SetTaskInstanceCompleted(taskInstance);


            string newTaskInstanceId = null;

            if (processCompleted)
            {
                this.CompleteProcessInstance(processInstance);
            }
            else
            {
                // create the next task(s)
                // how? who is assigned etc.
                this.AddNewTaskInstanceInProcessInstance(processInstance, previousTaskInstance: taskInstance, currentlyAssignedUser, nextTask, out newTaskInstanceId);
            }

            await this.SaveProcessInstance(processId, processInstance, contextInformation);

            return new SendUserActionResult(processCompleted, newTaskInstanceId);
        }

        private void CompleteProcessInstance(ProcessInstance processInstance)
        {
            processInstance.ProcessState = ProcessStates.Completed;
        }

        private async Task SaveProcessInstance(string processId, ProcessInstance processInstance, IContextInformation contextInformation)
        {
            await this.SaveProcessInstanceCommand.ExecuteAsync(new SaveProcessInstanceParameter(processId, processInstance), contextInformation);
        }

        private void AddNewTaskInstanceInProcessInstance(ProcessInstance processInstance, TaskInstance previousTaskInstance, OrganizationUser currentlyAssignedUser, TaskModel nextTask, out string newTaskInstanceId)
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

            bool canBeAssignedToASpecificUser = this.CanTaskInstanceBeAssignedToASpecificUser(nextTask, currentlyAssignedUser, out string userId);

            // TODO: if cannot be assigned to a user, there must be a group by business rules. if unexpectedly not present, this should be a known exception. 

            var newTaskInstance =
            new TaskInstance()
            {
                StartedAt = DateTime.UtcNow,
                TaskState = canBeAssignedToASpecificUser ? TaskStates.Active : TaskStates.Waiting
            };

            if (canBeAssignedToASpecificUser)
            {
                newTaskInstance.AssignedUserId = userId;
            }
            else if (nextTask.AssigningConfiguration?.AssigningGroupId != null)
            {
                newTaskInstance.AssignedGroupId = nextTask.AssigningConfiguration.AssigningGroupId;
            }
            else if (nextTask.AssigningConfiguration.PoolId != null && nextTask.AssigningConfiguration.PoolId.Count() > 0)
            {
                // TODO: PoolId ->This function doesn't exist yet. correct error should be thrown
                throw new NotImplementedException();
            }
            else
            {
                // TODO: mis-configuration - handle properly - if it is even possible haha.
                throw new NotImplementedException();
            }

            var taskInstanceList = processInstance.TaskInstances.ToList();
            taskInstanceList.Add(newTaskInstance);
            processInstance.TaskInstances = taskInstanceList.ToArray();

            newTaskInstanceId = newTaskInstance.Id;
        }

        private bool CanTaskInstanceBeAssignedToASpecificUser(TaskModel nextTask, OrganizationUser currentlyAssignedUser, out string assignedUserId)
        {
            var assigningConfiguration = nextTask.AssigningConfiguration;

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
                    // TODO: ? manager id corresponds to a real user?
                    assignedUserId = currentlyAssignedUser.ManagerId;
                    return true;
                }
                else
                {
                    // TODO: who to assign then? to the same user? to a process owner
                    assignedUserId = currentlyAssignedUser.Id;
                    return true;
                }

            }
            else if (assigningConfiguration.AssigningUserId != null)
            {
                // TODO: is this a real & active user?
                assignedUserId = assigningConfiguration.AssigningUserId;
                return true;
            }
            else
            {
                assignedUserId = null;
                return false;
            }
        }

        private bool DoesActionPointsToAValidProcessItem(ProcessInstance processInstance, ActionModel action, out TaskModel nextTask, out bool processCompleted)
        {
            nextTask = null;
            processCompleted = false;

            string nextItemId = action.NextItemId;

            if (nextItemId == null)
            {
                processCompleted = true;
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

        private void SetTaskInstanceCompleted(TaskInstance taskInstance)
        {
            taskInstance.TaskState = TaskStates.Completed;
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

        private async Task SaveOrganizationUser(OrganizationUser currentlyAssingedUser, IContextInformation contextInformation)
        {
            await this.SaveOrganizationUserCommand.ExecuteAsync(new SaveOrganizationUserParameter(currentlyAssingedUser), contextInformation);
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

            return taskInstance.TaskState == TaskStates.Active;
        }

        protected override async Task<IEnumerable<OperationErrorInformation>> ValidateAsync(SendUserActionParameter parameter, IContextInformation contextInformation)
        {
            return Enumerable.Empty<OperationErrorInformation>();
        }
    }
}
