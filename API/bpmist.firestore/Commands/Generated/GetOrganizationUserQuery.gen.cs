using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using bpmist.common.Commands;
using bpmist.data.ICommands;

namespace bpmist.firestore.Commands
{
    public partial class GetOrganizationUserQuery :
    Command<GetOrganizationUserParameter, GetOrganizationUserResult>, IGetOrganizationUserQuery
    {
        public GetOrganizationUserQuery(
            
        )
        {


            this.InitializeAfterConstruction();
        }


    }
}
