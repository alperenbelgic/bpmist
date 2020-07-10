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
    public partial class GetProcessInstanceQuery
    {
        protected override async Task<GetProcessInstanceResult> ExecuteImplementationAsync(GetProcessInstanceParameter parameter, IContextInformation contextInformation)
        {
            string organisationId = contextInformation.User.OrganizationId;
            string processId = parameter.ProcessId;
            string processInstanceId = parameter.ProcessInstanceId;

            var processInstanceSnapshot =
                                    await
                                    FirestoreDb
                                    .Create("bpmistproject")
                                    .Collection("organisations")
                                    .Document(organisationId)
                                    .Collection("processes")
                                    .Document(processId)
                                    .Collection("processInstances")
                                    .Document(processInstanceId)
                                    .GetSnapshotAsync();

            // TODO: check if doc exists

            var processInstance = new FirestoreHelper().Get<ProcessInstance>(processInstanceSnapshot);

            return new GetProcessInstanceResult(processInstance);
        }

        protected override async Task<IEnumerable<OperationErrorInformation>> ValidateAsync(GetProcessInstanceParameter parameter, IContextInformation contextInformation)
        {
            // TODO: check if parameters exists
            return Enumerable.Empty<OperationErrorInformation>();
        }
    }
}
