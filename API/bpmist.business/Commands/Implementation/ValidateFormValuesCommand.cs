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
            throw new NotImplementedException();
        }

        protected override async Task<IEnumerable<OperationErrorInformation>> ValidateAsync(ValidateFormValuesParameter parameter, IContextInformation contextInformation)
        {
            return Enumerable.Empty<OperationErrorInformation>();
        }
    }
}
