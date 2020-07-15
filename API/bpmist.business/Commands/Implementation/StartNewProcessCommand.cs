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

namespace bpmist.business.Commands
{
    public partial class StartNewProcessCommand
    {
        protected override async Task<StartNewProcessResult> ExecuteImplementationAsync(StartNewProcessParameter parameter, IContextInformation contextInformation)
        {
            // get process data            
            // prepare new instance data
            // save process instance data

            string userId = contextInformation.User.UserId;
            string processId = parameter.ProcessId;

            var getProcessResult =
            await this.GetProcessQuery.ExecuteAsync(new GetProcessParameter(processId), contextInformation);

            // TODO: handle errors

            var process = getProcessResult.Value.Process;


            var processModel = process.VersionedProcessModels.Last();

            var firstTask = processModel.Tasks.First();

            string userFullName = await this.GetUserName(userId, contextInformation);

            var taskInstance =
                                 new TaskInstance()
                                 {
                                     AssignedUserId = userId,
                                     AssigneeName = userFullName,
                                     StartedAt = DateTime.UtcNow,
                                     Task = firstTask,
                                     TaskState = TaskStates.Candidate
                                 };

            var processInstance =
                                    new ProcessInstance()
                                    {
                                        ProcessName = process.ProcessName,
                                        ProcessModel = processModel,
                                        TaskInstances = new TaskInstance[]
                                        {
                                           taskInstance
                                        }
                                    };

            var createProcessInstanceResult =
            await this.CreateProcessInstanceCommand.ExecuteAsync(new SaveProcessInstanceParameter(processId, processInstance), contextInformation);

            // TODO: handle errors

            string processInstanceId = createProcessInstanceResult.Value.ProcessInstanceId;
            string taskName = firstTask.TaskName;

            var actions = firstTask.Actions.Select(a =>
                {
                    return new StartNewProcess_ActionsResult(a.ActionText, a.ActionType, a.Id);
                })
                .ToArray();

            return new StartNewProcessResult(process.ProcessName, processInstanceId, taskName, taskInstance.Id, actions);
        }

        public async Task<string> GetUserName(string userId, IContextInformation contextInformation)
        {
            var getUserQueryResult = await this.GetUserQuery.ExecuteAsync(new GetOrganizationUserParameter(userId), contextInformation);

            // TODO: handle not returned user

            return getUserQueryResult.Value.OrganizationUser.UserFullName;
        }

        protected override async Task<IEnumerable<OperationErrorInformation>> ValidateAsync(StartNewProcessParameter parameter, IContextInformation contextInformation)
        {
            // TODO: check if process id is not null/empty
            return Enumerable.Empty<OperationErrorInformation>();
        }
    }
}
