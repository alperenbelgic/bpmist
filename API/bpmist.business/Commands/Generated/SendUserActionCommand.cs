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
            bpmist.data.ICommands.IGetProcessInstanceQuery _GetProcessInstanceQuery, bpmist.data.ICommands.ISaveProcessInstanceCommand _SaveProcessInstanceCommand, bpmist.data.ICommands.IGetOrganizationUserQuery _GetOrganizationUserQuery, bpmist.data.ICommands.ISaveOrganizationUserCommand _SaveOrganizationUserCommand
        )
        {
            this.GetProcessInstanceQuery = _GetProcessInstanceQuery;
            this.SaveProcessInstanceCommand = _SaveProcessInstanceCommand;
            this.GetOrganizationUserQuery = _GetOrganizationUserQuery;
            this.SaveOrganizationUserCommand = _SaveOrganizationUserCommand;
        }

        private bpmist.data.ICommands.IGetProcessInstanceQuery GetProcessInstanceQuery { get; }
        private bpmist.data.ICommands.ISaveProcessInstanceCommand SaveProcessInstanceCommand { get; }
        private bpmist.data.ICommands.IGetOrganizationUserQuery GetOrganizationUserQuery { get; }
        private bpmist.data.ICommands.ISaveOrganizationUserCommand SaveOrganizationUserCommand { get; }
    }
}
