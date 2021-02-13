using System;
using System.Collections.Generic;
using bpmist.common.Commands;

namespace bpmist.common.ICommands
{
    public interface IValidateFormValuesCommand : ICommand<ValidateFormValuesParameter, ValidateFormValuesResult>
    {
    }

    public class ValidateFormValuesParameter
    {
        public ValidateFormValuesParameter(
            bpmist.common.DataModels.SubDocumentTypes.FieldInTask[] FieldsInTask, bpmist.common.DataModels.SubDocumentTypes.ProcessData ProcessData, bpmist.common.DataModels.SubDocumentTypes.ProcessField[] ProcessFields
            )
        {
            this.FieldsInTask = FieldsInTask;
            this.ProcessData = ProcessData;
            this.ProcessFields = ProcessFields;
        }

        public bpmist.common.DataModels.SubDocumentTypes.FieldInTask[] FieldsInTask { get; } 
        public bpmist.common.DataModels.SubDocumentTypes.ProcessData ProcessData { get; } 
        public bpmist.common.DataModels.SubDocumentTypes.ProcessField[] ProcessFields { get; } 
    }

public class ValidateFormValuesResult
{
    public ValidateFormValuesResult(bool IsFormValid, ValidateFormValues_ValidationErrorsResult[] ValidationErrors)
    {
            this.IsFormValid = IsFormValid;
            this.ValidationErrors = ValidationErrors;
    }

        public bool IsFormValid { get; } 
        public ValidateFormValues_ValidationErrorsResult[] ValidationErrors { get; } 
}

public class ValidateFormValues_ValidationErrorsResult
{
    public ValidateFormValues_ValidationErrorsResult(string FieldName, string ErrorMessage)
    {
            this.FieldName = FieldName;
            this.ErrorMessage = ErrorMessage;
    }

        public string FieldName { get; } 
        public string ErrorMessage { get; } 
}


}
