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
            string organizationId = contextInformation.User.OrganizationId;
            string processId = parameter.ProcessId;
            string processInstanceId = parameter.ProcessInstanceId;

            var processInstanceSnapshot =
                                    await
                                    Documents.processInstance(organizationId, processId, processInstanceId)
                                    .GetSnapshotAsync();

            // TODO: check if doc exists

            var processInstance = FirestoreHelper.Get<ProcessInstance>(processInstanceSnapshot);

            return new GetProcessInstanceResult(processInstance);
        }

        protected override async Task<IEnumerable<OperationErrorInformation>> ValidateAsync(GetProcessInstanceParameter parameter, IContextInformation contextInformation)
        {
            // TODO: check if parameters exists
            return Enumerable.Empty<OperationErrorInformation>();
        }
    }
}
