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
            string ProcessId, string ProcessInstanceId, string TaskInstanceId, string CommandId, string Notes
            )
        {
            this.ProcessId = ProcessId;
            this.ProcessInstanceId = ProcessInstanceId;
            this.TaskInstanceId = TaskInstanceId;
            this.CommandId = CommandId;
            this.Notes = Notes;
        }

        public string ProcessId { get; } 
        public string ProcessInstanceId { get; } 
        public string TaskInstanceId { get; } 
        public string CommandId { get; } 
        public string Notes { get; } 
    }

public class SendUserActionResult
{
    public SendUserActionResult (bool HasProcessCompleted, string NewTaskInstanceId)
    {
            this.HasProcessCompleted = HasProcessCompleted;
            this.NewTaskInstanceId = NewTaskInstanceId;
    }

        public bool HasProcessCompleted { get; } 
        public string NewTaskInstanceId { get; } 
}


}
