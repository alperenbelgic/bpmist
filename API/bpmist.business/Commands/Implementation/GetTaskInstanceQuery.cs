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

            if (taskState == TaskStates.Completed || taskState == TaskStates.Canceled)
            {
                // no action, no editing.
                return new GetTaskInstanceResult(processName, taskName, assigneeName, taskState, new GetTaskInstance_ActionsResult[0], new GetTaskInstance_UserTaskStateResult(false));
            }

            var actions = taskInstance.Task.Actions.Select(a => new GetTaskInstance_ActionsResult(a.ActionText, a.ActionType, a.Id)).ToArray();

            bool canEdit = actionUserId == taskInstance.AssignedUserId;

            return new GetTaskInstanceResult(processName, taskName, assigneeName, taskState, actions, new GetTaskInstance_UserTaskStateResult(canEdit));
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
