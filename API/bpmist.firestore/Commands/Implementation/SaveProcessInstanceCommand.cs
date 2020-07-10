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
    public partial class SaveProcessInstanceCommand
    {
        protected override async Task<SaveProcessInstanceResult> ExecuteImplementationAsync(SaveProcessInstanceParameter parameter, IContextInformation contextInformation)
        {
            string organizationId = contextInformation.User.OrganizationId;
            string processId = parameter.ProcessId;
            var processInstance = parameter.ProcessInstance;

            if (string.IsNullOrEmpty(processInstance.Id))
            {

                var documentReference =
                 await
                 FirestoreDb
                 .Create("bpmistproject")
                 .Collection("organisations")
                 .Document(organizationId)
                 .Collection("processes")
                 .Document(processId)
                 .Collection("processInstances")
                 .AddAsync(processInstance);

                processInstance.Id = documentReference.Id;
            }
            else
            {
                await
                    FirestoreDb
                 .Create("bpmistproject")
                 .Collection("organisations")
                 .Document(organizationId)
                 .Collection("processes")
                 .Document(processId)
                 .Collection("processInstances")
                 .Document(processInstance.Id)
                 .SetAsync(processInstance);

            }

            return new SaveProcessInstanceResult(processInstance.Id);
        }

        protected override async Task<IEnumerable<OperationErrorInformation>> ValidateAsync(SaveProcessInstanceParameter parameter, IContextInformation contextInformation)
        {
            return Enumerable.Empty<OperationErrorInformation>();
        }
    }
}
