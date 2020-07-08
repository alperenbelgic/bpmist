using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using bpmist.common.Commands;
using bpmist.common.DataModels.DocumentTypes;
using bpmist.data.ICommands;
using Google.Cloud.Firestore;

namespace bpmist.firestore.Commands
{
    public partial class CreateProcessInstanceCommand
    {
        protected override async Task<CreateProcessInstanceResult> ExecuteImplementationAsync(CreateProcessInstanceParameter parameter, IContextInformation contextInformation)
        {
            string processId = parameter.ProcessId;
            var processInstance = parameter.ProcessInstance;

            var documentReference =
             await
             FirestoreDb
             .Create("bpmistproject")
             .Collection("organisations")
             .Document("I8b23jRR3LVAa6ROcqS8")
             .Collection("processes")
             .Document(processId)
             .Collection("processInstances")
             .AddAsync(processInstance);

            string processInstanceId = documentReference.Id;

            return new CreateProcessInstanceResult(processInstanceId);
        }

        protected override async Task<IEnumerable<OperationErrorInformation>> ValidateAsync(CreateProcessInstanceParameter parameter, IContextInformation contextInformation)
        {
            return Enumerable.Empty<OperationErrorInformation>();
        }
    }
}
