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
            bpmist.data.ICommands.IGetProcessQuery _GetProcessQuery
        )
        {
            this.GetProcessQuery = _GetProcessQuery;
        }

        private bpmist.data.ICommands.IGetProcessQuery GetProcessQuery { get; }
    }
}
