using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using bpmist.common.Commands;
using bpmist.common.DataModels.DocumentTypes;
using bpmist.common.DataModels.SubDocumentTypes;
using bpmist.common.ICommands;
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

            ProcessInstance processInstace = getProcessInstanceResult.Value.ProcessInstace;


            // the process instance has this task instance as active task instance
            if (false == this.IsTaskInProcessAndActive(processInstace, parameter.TaskInstanceId)) { throw SendUserActionResult.TaskIsNotInProcessOrNotActive(); }

            // actionid contains in the task
            if (false == this.IsActionIdContainedInTask(processInstace, parameter.TaskInstanceId, parameter.ActionId)) { throw SendUserActionResult.ActionIdNotContainedInTask(); }

            // user is assigned or 
            // TODO: no other user assigned and in the group of those selected group
            if (false == this.HasCurrentUserAuthorisationToCallAction(processInstace, contextInformation.User.UserId, parameter.TaskInstanceId)) { throw SendUserActionResult.UserNotAuthorised(); }

            // TODO: other validations?

            // close current task
            // how? - list all required things
            //      remove the task from user's inbox - if exists (for newly started tasks, it may not be added)
            //          the question was how to do it. 1) get the doc in firestore. arrange in business. replace in firestore. 2) do everything with one command in firestore. I think I will do second one. it's not horrible and I want to be bit quick. 
            //          changed my mind. I'll always need read and set methods. it will require one business command. one command is already esssential. how about this?
            //      set current task as completed

            // create the next task(s)
            // how? who is assigned etc.

            throw new NotImplementedException();
        }

        private bool HasCurrentUserAuthorisationToCallAction(ProcessInstance processInstace, string userId, string taskInstanceId)
        {
            var taskInstance = processInstace.TaskInstances.FirstOrDefault(ti => ti.Id == taskInstanceId);

            if (taskInstance == null)
            {
                return false;
            }

            return userId == taskInstance.AssignedUserId;
        }

        private bool IsActionIdContainedInTask(ProcessInstance processInstace, string taskInstanceId, string actionId)
        {
            var taskInstance = processInstace.TaskInstances.FirstOrDefault(ti => ti.Id == taskInstanceId);

            if (taskInstance == null)
            {
                return false;
            }

            return taskInstance.Task?.Actions.Any(a => a.Id == actionId) ?? false;
        }

        private SendUserActionResult TaskIsNotInProcessOrNotActiveResult()
        {
            //throw new ApplicationError(SendUserActionErrors.TaskIsNotInProcessOrNotActive, )
            //return new SendUserActionResult()
            throw new NotImplementedException();
        }

        private bool IsTaskInProcessAndActive(ProcessInstance processInstace, string taskInstanceId)
        {
            var taskInstance = processInstace.TaskInstances.FirstOrDefault(ti => ti.Id == taskInstanceId);

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
