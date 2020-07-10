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
            bpmist.data.ICommands.IGetProcessInstanceQuery _GetProcessInstanceQuery, bpmist.data.ICommands.IGetOrganizationUserQuery _GetOrganizationUserQuery
        )
        {
            this.GetProcessInstanceQuery = _GetProcessInstanceQuery;
            this.GetOrganizationUserQuery = _GetOrganizationUserQuery;
        }

        private bpmist.data.ICommands.IGetProcessInstanceQuery GetProcessInstanceQuery { get; }
        private bpmist.data.ICommands.IGetOrganizationUserQuery GetOrganizationUserQuery { get; }
    }
}
