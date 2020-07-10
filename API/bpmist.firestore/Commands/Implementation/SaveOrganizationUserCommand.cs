using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using bpmist.common.Commands;
using bpmist.data.ICommands;
using Google.Cloud.Firestore;

namespace bpmist.firestore.Commands
{
    public partial class SaveOrganizationUserCommand
    {
        protected override async Task<SaveOrganizationUserResult> ExecuteImplementationAsync(SaveOrganizationUserParameter parameter, IContextInformation contextInformation)
        {
            string organizationId = contextInformation.User.OrganizationId;
            //string organizationUserId = parameter.OrganizationUserId;

            var organizationUser = parameter.OrganizationUser;

            if (string.IsNullOrEmpty(organizationUser.Id))
            {
                var documentRef =
                                await
                                    FirestoreDb
                                    .Create("bpmistproject")
                                    .Collection("organisations")
                                    .Document(organizationId)
                                    .Collection("users")
                                    .AddAsync(organizationUser);

                organizationUser.Id = documentRef.Id;
            }
            else
            {
                await
                    FirestoreDb
                    .Create("bpmistproject")
                    .Collection("organisations")
                    .Document(organizationId)
                    .Collection("users")
                    .Document(organizationUser.Id)
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
