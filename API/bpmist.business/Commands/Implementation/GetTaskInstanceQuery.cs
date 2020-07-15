using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using bpmist.common.Commands;
using bpmist.common.DataModels.DocumentTypes;
using bpmist.common.DataModels.SubDocumentTypes;
using bpmist.common.ICommands;
using Google.Api;

namespace bpmist.business.Commands
{
    public partial class GetTaskInstanceQuery
    {
        protected override async Task<GetTaskInstanceResult> ExecuteImplementationAsync(GetTaskInstanceParameter parameter, IContextInformation contextInformation)
        {
            string processId = parameter.ProcessId;
            string processInstanceId = parameter.ProcessInstanceId;
            string taskInstanceId = parameter.TaskInstanceId;
            string actionUserId = contextInformation.User.UserId;

            var processInstance = await GetProcessInstance(contextInformation, processId, processInstanceId);

            var taskInstance = processInstance.TaskInstances.FirstOrDefault(ti => ti.Id == taskInstanceId);

            // TODO: handle non existing taskInstance

            string processName = processInstance.ProcessName;
            string taskName = taskInstance.Task.TaskName;
            string assigneeName = taskInstance.AssigneeName;
            string taskState = taskInstance.TaskState;

            var otherTasks = this.GetOtherTasks(processInstance.TaskInstances);

            if (taskState == TaskStates.Completed || taskState == TaskStates.Canceled)
            {
                // no action, no editing.
                return new GetTaskInstanceResult(processName, taskName, assigneeName, taskState, new GetTaskInstance_ActionsResult[0], new GetTaskInstance_UserTaskStateResult(false, false, false, false), otherTasks);
            }

            var actions = taskInstance.Task.Actions.Select(a => new GetTaskInstance_ActionsResult(a.ActionText, a.ActionType, a.Id)).ToArray();

            var userTaskState = await GetUserTaskState(taskInstance, actionUserId, contextInformation);


            return new GetTaskInstanceResult(processName, taskName, assigneeName, taskState, actions, userTaskState, otherTasks);
        }

        private GetTaskInstance_OtherTasksResult[] GetOtherTasks(TaskInstance[] taskInstances)
        {
            return taskInstances.Select(ti => new GetTaskInstance_OtherTasksResult(ti.Id, ti.Task.TaskName, ti.AssigneeName, ti.TaskState, ti.CompletedAt)).ToArray();
        }

        private async Task<GetTaskInstance_UserTaskStateResult> GetUserTaskState(TaskInstance taskInstance, string actionUserId, IContextInformation contextInformation)
        {
            bool canEdit = actionUserId == taskInstance.AssignedUserId;
            bool assignedToAnotherUser =
                !string.IsNullOrEmpty(taskInstance.AssignedUserId) &&
                actionUserId != taskInstance.AssignedUserId;

            bool assignedToCurrentUsersGroup;
            bool assignedToGroup;
            if (!string.IsNullOrWhiteSpace(taskInstance.AssignedUserId))
            {
                assignedToGroup = false;
                assignedToCurrentUsersGroup = false;
            }
            else if (!string.IsNullOrWhiteSpace(taskInstance.AssignedGroupId))
            {
                assignedToGroup = true;

                var getUserResult = await this.GetUserQuery.ExecuteAsync(new data.ICommands.GetOrganizationUserParameter(actionUserId), contextInformation);
                // TODO: Check if user is empty.
                var user = getUserResult.Value.OrganizationUser;

                assignedToCurrentUsersGroup = user.GroupIds.Any(gi => gi == taskInstance.AssignedGroupId);
            }
            else
            {
                // TODO: unexpected case
                throw new NotImplementedException();
            }

            var userTaskState = new GetTaskInstance_UserTaskStateResult(canEdit, assignedToAnotherUser, assignedToCurrentUsersGroup, assignedToGroup);

            return userTaskState;
        }

        private async Task<ProcessInstance> GetProcessInstance(IContextInformation contextInformation, string processId, string processInstanceId)
        {
            var getProcessInstanceResult =
                await this.GetProcessInstanceQuery.ExecuteAsync(new data.ICommands.GetProcessInstanceParameter(processId, processInstanceId), contextInformation);

            return getProcessInstanceResult.Value.ProcessInstance;
        }

        protected override async Task<IEnumerable<OperationErrorInformation>> ValidateAsync(GetTaskInstanceParameter parameter, IContextInformation contextInformation)
        {
            return Enumerable.Empty<OperationErrorInformation>();
        }
    }
}
