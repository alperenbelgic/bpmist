using System;
using bpmist.common.Commands;

namespace bpmist.data.ICommands
{
    public interface IGetProcessesQuery : ICommand<GetProcessesParameter, GetProcessesResult>
    {
    }

    public class GetProcessesParameter
    {
        public GetProcessesParameter(
            
            )
        {

        }


    }

public class GetProcessesResult
{
    public GetProcessesResult (GetProcesses_ProcessesResult[] Processes)
    {
            this.Processes = Processes;
    }

        public GetProcesses_ProcessesResult[] Processes { get; } 
}

public class GetProcesses_ProcessesResult
{
    public GetProcesses_ProcessesResult (string ProcessName, GetProcesses_Processes_TasksResult[] Tasks)
    {
            this.ProcessName = ProcessName;
            this.Tasks = Tasks;
    }

        public string ProcessName { get; } 
        public GetProcesses_Processes_TasksResult[] Tasks { get; } 
}

public class GetProcesses_Processes_TasksResult
{
    public GetProcesses_Processes_TasksResult (string TaskId, string TaskName)
    {
            this.TaskId = TaskId;
            this.TaskName = TaskName;
    }

        public string TaskId { get; } 
        public string TaskName { get; } 
}


}
