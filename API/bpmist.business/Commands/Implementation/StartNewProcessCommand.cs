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

            var user = await this.GetUser(userId, contextInformation);

            string userFullName = user.UserFullName;

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

            AddUserTasks(process.Id, process.ProcessName, firstTask, user, taskInstance, processInstance);

            await this.SaveUser(user, contextInformation);

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

        private static void AddUserTasks(string processId, string processName, TaskModel firstTask, OrganizationUser user, TaskInstance taskInstance, ProcessInstance processInstance)
        {
            var userTasks = user.Tasks.ToList();
            userTasks.Add(new DenormalizedTaskInstance()
            {
                DueDate = null,
                ProcessId = processId,
                ProcessName = processName,
                ProcessInstanceId = processInstance.Id,
                TaskName = firstTask.TaskName,
                TaskInstanceId = taskInstance.Id,
                TaskState = taskInstance.TaskState
            });

            user.Tasks = userTasks.ToArray();
        }

        private async Task SaveUser(OrganizationUser user, IContextInformation contextInformation)
        {
            await this.SaveOrganizationUserCommand.ExecuteAsync(new SaveOrganizationUserParameter(user), contextInformation);
        }

        public async Task<OrganizationUser> GetUser(string userId, IContextInformation contextInformation)
        {
            var getUserQueryResult = await this.GetUserQuery.ExecuteAsync(new GetOrganizationUserParameter(userId), contextInformation);

            // TODO: handle not returned user

            return getUserQueryResult.Value.OrganizationUser;
        }

        protected override async Task<IEnumerable<OperationErrorInformation>> ValidateAsync(StartNewProcessParameter parameter, IContextInformation contextInformation)
        {
            // TODO: check if process id is not null/empty
            return Enumerable.Empty<OperationErrorInformation>();
        }
    }
}
