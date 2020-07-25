using System;
using System.Collections.Generic;
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
    public StartNewProcessResult(string ProcessInstanceId, string TaskInstanceId)
    {
            this.ProcessInstanceId = ProcessInstanceId;
            this.TaskInstanceId = TaskInstanceId;
    }

        public string ProcessInstanceId { get; } 
        public string TaskInstanceId { get; } 
}


}
