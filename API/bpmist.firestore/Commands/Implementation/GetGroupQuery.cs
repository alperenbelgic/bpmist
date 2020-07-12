using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using bpmist.common.Commands;
using bpmist.common.DataModels.DocumentTypes;
using bpmist.data.ICommands;
using bpmist.firestore.DataModels;

namespace bpmist.firestore.Commands
{
    public partial class GetGroupQuery
    {
        protected override async Task<GetGroupResult> ExecuteImplementationAsync(GetGroupParameter parameter, IContextInformation contextInformation)
        {
            string organizationId = contextInformation.User.OrganizationId;
            string groupId = parameter.GroupId;

            var groupDocRef = await Documents.group(organizationId,groupId).GetSnapshotAsync();

            var group = FirestoreHelper.Get<Group>(groupDocRef);

            // TODO: check if not exists

            return new GetGroupResult(group);
        }

        protected override async Task<IEnumerable<OperationErrorInformation>> ValidateAsync(GetGroupParameter parameter, IContextInformation contextInformation)
        {
            return Enumerable.Empty<OperationErrorInformation>();
        }
    }
}
