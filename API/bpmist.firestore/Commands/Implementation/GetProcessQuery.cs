using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using bpmist.common.Commands;
using bpmist.common.DataModels.DocumentTypes;
using bpmist.data.ICommands;
using bpmist.firestore.DataModels;
using Google.Cloud.Firestore;

namespace bpmist.firestore.Commands
{
    public partial class GetProcessQuery
    {
        protected override async Task<GetProcessResult> ExecuteImplementationAsync(GetProcessParameter parameter, IContextInformation contextInformation)
        {
            string organizationId = contextInformation.User.OrganizationId;
            string processId = parameter.ProcessId;

            var processSnapshot =
                await
                 Documents.process(organizationId, processId)
                .GetSnapshotAsync();           

            // TODO: handle if doc doesn't exist

            var process = FirestoreHelper.Get<Process>(processSnapshot);

            return new GetProcessResult(process);
        }

        protected override async Task<IEnumerable<OperationErrorInformation>> ValidateAsync(GetProcessParameter parameter, IContextInformation contextInformation)
        {
            return Enumerable.Empty<OperationErrorInformation>();
        }
    }
}
