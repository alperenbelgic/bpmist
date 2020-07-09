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
    public GetProcessesResult(GetProcesses_ProcessesResult[] Processes)
    {
            this.Processes = Processes;
    }

        public GetProcesses_ProcessesResult[] Processes { get; } 
}

public class GetProcesses_ProcessesResult
{
    public GetProcesses_ProcessesResult(string ProcessId, string ProcessName)
    {
            this.ProcessId = ProcessId;
            this.ProcessName = ProcessName;
    }

        public string ProcessId { get; } 
        public string ProcessName { get; } 
}


}
