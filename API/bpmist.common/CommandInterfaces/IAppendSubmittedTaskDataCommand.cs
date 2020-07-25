using System;
using System.Collections.Generic;
using bpmist.common.Commands;

namespace bpmist.common.ICommands
{
    public interface IAppendSubmittedTaskDataCommand : ICommand<AppendSubmittedTaskDataParameter, AppendSubmittedTaskDataResult>
    {
    }

    public class AppendSubmittedTaskDataParameter
    {
        public AppendSubmittedTaskDataParameter(
            bpmist.common.DataModels.DocumentTypes.ProcessInstance ProcessInstance, bpmist.common.DataModels.SubDocumentTypes.TaskInstance TaskInstance, Dictionary<string, int[]> DateFormValues, Dictionary<string, string> TextFormValues
            )
        {
            this.ProcessInstance = ProcessInstance;
            this.TaskInstance = TaskInstance;
            this.DateFormValues = DateFormValues;
            this.TextFormValues = TextFormValues;
        }

        public bpmist.common.DataModels.DocumentTypes.ProcessInstance ProcessInstance { get; } 
        public bpmist.common.DataModels.SubDocumentTypes.TaskInstance TaskInstance { get; } 
        public Dictionary<string, int[]> DateFormValues { get; } 
        public Dictionary<string, string> TextFormValues { get; } 
    }

public class AppendSubmittedTaskDataResult
{
    public AppendSubmittedTaskDataResult()
    {

    }


}


}
