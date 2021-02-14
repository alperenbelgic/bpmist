using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using bpmist.common.Commands;
using bpmist.common.ICommands;

namespace bpmist.business.Commands
{
    public partial class ValidateFormValuesCommand :
    Command<ValidateFormValuesParameter, ValidateFormValuesResult>, IValidateFormValuesCommand
    {
        public ValidateFormValuesCommand(
            
        )
        {


            this.InitializeAfterConstruction();
        }


    }
}
