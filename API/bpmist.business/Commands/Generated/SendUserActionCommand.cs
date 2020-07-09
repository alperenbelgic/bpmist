using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using bpmist.common.Commands;
using bpmist.common.ICommands;

namespace bpmist.business.Commands
{
    public partial class SendUserActionCommand :
    Command<SendUserActionParameter, SendUserActionResult>, ISendUserActionCommand
    {
        public SendUserActionCommand(
            
        )
        {

        }


    }
}
