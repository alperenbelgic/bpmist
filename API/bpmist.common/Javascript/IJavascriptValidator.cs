using System;
using System.Collections.Generic;
using System.Text;

namespace bpmist.common.Javascript
{
    public interface IJavascriptValidator
    {
        ValidationResult Validate(Dictionary<string, object> form, string validateFunction);
    }

    public class ValidationResult
    {
        public ValidationResult(bool valid, string customErrorMessage, bool validationRunSuccessfully)
        {
            this.Valid = valid;
            this.CustomErrorMessage = customErrorMessage;
            this.ValidatationRunSuccessfully = validationRunSuccessfully;
        }

        public bool Valid { get; }
        public string CustomErrorMessage { get; }
        public bool ValidatationRunSuccessfully { get; }
    }
}
