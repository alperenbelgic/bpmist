using System;
using bpmist.common.Commands;

namespace bpmist.common.ICommands
{
    public interface IGetTaskInstanceQuery : ICommand<GetTaskInstanceParameter, GetTaskInstanceResult>
    {
    }

    public class GetTaskInstanceParameter
    {
        public GetTaskInstanceParameter(
            string ProcessId, string ProcessInstanceId, string TaskInstanceId
            )
        {
            this.ProcessId = ProcessId;
            this.ProcessInstanceId = ProcessInstanceId;
            this.TaskInstanceId = TaskInstanceId;
        }

        public string ProcessId { get; } 
        public string ProcessInstanceId { get; } 
        public string TaskInstanceId { get; } 
    }

public class GetTaskInstanceResult
{
    public GetTaskInstanceResult(string ProcessName, string TaskName, string AssigneeName, string TaskState, GetTaskInstance_ActionsResult[] Actions, GetTaskInstance_UserTaskStateResult UserTaskState)
    {
            this.ProcessName = ProcessName;
            this.TaskName = TaskName;
            this.AssigneeName = AssigneeName;
            this.TaskState = TaskState;
            this.Actions = Actions;
            this.UserTaskState = UserTaskState;
    }

        public string ProcessName { get; } 
        public string TaskName { get; } 
        public string AssigneeName { get; } 
        public string TaskState { get; } 
        public GetTaskInstance_ActionsResult[] Actions { get; } 
        public GetTaskInstance_UserTaskStateResult UserTaskState { get; } 
}

public class GetTaskInstance_ActionsResult
{
    public GetTaskInstance_ActionsResult(string ActionText, string ActionType, string ActionId)
    {
            this.ActionText = ActionText;
            this.ActionType = ActionType;
            this.ActionId = ActionId;
    }

        public string ActionText { get; } 
        public string ActionType { get; } 
        public string ActionId { get; } 
}

public class GetTaskInstance_UserTaskStateResult
{
    public GetTaskInstance_UserTaskStateResult(bool CanEdit)
    {
            this.CanEdit = CanEdit;
    }

        public bool CanEdit { get; } 
}


}
