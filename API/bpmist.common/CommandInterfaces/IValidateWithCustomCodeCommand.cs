using System;
using System.Collections.Generic;
using bpmist.common.Commands;

namespace bpmist.common.ICommands
{
    public interface IValidateWithCustomCodeCommand : ICommand<ValidateWithCustomCodeParameter, ValidateWithCustomCodeResult>
    {
    }

    public class ValidateWithCustomCodeParameter
    {
        public ValidateWithCustomCodeParameter(
            bpmist.common.DataModels.SubDocumentTypes.ProcessData ProcessData, string CustomCode
            )
        {
            this.ProcessData = ProcessData;
            this.CustomCode = CustomCode;
        }

        public bpmist.common.DataModels.SubDocumentTypes.ProcessData ProcessData { get; } 
        public string CustomCode { get; } 
    }

public class ValidateWithCustomCodeResult
{
    public ValidateWithCustomCodeResult(bool IsFormValid, string ValidationErrorMessage)
    {
            this.IsFormValid = IsFormValid;
            this.ValidationErrorMessage = ValidationErrorMessage;
    }

        public bool IsFormValid { get; } 
        public string ValidationErrorMessage { get; } 
}


}
