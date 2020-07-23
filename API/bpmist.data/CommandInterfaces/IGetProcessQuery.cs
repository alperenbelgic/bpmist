using System;
using System.Collections.Generic;
using bpmist.common.Commands;

namespace bpmist.data.ICommands
{
    public interface IGetProcessQuery : ICommand<GetProcessParameter, GetProcessResult>
    {
    }

    public class GetProcessParameter
    {
        public GetProcessParameter(
            string ProcessId
            )
        {
            this.ProcessId = ProcessId;
        }

        public string ProcessId { get; } 
    }

public class GetProcessResult
{
    public GetProcessResult(bpmist.common.DataModels.DocumentTypes.Process Process)
    {
            this.Process = Process;
    }

        public bpmist.common.DataModels.DocumentTypes.Process Process { get; } 
}


}
