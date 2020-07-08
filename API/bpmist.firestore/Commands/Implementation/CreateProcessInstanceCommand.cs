using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using bpmist.common.Commands;
using bpmist.data.ICommands;

namespace bpmist.firestore.Commands
{
    public partial class CreateProcessInstanceCommand
    {
        protected override async Task<CreateProcessInstanceResult> ExecuteImplementationAsync(CreateProcessInstanceParameter parameter, IContextInformation contextInformation)
        {
            throw new NotImplementedException();
        }

        protected override async Task<IEnumerable<OperationErrorInformation>> ValidateAsync(CreateProcessInstanceParameter parameter, IContextInformation contextInformation)
        {
            return Enumerable.Empty<OperationErrorInformation>();
        }
    }
}
