using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using bpmist.common.Commands;
using bpmist.data.ICommands;

namespace bpmist.firestore.Commands
{
    public partial class GetProcessQuery
    {
        protected override async Task<GetProcessResult> ExecuteImplementationAsync(GetProcessParameter parameter, IContextInformation contextInformation)
        {
            throw new NotImplementedException();
        }

        protected override async Task<IEnumerable<OperationErrorInformation>> ValidateAsync(GetProcessParameter parameter, IContextInformation contextInformation)
        {
            return Enumerable.Empty<OperationErrorInformation>();
        }
    }
}
