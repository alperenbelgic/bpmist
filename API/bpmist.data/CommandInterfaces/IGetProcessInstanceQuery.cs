using System;
using System.Collections.Generic;
using bpmist.common.Commands;

namespace bpmist.data.ICommands
{
    public interface IGetProcessInstanceQuery : ICommand<GetProcessInstanceParameter, GetProcessInstanceResult>
    {
    }

    public class GetProcessInstanceParameter
    {
        public GetProcessInstanceParameter(
            string ProcessId, string ProcessInstanceId
            )
        {
            this.ProcessId = ProcessId;
            this.ProcessInstanceId = ProcessInstanceId;
        }

        public string ProcessId { get; } 
        public string ProcessInstanceId { get; } 
    }

public class GetProcessInstanceResult
{
    public GetProcessInstanceResult(bpmist.common.DataModels.DocumentTypes.ProcessInstance ProcessInstance)
    {
            this.ProcessInstance = ProcessInstance;
    }

        public bpmist.common.DataModels.DocumentTypes.ProcessInstance ProcessInstance { get; } 
}


}
