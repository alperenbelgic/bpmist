using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using bpmist.common.Commands;
using bpmist.common.ICommands;

namespace bpmist.javascript.Commands
{
    public partial class ValidateWithCustomCodeCommand :
    Command<ValidateWithCustomCodeParameter, ValidateWithCustomCodeResult>, IValidateWithCustomCodeCommand
    {
        public ValidateWithCustomCodeCommand(
            
        )
        {


            this.InitializeAfterConstruction();
        }


    }
}
