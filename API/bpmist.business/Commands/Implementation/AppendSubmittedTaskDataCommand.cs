using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using bpmist.common.Commands;
using bpmist.common.DataModels.DocumentTypes;
using bpmist.common.DataModels.SubDocumentTypes;
using bpmist.common.ICommands;
using Google.Protobuf.WellKnownTypes;

namespace bpmist.business.Commands
{
    public partial class AppendSubmittedTaskDataCommand
    {
        protected override async Task<AppendSubmittedTaskDataResult> ExecuteImplementationAsync(AppendSubmittedTaskDataParameter parameter, IContextInformation contextInformation)
        {
            // all data are in valid format
            // all required data provided

            PrepareDateValues(parameter);

            // validate

            // save snapshot content

            foreach (var fieldInTask in parameter.TaskInstance.TaskModel.TaskFormModel.Fields)
            {
                var processField =
                    parameter.ProcessInstance.ProcessModel.ProcessFields.FirstOrDefault(pf => pf.Id == fieldInTask.Id);

                if (processField.FieldType == FieldTypes.Date)
                {
                    this.AssignDateValue(parameter.ProcessInstance.ProcessData.DateValues, fieldInTask);
                }
                else if (processField.FieldType == FieldTypes.Text)
                {
                    this.AssignTextValue(parameter.TextFormValues, parameter.ProcessInstance.ProcessData.TextValues, fieldInTask);
                }
            }

            return new AppendSubmittedTaskDataResult();
        }

        protected override async Task<IEnumerable<OperationErrorInformation>> ValidateAsync(AppendSubmittedTaskDataParameter parameter, IContextInformation contextInformation)
        {


            return Enumerable.Empty<OperationErrorInformation>();
        }

        private void AssignDateValue(Dictionary<string, DateTime?> savingDateValues, FieldInTask field)
        {
            foreach (var value in this.submittedDateValues)
            {
                if (field.Id == value.Key)
                {
                    savingDateValues[field.Id] = value.Value;
                    break;
                }
            }
        }

        private void AssignTextValue(Dictionary<string, string> submittedTextValues, Dictionary<string, string> savingTextValues, FieldInTask field)
        {
            foreach (var submittedTextValue in submittedTextValues)
            {
                if (field.Id == submittedTextValue.Key)
                {
                    savingTextValues[field.Id] = submittedTextValue.Value;
                }
            }
        }

        private void PrepareDateValues(AppendSubmittedTaskDataParameter parameter)
        {
            foreach (var dateFormValue in parameter.DateFormValues)
            {
                int[] inputValue = dateFormValue.Value;

                DateTime? value = null;

                if (inputValue != null && inputValue.Length == 3)
                {
                    // try catch is for to validate numbers correspond to a date
                    try
                    {
                        value = new DateTime(inputValue[0], inputValue[1], inputValue[2], 0, 0, 0, DateTimeKind.Utc);
                    }
                    catch (Exception ex)
                    {
                        // TODO: inform bpm.ist admins. should be found  out: is it a bug? is it an attack?
                    }
                }
                else
                {
                    // TODO: inform bpm.ist admins. should be found  out: is it a bug? is it an attack?
                    // null or empty array might be expected "blank" inputs?
                }

                this.submittedDateValues.Add(new KeyValuePair<string, DateTime?>(dateFormValue.Key, value));
            }
        }

        List<KeyValuePair<string, DateTime?>> submittedDateValues = new List<KeyValuePair<string, DateTime?>>();
    }
}
