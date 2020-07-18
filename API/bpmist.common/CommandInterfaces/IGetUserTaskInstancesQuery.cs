using System;
using bpmist.common.Commands;

namespace bpmist.common.ICommands
{
    public interface IGetUserTaskInstancesQuery : ICommand<GetUserTaskInstancesParameter, GetUserTaskInstancesResult>
    {
    }

    public class GetUserTaskInstancesParameter
    {
        public GetUserTaskInstancesParameter(
            
            )
        {

        }


    }

public class GetUserTaskInstancesResult
{
    public GetUserTaskInstancesResult(GetUserTaskInstances_UserTaskInstanceListResult[] UserTaskInstanceList, GetUserTaskInstances_GroupsTaskInstanceListResult[] GroupsTaskInstanceList)
    {
            this.UserTaskInstanceList = UserTaskInstanceList;
            this.GroupsTaskInstanceList = GroupsTaskInstanceList;
    }

        public GetUserTaskInstances_UserTaskInstanceListResult[] UserTaskInstanceList { get; } 
        public GetUserTaskInstances_GroupsTaskInstanceListResult[] GroupsTaskInstanceList { get; } 
}

public class GetUserTaskInstances_UserTaskInstanceListResult
{
    public GetUserTaskInstances_UserTaskInstanceListResult(string ProcessId, string ProcessInstanceId, string TaskInstanceId, string ProcessName, string TaskName, string TaskState, DateTime? DueDate, bool DuePast, int DaysToDue)
    {
            this.ProcessId = ProcessId;
            this.ProcessInstanceId = ProcessInstanceId;
            this.TaskInstanceId = TaskInstanceId;
            this.ProcessName = ProcessName;
            this.TaskName = TaskName;
            this.TaskState = TaskState;
            this.DueDate = DueDate;
            this.DuePast = DuePast;
            this.DaysToDue = DaysToDue;
    }

        public string ProcessId { get; } 
        public string ProcessInstanceId { get; } 
        public string TaskInstanceId { get; } 
        public string ProcessName { get; } 
        public string TaskName { get; } 
        public string TaskState { get; } 
        public DateTime? DueDate { get; } 
        public bool DuePast { get; } 
        public int DaysToDue { get; } 
}

public class GetUserTaskInstances_GroupsTaskInstanceListResult
{
    public GetUserTaskInstances_GroupsTaskInstanceListResult(string GroupName, GetUserTaskInstances_GroupsTaskInstanceList_TaskInstanceListResult[] TaskInstanceList)
    {
            this.GroupName = GroupName;
            this.TaskInstanceList = TaskInstanceList;
    }

        public string GroupName { get; } 
        public GetUserTaskInstances_GroupsTaskInstanceList_TaskInstanceListResult[] TaskInstanceList { get; } 
}

public class GetUserTaskInstances_GroupsTaskInstanceList_TaskInstanceListResult
{
    public GetUserTaskInstances_GroupsTaskInstanceList_TaskInstanceListResult(string ProcessId, string ProcessInstanceId, string TaskInstanceId, string ProcessName, string TaskName, string TaskState, DateTime? DueDate, bool DuePast, int DaysToDue)
    {
            this.ProcessId = ProcessId;
            this.ProcessInstanceId = ProcessInstanceId;
            this.TaskInstanceId = TaskInstanceId;
            this.ProcessName = ProcessName;
            this.TaskName = TaskName;
            this.TaskState = TaskState;
            this.DueDate = DueDate;
            this.DuePast = DuePast;
            this.DaysToDue = DaysToDue;
    }

        public string ProcessId { get; } 
        public string ProcessInstanceId { get; } 
        public string TaskInstanceId { get; } 
        public string ProcessName { get; } 
        public string TaskName { get; } 
        public string TaskState { get; } 
        public DateTime? DueDate { get; } 
        public bool DuePast { get; } 
        public int DaysToDue { get; } 
}


}
