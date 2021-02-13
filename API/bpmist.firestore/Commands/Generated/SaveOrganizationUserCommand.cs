using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using bpmist.common.Commands;
using bpmist.data.ICommands;

namespace bpmist.firestore.Commands
{
    public partial class SaveOrganizationUserCommand :
    Command<SaveOrganizationUserParameter, SaveOrganizationUserResult>, ISaveOrganizationUserCommand
    {
        public SaveOrganizationUserCommand(
            
        )
        {


            this.InitializeAfterConstruction();
        }


    }
}
