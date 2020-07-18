using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using bpmist.common.Commands;
using bpmist.common.DataModels.DocumentTypes;
using bpmist.common.ICommands;
using Google.Api;
using Google.Apis.Http;

namespace bpmist.business.Commands
{
    public partial class GetUserTaskInstancesQuery
    {
        protected override async Task<GetUserTaskInstancesResult> ExecuteImplementationAsync(GetUserTaskInstancesParameter parameter, IContextInformation contextInformation)
        {
            string userId = contextInformation.User.UserId;

            var getUserResult = await this.GetOrganizationUserQuery.ExecuteAsync(new data.ICommands.GetOrganizationUserParameter(userId), contextInformation);
            // TODO: handle
            var user = getUserResult.Value.OrganizationUser;

            var userTaskInstances = GetUserTaskInstances(user);

            var groupTaskInstances = await GetGroupTasks(user.GroupIds, contextInformation);

            return new GetUserTaskInstancesResult(userTaskInstances, groupTaskInstances);
        }

        private GetUserTaskInstances_UserTaskInstanceListResult[] GetUserTaskInstances(OrganizationUser user)
        {
            return user.Tasks.Select(t =>
            {
                (bool duePast, int daysToDue) = this.CalculateDueValues(t.DueDate);

                return new GetUserTaskInstances_UserTaskInstanceListResult(
                 t.ProcessId, t.ProcessInstanceId, t.TaskInstanceId, t.ProcessName, t.TaskName, t.TaskState, t.DueDate, duePast, daysToDue);
            }).ToArray();
        }

        private async Task<GetUserTaskInstances_GroupsTaskInstanceListResult[]> GetGroupTasks(string[] groupIds, IContextInformation contextInformation)
        {
            var getGroupCommands =
            groupIds.Select(groupId =>
            {
                return this.GetGroupQueryFactory().ExecuteAsync(new data.ICommands.GetGroupParameter(groupId), contextInformation);
            });

            var results = await Task.WhenAll(getGroupCommands);

            var groupTaskInstancesList = new List<GetUserTaskInstances_GroupsTaskInstanceListResult>();

            foreach (var getGroupResult in results)
            {
                if (!getGroupResult.Successful || getGroupResult.Value.Group.GroupTasks.Length == 0)
                {
                    continue;
                }

                var group = getGroupResult.Value.Group;

                string groupName = group.GroupName;

                var taskInstances =
                group.GroupTasks.Select(gt =>
                {

                    (bool duePast, int daysToDue) = this.CalculateDueValues(gt.DueDate);

                    return new GetUserTaskInstances_GroupsTaskInstanceList_TaskInstanceListResult(
                    gt.ProcessId, gt.ProcessInstanceId, gt.TaskInstanceId, gt.ProcessName, gt.TaskName, gt.TaskState, gt.DueDate, duePast, daysToDue);

                });

                var groupTaskInstances = new GetUserTaskInstances_GroupsTaskInstanceListResult(groupName, taskInstances.ToArray());

                groupTaskInstancesList.Add(groupTaskInstances);
            }

            return groupTaskInstancesList.ToArray();
        }

        private (bool duePast, int daysToDue) CalculateDueValues(DateTime? dueDate)
        {
            if (dueDate == null)
            {
                return (false, 0);
            }

            int daysToDue = (int)((dueDate.Value.Date - DateTime.UtcNow.Date).TotalDays);

            if (daysToDue < 0)
            {
                return (true, Math.Abs(daysToDue));
            }
            else
            {
                return (false, daysToDue);
            }
        }

        protected override async Task<IEnumerable<OperationErrorInformation>> ValidateAsync(GetUserTaskInstancesParameter parameter, IContextInformation contextInformation)
        {
            return Enumerable.Empty<OperationErrorInformation>();
        }
    }
}
