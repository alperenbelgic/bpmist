using System;
using System.Collections.Generic;
using bpmist.common.Commands;

namespace bpmist.data.ICommands
{
    public interface IGetOrganizationUserQuery : ICommand<GetOrganizationUserParameter, GetOrganizationUserResult>
    {
    }

    public class GetOrganizationUserParameter
    {
        public GetOrganizationUserParameter(
            string OrganizationUserId
            )
        {
            this.OrganizationUserId = OrganizationUserId;
        }

        public string OrganizationUserId { get; } 
    }

public class GetOrganizationUserResult
{
    public GetOrganizationUserResult(bpmist.common.DataModels.DocumentTypes.OrganizationUser OrganizationUser)
    {
            this.OrganizationUser = OrganizationUser;
    }

        public bpmist.common.DataModels.DocumentTypes.OrganizationUser OrganizationUser { get; } 
}


}
