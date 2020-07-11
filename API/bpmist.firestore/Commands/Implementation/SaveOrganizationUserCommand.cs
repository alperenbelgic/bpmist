using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using bpmist.common.Commands;
using bpmist.data.ICommands;
using bpmist.firestore.DataModels;
using Google.Cloud.Firestore;

namespace bpmist.firestore.Commands
{
    public partial class SaveOrganizationUserCommand
    {
        protected override async Task<SaveOrganizationUserResult> ExecuteImplementationAsync(SaveOrganizationUserParameter parameter, IContextInformation contextInformation)
        {
            string organizationId = contextInformation.User.OrganizationId;

            var organizationUser = parameter.OrganizationUser;

            if (string.IsNullOrEmpty(organizationUser.Id))
            {
                
                var documentRef =
                                await
                                    Collections.organizationUsers(organizationId)
                                    .AddAsync(organizationUser);

                organizationUser.Id = documentRef.Id;
            }
            else
            {
                await
                    Documents.organizationUser(organizationId, organizationUser.Id)
                    .SetAsync(organizationUser);
            }

            return new SaveOrganizationUserResult();
        }

        protected override async Task<IEnumerable<OperationErrorInformation>> ValidateAsync(SaveOrganizationUserParameter parameter, IContextInformation contextInformation)
        {
            return Enumerable.Empty<OperationErrorInformation>();
        }
    }
}
