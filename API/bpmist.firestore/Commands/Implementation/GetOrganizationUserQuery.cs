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

            var organizationUserSnapshot =
                                    await
                                    FirestoreDb
                                    .Create("bpmistproject")
                                    .Collection("organisations")
                                    .Document(organizationId)
                                    .Collection("users")
                                    .Document(organizationUserId)
                                    .GetSnapshotAsync();

            // TODO: check if doc exists

            var organisationUser = new FirestoreHelper().Get<OrganizationUser>(organizationUserSnapshot);

            return new GetOrganizationUserResult(organisationUser);
        }

        protected override async Task<IEnumerable<OperationErrorInformation>> ValidateAsync(GetOrganizationUserParameter parameter, IContextInformation contextInformation)
        {
            return Enumerable.Empty<OperationErrorInformation>();
        }
    }
}
