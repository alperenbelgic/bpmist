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
            bpmist.common.ICommands.IValidateWithCustomCodeCommand _ValidateWithCustomCodeCommand
        )
        {
            this.ValidateWithCustomCodeCommand = _ValidateWithCustomCodeCommand;

            this.InitializeAfterConstruction();
        }

        private bpmist.common.ICommands.IValidateWithCustomCodeCommand ValidateWithCustomCodeCommand { get; }
    }
}
