using Jint;
using System;
using System.Collections.Generic;
using System.Text;

namespace bpmist.javascript
{
    /// <summary>
    /// Runs validate functions written in Javascript to validate form values or forms.
    /// </summary>
    public class JavascriptValidator
    {
        /*
        Expected validateFunction structure:
        Function name: validate
        getValue function requires 2 params
            - param1: this param is ignored, only to show a user friendly value to the developer
            - param2: fields unique identifier in string
        returns boolean (indicating valid (true) or invalid
        or 
        returns string (indicating it is invalid and returned value is the validation error message, empty string is also invalid)
        you can't return null
        
        function validate(getValue) { 	
	        var startDate = getValue('Start Date', 'Guid Value 1');	
	        var endDate = getValue('Start Date', 'Guid Value 2');		

		    return endDate > startDate;
            // or return 'Start Date must be before End Date' 
	    }
        */

        public ValidationResult Validate(Dictionary<string, object> form, string validateFunction)
        {
            try
            {
                var engine = new Engine().SetValue("_formValues", form);

                string javascriptToRun = JavascriptTemplates.GetValueTemplate + validateFunction + JavascriptTemplates.CallValidateTemplate;

                var result = engine.Execute(javascriptToRun).GetCompletionValue().ToObject();

                return this.PrepareResult(result);
            }
            catch
            {
                return new ValidationResult(false, null, false);
            }
        }

        private ValidationResult PrepareResult(object result)
        {
            if (result is bool)
            {
                bool resultInBool = (bool)result;

                return new ValidationResult(resultInBool, null, true);
            }
            else if (result is string)
            {
                string resultInString = (string)result;

                return new ValidationResult(false, resultInString, true);
            }
            else
            {
                return new ValidationResult(false, null, false);
            }
        }
    }

    public static class JavascriptTemplates
    {
        public const string GetValueTemplate =
@"
	function getValue(fieldText, field){
		return _formValues[field];
	}
";

        public const string CallValidateTemplate = @"validate(getValue);";


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
