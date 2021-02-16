using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using bpmist.common.Commands;
using bpmist.common.DataModels.DocumentTypes;
using bpmist.common.DataModels.SubDocumentTypes;
using bpmist.common.ICommands;

namespace bpmist.business.Commands
{
    public partial class ValidateFormValuesCommand
    {
        protected override async Task<ValidateFormValuesResult> ExecuteImplementationAsync(ValidateFormValuesParameter parameter, IContextInformation contextInformation)
        {
            var fieldsInTask = parameter.FieldsInTask;
            var processData = parameter.ProcessData;
            var processFields = parameter.ProcessFields;

            var editableFieldsInTask = fieldsInTask.Where(f => f.Editable);

            var validationErrors = new List<ValidateFormValues_ValidationErrorsResult>();

            foreach (var fieldInTask in editableFieldsInTask)
            {
                string fieldId = fieldInTask.Id;

                var processField = processFields.FirstOrDefault(pf => pf.Id == fieldId);
                var validationDefinition = fieldInTask.Validation;

                if (processField.FieldType == FieldTypes.Date)
                {
                    processData.DateValues.TryGetValue(fieldId, out DateTime? value);

                    bool isValidForRequired = this.IsDateValueValidForRequired(validationDefinition, value);

                    if (false == isValidForRequired)
                    {
                        validationErrors.Add(
                            new ValidateFormValues_ValidationErrorsResult(
                                processField.FieldName,
                                this.GetRequiredFieldValidationMessage(processField.FieldName)));

                        continue; // if it is required and non-existing, no need to check for other validations.
                    }
                }
                else if (processField.FieldType == FieldTypes.Text)
                {
                    processData.TextValues.TryGetValue(fieldId, out string value);

                    bool isValidForRequired = this.IsTextValueValidForRequired(validationDefinition, value);

                    if (false == isValidForRequired)
                    {
                        validationErrors.Add(
                            new ValidateFormValues_ValidationErrorsResult(
                                processField.FieldName,
                                this.GetRequiredFieldValidationMessage(processField.FieldName)));

                        continue; // if it is required and non-existing, no need to check for other validations.
                    }
                }

                if (validationDefinition.CustomValidationDefinition.HasCustomValidation)
                {
                    var result = await this.ValidateWithCustomCodeCommand.ExecuteAsync(
                                            new ValidateWithCustomCodeParameter(
                                                processData,
                                                validationDefinition.CustomValidationDefinition.CustomCodeContent),
                                            contextInformation);

                    if (false == result.Value.IsFormValid)
                    {
                        string validationMessage = result.Value.ValidationErrorMessage ?? validationDefinition.CustomValidationDefinition.ValidationErrorMessage;

                        validationErrors.Add(new ValidateFormValues_ValidationErrorsResult(processField.FieldName, validationMessage));
                    }

                }
            }

            if (validationErrors.Any())
            {
                return new ValidateFormValuesResult(false, validationErrors.ToArray());
            }
            else
            {
                return new ValidateFormValuesResult(true, new ValidateFormValues_ValidationErrorsResult[0]);
            }
        }

        private string GetRequiredFieldValidationMessage(string fieldName)
        {
            return $"{fieldName} is required.";
        }

        private bool IsDateValueValidForRequired(FieldInTaskValidation validation, DateTime? value)
        {
            if (validation.IsRequired && value == null)
            {
                return false;
            }
            else
            {
                return true;
            }
        }
        private bool IsTextValueValidForRequired(FieldInTaskValidation validation, string value)
        {
            if (validation.IsRequired && string.IsNullOrWhiteSpace(value))
            {
                return false;
            }
            else
            {
                return true;
            }
        }

        protected override async Task<IEnumerable<OperationErrorInformation>> ValidateAsync(ValidateFormValuesParameter parameter, IContextInformation contextInformation)
        {
            return Enumerable.Empty<OperationErrorInformation>();
        }
    }
}
