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
            bpmist.data.ICommands.IGetProcessInstanceQuery _GetProcessInstanceQuery, bpmist.data.ICommands.ISaveProcessInstanceCommand _SaveProcessInstanceCommand, bpmist.data.ICommands.IGetOrganizationUserQuery _GetOrganizationUserQuery, bpmist.data.ICommands.IGetGroupQuery _GetGroupQuery, bpmist.data.ICommands.ISaveOrganizationUserCommand _SaveOrganizationUserCommand, bpmist.data.ICommands.ISaveGroupCommand _SaveGroupCommand, bpmist.common.ICommands.IAppendSubmittedTaskDataCommand _AppendSubmittedTaskDataCommand
        )
        {
            this.GetProcessInstanceQuery = _GetProcessInstanceQuery;
            this.SaveProcessInstanceCommand = _SaveProcessInstanceCommand;
            this.GetOrganizationUserQuery = _GetOrganizationUserQuery;
            this.GetGroupQuery = _GetGroupQuery;
            this.SaveOrganizationUserCommand = _SaveOrganizationUserCommand;
            this.SaveGroupCommand = _SaveGroupCommand;
            this.AppendSubmittedTaskDataCommand = _AppendSubmittedTaskDataCommand;

            this.InitializeAfterConstruction();
        }

        private bpmist.data.ICommands.IGetProcessInstanceQuery GetProcessInstanceQuery { get; }
        private bpmist.data.ICommands.ISaveProcessInstanceCommand SaveProcessInstanceCommand { get; }
        private bpmist.data.ICommands.IGetOrganizationUserQuery GetOrganizationUserQuery { get; }
        private bpmist.data.ICommands.IGetGroupQuery GetGroupQuery { get; }
        private bpmist.data.ICommands.ISaveOrganizationUserCommand SaveOrganizationUserCommand { get; }
        private bpmist.data.ICommands.ISaveGroupCommand SaveGroupCommand { get; }
        private bpmist.common.ICommands.IAppendSubmittedTaskDataCommand AppendSubmittedTaskDataCommand { get; }
    }
}
