using System;
using System.Collections.Generic;
using bpmist.common.Commands;

namespace bpmist.common.ICommands
{
    public interface ISendUserActionCommand : ICommand<SendUserActionParameter, SendUserActionResult>
    {
    }

    public class SendUserActionParameter
    {
        public SendUserActionParameter(
            string ProcessId, string ProcessInstanceId, string TaskInstanceId, string ActionId, string Notes, Dictionary<string, int[]> DateFormValues, Dictionary<string, string> TextFormValues
            )
        {
            this.ProcessId = ProcessId;
            this.ProcessInstanceId = ProcessInstanceId;
            this.TaskInstanceId = TaskInstanceId;
            this.ActionId = ActionId;
            this.Notes = Notes;
            this.DateFormValues = DateFormValues;
            this.TextFormValues = TextFormValues;
        }

        public string ProcessId { get; } 
        public string ProcessInstanceId { get; } 
        public string TaskInstanceId { get; } 
        public string ActionId { get; } 
        public string Notes { get; } 
        public Dictionary<string, int[]> DateFormValues { get; } 
        public Dictionary<string, string> TextFormValues { get; } 
    }

public class SendUserActionResult
{
    public SendUserActionResult(bool HasProcessCompleted, bool HasProcessCanceled, string NewTaskInstanceId, string NewTaskName, string AssignedName)
    {
            this.HasProcessCompleted = HasProcessCompleted;
            this.HasProcessCanceled = HasProcessCanceled;
            this.NewTaskInstanceId = NewTaskInstanceId;
            this.NewTaskName = NewTaskName;
            this.AssignedName = AssignedName;
    }

        public bool HasProcessCompleted { get; } 
        public bool HasProcessCanceled { get; } 
        public string NewTaskInstanceId { get; } 
        public string NewTaskName { get; } 
        public string AssignedName { get; } 

        public static BusinessError TaskIsNotInProcessOrNotActive(params string[] messageTemplateData) => new BusinessError("TaskIsNotInProcessOrNotActive", "Task is not found.  ", messageTemplateData);
        public static BusinessError ActionIdNotContainedInTask(params string[] messageTemplateData) => new BusinessError("ActionIdNotContainedInTask", "Action is not found.  ", messageTemplateData);
        public static BusinessError UserNotAuthorised(params string[] messageTemplateData) => new BusinessError("UserNotAuthorised", "You are not authorised for this action. The task should be assigned to you.  ", messageTemplateData);
        public static BusinessError ActionNotPointingAValidProcessItem(params string[] messageTemplateData) => new BusinessError("ActionNotPointingAValidProcessItem", "ActionNotPointingAValidProcessItem ", messageTemplateData);
        public static BusinessError InvalidFormValues(params string[] messageTemplateData) => new BusinessError("InvalidFormValues", "Invalid Form Values: {0} ", messageTemplateData);
}


}
