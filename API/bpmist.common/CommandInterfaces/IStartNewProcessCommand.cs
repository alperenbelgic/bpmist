using System;
using System.Collections.Generic;
using bpmist.common.Commands;

namespace bpmist.common.ICommands
{
    public interface IStartNewProcessCommand : ICommand<StartNewProcessParameter, StartNewProcessResult>
    {
    }

    public class StartNewProcessParameter
    {
        public StartNewProcessParameter(
            string ProcessId
            )
        {
            this.ProcessId = ProcessId;
        }

        public string ProcessId { get; } 
    }

public class StartNewProcessResult
{
    public StartNewProcessResult(string ProcessName, string ProcessInstanceId, string TaskName, string TaskInstanceId, StartNewProcess_ActionsResult[] Actions, StartNewProcess_FormResult Form)
    {
            this.ProcessName = ProcessName;
            this.ProcessInstanceId = ProcessInstanceId;
            this.TaskName = TaskName;
            this.TaskInstanceId = TaskInstanceId;
            this.Actions = Actions;
            this.Form = Form;
    }

        public string ProcessName { get; } 
        public string ProcessInstanceId { get; } 
        public string TaskName { get; } 
        public string TaskInstanceId { get; } 
        public StartNewProcess_ActionsResult[] Actions { get; } 
        public StartNewProcess_FormResult Form { get; } 
}

public class StartNewProcess_ActionsResult
{
    public StartNewProcess_ActionsResult(string ActionText, string ActionType, string ActionId)
    {
            this.ActionText = ActionText;
            this.ActionType = ActionType;
            this.ActionId = ActionId;
    }

        public string ActionText { get; } 
        public string ActionType { get; } 
        public string ActionId { get; } 
}

public class StartNewProcess_FormResult
{
    public StartNewProcess_FormResult(StartNewProcess_Form_FieldsResult[] Fields)
    {
            this.Fields = Fields;
    }

        public StartNewProcess_Form_FieldsResult[] Fields { get; } 
}

public class StartNewProcess_Form_FieldsResult
{
    public StartNewProcess_Form_FieldsResult(string FieldId, string FieldName, string ValueType)
    {
            this.FieldId = FieldId;
            this.FieldName = FieldName;
            this.ValueType = ValueType;
    }

        public string FieldId { get; } 
        public string FieldName { get; } 
        public string ValueType { get; } 
}


}
