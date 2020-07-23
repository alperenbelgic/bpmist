using System;
using System.Collections.Generic;
using bpmist.common.Commands;

namespace bpmist.data.ICommands
{
    public interface ISaveOrganizationUserCommand : ICommand<SaveOrganizationUserParameter, SaveOrganizationUserResult>
    {
    }

    public class SaveOrganizationUserParameter
    {
        public SaveOrganizationUserParameter(
            bpmist.common.DataModels.DocumentTypes.OrganizationUser OrganizationUser
            )
        {
            this.OrganizationUser = OrganizationUser;
        }

        public bpmist.common.DataModels.DocumentTypes.OrganizationUser OrganizationUser { get; } 
    }

public class SaveOrganizationUserResult
{
    public SaveOrganizationUserResult()
    {

    }


}


}
