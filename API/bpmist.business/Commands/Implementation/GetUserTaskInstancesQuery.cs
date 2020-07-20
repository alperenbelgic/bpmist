using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using bpmist.common.Commands;
using bpmist.common.DataModels.DocumentTypes;
using bpmist.common.DataModels.SubDocumentTypes;
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
                (int daysToDue, int absDaysToDue) = this.CalculateDueValues(t.DueDate);

                return new GetUserTaskInstances_UserTaskInstanceListResult(
                 t.ProcessId, t.ProcessInstanceId, t.TaskInstanceId, t.ProcessName, t.TaskName, t.TaskState, t.DueDate, daysToDue, absDaysToDue);
            })
            .Where(t=>t.TaskState != TaskStates.Candidate)
            .OrderBy(t => t.DaysToDue)
            .ToArray();
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

                    (int daysToDue, int absDaysToDue) = this.CalculateDueValues(gt.DueDate);

                    return new GetUserTaskInstances_GroupsTaskInstanceList_TaskInstanceListResult(
                    gt.ProcessId, gt.ProcessInstanceId, gt.TaskInstanceId, gt.ProcessName, gt.TaskName, gt.TaskState, gt.DueDate, daysToDue, absDaysToDue);

                })
                .OrderBy(t => t.DaysToDue);

                var groupTaskInstances = new GetUserTaskInstances_GroupsTaskInstanceListResult(groupName, taskInstances.ToArray());

                groupTaskInstancesList.Add(groupTaskInstances);
            }

            return groupTaskInstancesList.ToArray();
        }

        private (int daysToDue, int absDaysToDue) CalculateDueValues(DateTime? dueDate)
        {
            if (dueDate == null)
            {
                return (0, 0);
            }

            int daysToDue = (int)((dueDate.Value.Date - DateTime.UtcNow.Date).TotalDays);

            return (daysToDue, Math.Abs(daysToDue));
        }

        protected override async Task<IEnumerable<OperationErrorInformation>> ValidateAsync(GetUserTaskInstancesParameter parameter, IContextInformation contextInformation)
        {
            return Enumerable.Empty<OperationErrorInformation>();
        }
    }
}
