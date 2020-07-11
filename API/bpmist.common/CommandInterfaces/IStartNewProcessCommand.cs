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
    public StartNewProcessResult(string ProcessName, string ProcessInstanceId, string TaskName, string TaskInstanceId, StartNewProcess_ActionsResult[] Actions)
    {
            this.ProcessName = ProcessName;
            this.ProcessInstanceId = ProcessInstanceId;
            this.TaskName = TaskName;
            this.TaskInstanceId = TaskInstanceId;
            this.Actions = Actions;
    }

        public string ProcessName { get; } 
        public string ProcessInstanceId { get; } 
        public string TaskName { get; } 
        public string TaskInstanceId { get; } 
        public StartNewProcess_ActionsResult[] Actions { get; } 
}

public class StartNewProcess_ActionsResult
{
    public StartNewProcess_ActionsResult(string ActionText, string ActionType, string ActionId)
    {
            this.ActionText = ActionText;
            this.ActionType = ActionType;
            this.ActionId = ActionId;
    }

        public string ActionText { get; } 
        public string ActionType { get; } 
        public string ActionId { get; } 
}


}
