using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using bpmist.common.Commands;
using bpmist.common.ICommands;

namespace bpmist.business.Commands
{
    public partial class StartNewProcessCommand :
    Command<StartNewProcessParameter, StartNewProcessResult>, IStartNewProcessCommand
    {
        public StartNewProcessCommand(
            
        )
        {

        }


    }
}
