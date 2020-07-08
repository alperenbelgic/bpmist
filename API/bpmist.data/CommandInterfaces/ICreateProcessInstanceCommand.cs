using System;
using bpmist.common.Commands;

namespace bpmist.data.ICommands
{
    public interface ICreateProcessInstanceCommand : ICommand<CreateProcessInstanceParameter, CreateProcessInstanceResult>
    {
    }

    public class CreateProcessInstanceParameter
    {
        public CreateProcessInstanceParameter(
            string ProcessId, bpmist.common.DataModels.DocumentTypes.ProcessInstance ProcessInstance
            )
        {
            this.ProcessId = ProcessId;
            this.ProcessInstance = ProcessInstance;
        }

        public string ProcessId { get; } 
        public bpmist.common.DataModels.DocumentTypes.ProcessInstance ProcessInstance { get; } 
    }

public class CreateProcessInstanceResult
{
    public CreateProcessInstanceResult (string ProcessInstanceId)
    {
            this.ProcessInstanceId = ProcessInstanceId;
    }

        public string ProcessInstanceId { get; } 
}


}
