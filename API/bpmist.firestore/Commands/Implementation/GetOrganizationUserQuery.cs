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
    public partial class GetOrganizationUserQuery
    {
        protected override async Task<GetOrganizationUserResult> ExecuteImplementationAsync(GetOrganizationUserParameter parameter, IContextInformation contextInformation)
        {
            string organizationId = contextInformation.User.OrganizationId;
            string organizationUserId = parameter.OrganizationUserId;

            var organizationUserDocumentReference = await Documents.organizationUser(organizationId, organizationUserId).GetSnapshotAsync();

            var organizationUser = FirestoreHelper.Get<OrganizationUser>(organizationUserDocumentReference);

            // TODO: check if not exists

            return new GetOrganizationUserResult(organizationUser);
        }

        protected override async Task<IEnumerable<OperationErrorInformation>> ValidateAsync(GetOrganizationUserParameter parameter, IContextInformation contextInformation)
        {
            return Enumerable.Empty<OperationErrorInformation>();
        }
    }
}
