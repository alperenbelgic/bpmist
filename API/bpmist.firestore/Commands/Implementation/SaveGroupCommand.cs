using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using bpmist.common.Commands;
using bpmist.data.ICommands;
using bpmist.firestore.DataModels;

namespace bpmist.firestore.Commands
{
    public partial class SaveGroupCommand
    {
        protected override async Task<SaveGroupResult> ExecuteImplementationAsync(SaveGroupParameter parameter, IContextInformation contextInformation)
        {
            string organizationId = contextInformation.User.OrganizationId;

            var group = parameter.Group;

            if (string.IsNullOrEmpty(group.Id))
            {

                var documentRef =
                                await
                                    Collections.groups(organizationId)
                                    .AddAsync(group);

                group.Id = documentRef.Id;
            }
            else
            {
                await
                    Documents.group(organizationId, group.Id)
                    .SetAsync(group);
            }

            return new SaveGroupResult();
        }

        protected override async Task<IEnumerable<OperationErrorInformation>> ValidateAsync(SaveGroupParameter parameter, IContextInformation contextInformation)
        {
            return Enumerable.Empty<OperationErrorInformation>();
        }
    }
}
