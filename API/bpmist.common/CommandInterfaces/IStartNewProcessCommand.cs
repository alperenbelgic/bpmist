using System;
using bpmist.common.Commands;

namespace bpmist.common.ICommands
{
    public interface IStartNewProcessCommand : ICommand<StartNewProcessParameter, StartNewProcessResult>
    {
    }

    public class StartNewProcessParameter
    {
        public StartNewProcessParameter(
            string ProcessId
            )
        {
            this.ProcessId = ProcessId;
        }

        public string ProcessId { get; } 
    }

public class StartNewProcessResult
{
    public StartNewProcessResult(string ProcessName, string ProcessInstanceId, string TaskName, string TaskInstanceId)
    {
            this.ProcessName = ProcessName;
            this.ProcessInstanceId = ProcessInstanceId;
            this.TaskName = TaskName;
            this.TaskInstanceId = TaskInstanceId;
    }

        public string ProcessName { get; } 
        public string ProcessInstanceId { get; } 
        public string TaskName { get; } 
        public string TaskInstanceId { get; } 
}


}
