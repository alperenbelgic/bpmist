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

            string processId = parameter.ProcessId;

            // TODO: handle if doc doesn't exist

            var processSnapshot =
                await
                FirestoreDb
                .Create("bpmistproject")
                .Collection("organisations")
                .Document("I8b23jRR3LVAa6ROcqS8")
                .Collection("processes")
                .Document(processId)
                .GetSnapshotAsync();

            var process = new FirestoreHelper().Get<Process>(processSnapshot);

            return new GetProcessResult(process);
        }

        protected override async Task<IEnumerable<OperationErrorInformation>> ValidateAsync(GetProcessParameter parameter, IContextInformation contextInformation)
        {
            return Enumerable.Empty<OperationErrorInformation>();
        }
    }
}
