using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using bpmist.common.Commands;
using bpmist.common.DataModels.SubDocumentTypes;
using bpmist.common.ICommands;
using Jint;

namespace bpmist.javascript.Commands
{
    public partial class ValidateWithCustomCodeCommand
    {
        /*
            Expected parameter.CustomCode content structure:
            Function name: validate
            getValue function requires 2 params
                - param1: this param is actually ignored, only to show a user friendly value to the developer
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
        protected override async Task<ValidateWithCustomCodeResult> ExecuteImplementationAsync(ValidateWithCustomCodeParameter parameter, IContextInformation contextInformation)
        {
            try
            {
                var form = this.PrepareForm(parameter.ProcessData);

                string validateFunction = parameter.CustomCode;

                var engine = new Engine().SetValue("_formValues", form);

                string javascriptToRun = JavascriptTemplates.GetValueTemplate + validateFunction + JavascriptTemplates.CallValidateTemplate;

                var result = engine.Execute(javascriptToRun).GetCompletionValue().ToObject();

                return this.PrepareResult(result);
            }
            catch
            {
                // TODO: Log & notify
                return new ValidateWithCustomCodeResult(false, "Custom validation doesn't run as expected.");
            }
        }

        private ValidateWithCustomCodeResult PrepareResult(object result)
        {
            if (result is bool)
            {
                bool resultInBool = (bool)result;

                return new ValidateWithCustomCodeResult(resultInBool, null);
            }
            else if (result is string)
            {
                string resultInString = (string)result;

                return new ValidateWithCustomCodeResult(false, resultInString);
            }
            else
            {
                return new ValidateWithCustomCodeResult(false, "Custom validation code returned unexpected result. (should be either bool or string");
            }
        }

        private Dictionary<string, object> PrepareForm(ProcessData processData)
        {
            var formValues = new Dictionary<string, object>();

            foreach (var value in processData.DateValues)
            {
                formValues[value.Key] = value.Value;
            }

            foreach (var value in processData.TextValues)
            {
                formValues[value.Key] = value.Value;
            }

            return formValues;
        }

        protected override async Task<IEnumerable<OperationErrorInformation>> ValidateAsync(ValidateWithCustomCodeParameter parameter, IContextInformation contextInformation)
        {
            return Enumerable.Empty<OperationErrorInformation>();
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
}
