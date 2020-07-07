using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using bpmist.business.common;
using bpmist.common.Commands;
using bpmist.data.ICommands;
using bpmist.firestore.DataModels;
using Google.Cloud.Firestore;

namespace bpmist.firestore.Commands
{
    public partial class GetProcessStartTemplateQuery
    {
        protected override async Task<GetProcessStartTemplateResult> ExecuteImplementationAsync(GetProcessStartTemplateParameter parameter, IContextInformation contextInformation)
        {
            string processId = parameter.ProcessId;

            var processSnapshot =
                 await
                 FirestoreDb
                 .Create("bpmistproject")
                 .Collection("organisations")
                 .Document("I8b23jRR3LVAa6ROcqS8")
                 .Collection("processes")
                 .Document(processId)
                 .GetSnapshotAsync();

            // TODO: validate if process snapshot have a value

            var process = new FirestoreHelper().Get<Process>(processSnapshot);

            // TODO: validate if any task exists

            //throw new NotImplementedException();
            return new GetProcessStartTemplateResult(process.ProcessName, process.Tasks[0].TaskName);

        }

        protected override async Task<IEnumerable<OperationErrorInformation>> ValidateAsync(GetProcessStartTemplateParameter parameter, IContextInformation contextInformation)
        {
            return Enumerable.Empty<OperationErrorInformation>();
        }
    }
}
