using System;
using bpmist.common.Commands;

namespace bpmist.data.ICommands
{
    public interface IGetProcessStartTemplateQuery : ICommand<GetProcessStartTemplateQueryParameter, GetProcessStartTemplateQueryResult>
    {
    }

    public class GetProcessStartTemplateQueryParameter
    {
        public GetProcessStartTemplateQueryParameter(
            string ProcessId
            )
        {
            this.ProcessId = ProcessId;
        }

        public string ProcessId { get; } 
    }

    public class GetProcessStartTemplateQueryResult
    {
        public GetProcessStartTemplateQueryResult(
            string ProcessName, string Task
            )
        {
            this.ProcessName = ProcessName;
            this.Task = Task;
        }

        public string ProcessName { get; } 
        public string Task { get; } 
    } 
}
