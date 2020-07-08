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

            var processInstance =
                                    new ProcessInstance()
                                    {
                                        OriginalProcessModel = process.ProcessModel,
                                        ProcessModel = process.ProcessModel,
                                        TaskInstances = new TaskInstance[]
                                        {
                                            new TaskInstance()
                                            {
                                                AssignedUserId = userId,
                                                StartedAt = DateTime.UtcNow,
                                                Task = process.ProcessModel.Tasks[0],
                                                TaskState = TaskStates.Candidate
                                            }
                                        }
                                    };

            var createProcessInstanceResult =
            await this.CreateProcessInstanceCommand.ExecuteAsync(new CreateProcessInstanceParameter(processId, processInstance), contextInformation);

            // TODO: handle errors

            string processInstanceId = createProcessInstanceResult.Value.ProcessInstanceId;
            string taskName = process.ProcessModel.Tasks[0].TaskName;

            return new StartNewProcessResult(process.ProcessName, taskName, processInstanceId);
        }

        protected override async Task<IEnumerable<OperationErrorInformation>> ValidateAsync(StartNewProcessParameter parameter, IContextInformation contextInformation)
        {
            // TODO: check if process id is not null/empty
            return Enumerable.Empty<OperationErrorInformation>();
        }
    }
}
