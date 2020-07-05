using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using bpmist.common.Commands;
using bpmist.data.ICommands;

namespace bpmist.firestore.Commands
{
    public partial class GetProcessesQuery
    {
        protected override async Task<GetProcessesResult> ExecuteImplementationAsync(GetProcessesParameter parameter, IContextInformation contextInformation)
        {
            throw new NotImplementedException();
        }

        protected override async Task<IEnumerable<OperationErrorInformation>> ValidateAsync(GetProcessesParameter parameter, IContextInformation contextInformation)
        {
            return Enumerable.Empty<OperationErrorInformation>();
        }
    }
}
