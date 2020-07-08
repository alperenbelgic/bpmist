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
            bpmist.common.DataModels.DocumentTypes.ProcessInstance ProcessInstance
            )
        {
            this.ProcessInstance = ProcessInstance;
        }

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
