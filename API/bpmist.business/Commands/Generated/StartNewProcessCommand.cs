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
            bpmist.data.ICommands.IGetProcessQuery _GetProcessQuery, bpmist.data.ICommands.ISaveProcessInstanceCommand _CreateProcessInstanceCommand, bpmist.data.ICommands.IGetOrganizationUserQuery _GetUserQuery, bpmist.data.ICommands.ISaveOrganizationUserCommand _SaveOrganizationUserCommand
        )
        {
            this.GetProcessQuery = _GetProcessQuery;
            this.CreateProcessInstanceCommand = _CreateProcessInstanceCommand;
            this.GetUserQuery = _GetUserQuery;
            this.SaveOrganizationUserCommand = _SaveOrganizationUserCommand;
        }

        private bpmist.data.ICommands.IGetProcessQuery GetProcessQuery { get; }
        private bpmist.data.ICommands.ISaveProcessInstanceCommand CreateProcessInstanceCommand { get; }
        private bpmist.data.ICommands.IGetOrganizationUserQuery GetUserQuery { get; }
        private bpmist.data.ICommands.ISaveOrganizationUserCommand SaveOrganizationUserCommand { get; }
    }
}
