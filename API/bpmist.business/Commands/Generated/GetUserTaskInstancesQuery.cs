using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using bpmist.common.Commands;
using bpmist.common.ICommands;

namespace bpmist.business.Commands
{
    public partial class GetUserTaskInstancesQuery :
    Command<GetUserTaskInstancesParameter, GetUserTaskInstancesResult>, IGetUserTaskInstancesQuery
    {
        public GetUserTaskInstancesQuery(
            bpmist.data.ICommands.IGetOrganizationUserQuery _GetOrganizationUserQuery, Func<bpmist.data.ICommands.IGetGroupQuery> _GetGroupQueryFactory
        )
        {
            this.GetOrganizationUserQuery = _GetOrganizationUserQuery;
            this.GetGroupQueryFactory = _GetGroupQueryFactory;

            this.InitializeAfterConstruction();
        }

        private bpmist.data.ICommands.IGetOrganizationUserQuery GetOrganizationUserQuery { get; }
        private Func<bpmist.data.ICommands.IGetGroupQuery> GetGroupQueryFactory { get; }
    }
}
