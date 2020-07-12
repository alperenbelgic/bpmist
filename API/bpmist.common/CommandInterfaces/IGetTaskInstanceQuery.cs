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
            
            )
        {

        }


    }

public class GetTaskInstanceResult
{
    public GetTaskInstanceResult(string ProcessName, string TaskName, GetTaskInstance_UserTaskStateResult UserTaskState)
    {
            this.ProcessName = ProcessName;
            this.TaskName = TaskName;
            this.UserTaskState = UserTaskState;
    }

        public string ProcessName { get; } 
        public string TaskName { get; } 
        public GetTaskInstance_UserTaskStateResult UserTaskState { get; } 
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
