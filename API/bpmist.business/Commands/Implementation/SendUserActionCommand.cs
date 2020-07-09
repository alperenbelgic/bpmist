using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using bpmist.common.Commands;
using bpmist.common.ICommands;

namespace bpmist.business.Commands
{
    public partial class SendUserActionCommand
    {
        protected override async Task<SendUserActionResult> ExecuteImplementationAsync(SendUserActionParameter parameter, IContextInformation contextInformation)
        {
            throw new NotImplementedException();
        }

        protected override async Task<IEnumerable<OperationErrorInformation>> ValidateAsync(SendUserActionParameter parameter, IContextInformation contextInformation)
        {
            return Enumerable.Empty<OperationErrorInformation>();
        }
    }
}
