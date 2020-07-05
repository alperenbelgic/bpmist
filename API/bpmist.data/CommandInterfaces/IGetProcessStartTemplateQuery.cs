using System;
using bpmist.common.Commands;

namespace bpmist.data.ICommands
{
    public interface IGetProcessStartTemplateQuery : ICommand<GetProcessStartTemplateParameter, GetProcessStartTemplateResult>
    {
    }

    public class GetProcessStartTemplateParameter
    {
        public GetProcessStartTemplateParameter(
            string ProcessId
            )
        {
            this.ProcessId = ProcessId;
        }

        public string ProcessId { get; } 
    }

public class GetProcessStartTemplateResult
{
    public GetProcessStartTemplateResult (string ProcessName, string Task)
    {
            this.ProcessName = ProcessName;
            this.Task = Task;
    }

        public string ProcessName { get; } 
        public string Task { get; } 
}


}
