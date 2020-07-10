using System;
using bpmist.common.Commands;

namespace bpmist.data.ICommands
{
    public interface ISaveProcessInstanceCommand : ICommand<SaveProcessInstanceParameter, SaveProcessInstanceResult>
    {
    }

    public class SaveProcessInstanceParameter
    {
        public SaveProcessInstanceParameter(
            string ProcessId, bpmist.common.DataModels.DocumentTypes.ProcessInstance ProcessInstance
            )
        {
            this.ProcessId = ProcessId;
            this.ProcessInstance = ProcessInstance;
        }

        public string ProcessId { get; } 
        public bpmist.common.DataModels.DocumentTypes.ProcessInstance ProcessInstance { get; } 
    }

public class SaveProcessInstanceResult
{
    public SaveProcessInstanceResult(string ProcessInstanceId)
    {
            this.ProcessInstanceId = ProcessInstanceId;
    }

        public string ProcessInstanceId { get; } 
}


}
