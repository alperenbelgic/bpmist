using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using bpmist.common.Commands;
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

            // TODO: implement
            return new ValidateFormValuesResult(true, new ValidateFormValues_ValidationErrorsResult[0]);
            throw new NotImplementedException();
        }

        protected override async Task<IEnumerable<OperationErrorInformation>> ValidateAsync(ValidateFormValuesParameter parameter, IContextInformation contextInformation)
        {
            return Enumerable.Empty<OperationErrorInformation>();
        }
    }
}
