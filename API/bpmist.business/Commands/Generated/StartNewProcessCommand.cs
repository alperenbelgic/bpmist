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
            bpmist.data.ICommands.IGetProcessQuery _GetProcessQuery, bpmist.data.ICommands.ICreateProcessInstanceCommand _CreateProcessInstanceCommand
        )
        {
            this.GetProcessQuery = _GetProcessQuery;
            this.CreateProcessInstanceCommand = _CreateProcessInstanceCommand;
        }

        private bpmist.data.ICommands.IGetProcessQuery GetProcessQuery { get; }
        private bpmist.data.ICommands.ICreateProcessInstanceCommand CreateProcessInstanceCommand { get; }
    }
}
