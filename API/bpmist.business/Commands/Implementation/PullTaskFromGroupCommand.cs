using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using bpmist.common.Commands;
using bpmist.common.DataModels.DocumentTypes;
using bpmist.common.DataModels.SubDocumentTypes;
using bpmist.common.ICommands;

namespace bpmist.business.Commands
{
    public partial class PullTaskFromGroupCommand
    {
        protected override async Task<PullTaskFromGroupResult> ExecuteImplementationAsync(PullTaskFromGroupParameter parameter, IContextInformation contextInformation)
        {
            string processId = parameter.ProcessId;
            string processInstanceId = parameter.ProcessInstanceId;
            string taskInstanceId = parameter.TaskInstanceId;
            string actionUserId = contextInformation.User.UserId;

            ProcessInstance processInstance = await GetProcessInstance(processId, processInstanceId, contextInformation);

            TaskInstance taskInstance = GetTaskInstance(processInstance, taskInstanceId);

            OrganizationUser user = await GetUser(actionUserId, contextInformation);

            if (string.IsNullOrWhiteSpace(taskInstance.AssignedUserId) && user.GroupIds.Contains(taskInstance.AssignedGroupId))
            {
                taskInstance.AssignedUserId = actionUserId;
                taskInstance.AssigneeName = user.UserFullName;
                taskInstance.TaskState = TaskStates.Active;

                // TODO:! User & Group inbox update
            }
            else
            {
                throw PullTaskFromGroupResult.TaskIsNotAssignedToYourGroup();
            }

            await this.SaveProcessInstanceCommand.ExecuteAsync(new data.ICommands.SaveProcessInstanceParameter(processId, processInstance), contextInformation);

            return new PullTaskFromGroupResult();
        }

        private async Task<OrganizationUser> GetUser(string actionUserId, IContextInformation contextInformation)
        {
            var getUserResult = await this.GetOrganizationUserQuery.ExecuteAsync(new data.ICommands.GetOrganizationUserParameter(actionUserId), contextInformation);

            // TODO: handle 

            return getUserResult.Value.OrganizationUser;
        }

        private TaskInstance GetTaskInstance(ProcessInstance processInstance, string taskInstanceId)
        {
            var taskInstance = processInstance.TaskInstances.FirstOrDefault(ti => ti.Id == taskInstanceId);

            // TODO: handle not found taskInstance

            return taskInstance;
        }

        private async Task<ProcessInstance> GetProcessInstance(string processId, string processInstanceId, IContextInformation contextInformation)
        {
            var getProcessInstanceResult = await this.GetProcessInstanceQuery.ExecuteAsync(new data.ICommands.GetProcessInstanceParameter(processId, processInstanceId), contextInformation);

            // TODO: check if process instance 

            return getProcessInstanceResult.Value.ProcessInstance;
        }

        protected override async Task<IEnumerable<OperationErrorInformation>> ValidateAsync(PullTaskFromGroupParameter parameter, IContextInformation contextInformation)
        {
            return Enumerable.Empty<OperationErrorInformation>();
        }
    }
}
