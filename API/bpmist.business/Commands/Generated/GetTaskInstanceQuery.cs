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
            bpmist.data.ICommands.IGetProcessInstanceQuery _GetProcessInstanceQuery, bpmist.data.ICommands.IGetOrganizationUserQuery _GetUserQuery
        )
        {
            this.GetProcessInstanceQuery = _GetProcessInstanceQuery;
            this.GetUserQuery = _GetUserQuery;

            this.Initialize();
        }

        private bpmist.data.ICommands.IGetProcessInstanceQuery GetProcessInstanceQuery { get; }
        private bpmist.data.ICommands.IGetOrganizationUserQuery GetUserQuery { get; }
    }
}
