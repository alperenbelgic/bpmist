using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using bpmist.common.Commands;
using bpmist.common.ICommands;

namespace bpmist.business.Commands
{
    public partial class AppendSubmittedTaskDataCommand :
    Command<AppendSubmittedTaskDataParameter, AppendSubmittedTaskDataResult>, IAppendSubmittedTaskDataCommand
    {
        public AppendSubmittedTaskDataCommand(
            
        )
        {


            this.InitializeAfterConstruction();
        }


    }
}
