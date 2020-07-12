using System;
using bpmist.common.Commands;

namespace bpmist.common.ICommands
{
    public interface ISendUserActionCommand : ICommand<SendUserActionParameter, SendUserActionResult>
    {
    }

    public class SendUserActionParameter
    {
        public SendUserActionParameter(
            string ProcessId, string ProcessInstanceId, string TaskInstanceId, string ActionId, string Notes
            )
        {
            this.ProcessId = ProcessId;
            this.ProcessInstanceId = ProcessInstanceId;
            this.TaskInstanceId = TaskInstanceId;
            this.ActionId = ActionId;
            this.Notes = Notes;
        }

        public string ProcessId { get; } 
        public string ProcessInstanceId { get; } 
        public string TaskInstanceId { get; } 
        public string ActionId { get; } 
        public string Notes { get; } 
    }

public class SendUserActionResult
{
    public SendUserActionResult(bool HasProcessCompleted, string NewTaskInstanceId, string AssignedName)
    {
            this.HasProcessCompleted = HasProcessCompleted;
            this.NewTaskInstanceId = NewTaskInstanceId;
            this.AssignedName = AssignedName;
    }

        public bool HasProcessCompleted { get; } 
        public string NewTaskInstanceId { get; } 
        public string AssignedName { get; } 

        public static BusinessError TaskIsNotInProcessOrNotActive(params string[] messageTemplateData) => new BusinessError("TaskIsNotInProcessOrNotActive ", "Task is not found.  ", messageTemplateData);
        public static BusinessError ActionIdNotContainedInTask(params string[] messageTemplateData) => new BusinessError("ActionIdNotContainedInTask ", "Action is not found.  ", messageTemplateData);
        public static BusinessError UserNotAuthorised(params string[] messageTemplateData) => new BusinessError("UserNotAuthorised ", "You are not authorised for this action. The task should be assigned to you.  ", messageTemplateData);
        public static BusinessError ActionNotPointingAValidProcessItem(params string[] messageTemplateData) => new BusinessError("ActionNotPointingAValidProcessItem ", "ActionNotPointingAValidProcessItem ", messageTemplateData);
}


}
