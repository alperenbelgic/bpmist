using System;
using System.Collections.Generic;
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
    public GetProcesses_ProcessesResult(string ProcessId, string ProcessName, GetProcesses_Processes_VisualsResult Visuals)
    {
            this.ProcessId = ProcessId;
            this.ProcessName = ProcessName;
            this.Visuals = Visuals;
    }

        public string ProcessId { get; } 
        public string ProcessName { get; } 
        public GetProcesses_Processes_VisualsResult Visuals { get; } 
}

public class GetProcesses_Processes_VisualsResult
{
    public GetProcesses_Processes_VisualsResult(string IconColor, string Initials)
    {
            this.IconColor = IconColor;
            this.Initials = Initials;
    }

        public string IconColor { get; } 
        public string Initials { get; } 
}


}
