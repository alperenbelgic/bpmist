using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using bpmist.common.Commands;
using bpmist.common.ICommands;

namespace bpmist.business.Commands
{
    public partial class GetTaskInstanceQuery :
    Command<GetTaskInstanceParameter, GetTaskInstanceResult>, IGetTaskInstanceQuery
    {
        public GetTaskInstanceQuery(
            bpmist.data.ICommands.IGetProcessInstanceQuery _GetProcessInstanceQuery
        )
        {
            this.GetProcessInstanceQuery = _GetProcessInstanceQuery;
        }

        private bpmist.data.ICommands.IGetProcessInstanceQuery GetProcessInstanceQuery { get; }
    }
}
