using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using bpmist.common.Commands;
using bpmist.common.DataModels.DocumentTypes;
using bpmist.common.DataModels.SubDocumentTypes;
using bpmist.common.ICommands;
using Google.Api;
using Google.Protobuf.WellKnownTypes;

namespace bpmist.business.Commands
{
    public partial class GetTaskInstanceQuery
    {
        protected override async Task<GetTaskInstanceResult> ExecuteImplementationAsync(GetTaskInstanceParameter parameter, IContextInformation contextInformation)
        {
            string processId = parameter.ProcessId;
            string processInstanceId = parameter.ProcessInstanceId;
            string taskInstanceId = parameter.TaskInstanceId;
            string actionUserId = contextInformation.User.UserId;

            var processInstance = await GetProcessInstance(contextInformation, processId, processInstanceId);

            var taskInstance = processInstance.TaskInstances.FirstOrDefault(ti => ti.Id == taskInstanceId);

            // TODO: handle non existing taskInstance

            string processName = processInstance.ProcessName;
            string taskName = taskInstance.TaskModel.TaskName;
            string assigneeName = taskInstance.AssigneeName;
            string taskState = taskInstance.TaskState;

            var otherTasks = this.GetOtherTasks(processInstance.TaskInstances);

            var form = this.CreateForm(processInstance, taskInstance, taskInstance.TaskModel.TaskFormModel);

            if (taskState == TaskStates.Completed || taskState == TaskStates.Canceled)
            {
                // no action, no editing.
                return new GetTaskInstanceResult(processName, taskName, assigneeName, taskState, new GetTaskInstance_ActionsResult[0], new GetTaskInstance_UserTaskStateResult(false, false, false, false), otherTasks, form);
            }

            // TODO:! include save task as default - only if the form has any field to save. 
            var actions = this.GetActions(taskInstance).Select(a => new GetTaskInstance_ActionsResult(a.ActionText, a.ActionType, a.Id)).ToArray();

            var userTaskState = await GetUserTaskState(taskInstance, actionUserId, contextInformation);


            return new GetTaskInstanceResult(processName, taskName, assigneeName, taskState, actions, userTaskState, otherTasks, form);
        }

        private GetTaskInstance_FormResult CreateForm(ProcessInstance processInstance, TaskInstance taskInstance, TaskFormModel taskFormModel)
        {
            var list = new List<GetTaskInstance_Form_FieldsResult>();

            foreach (var fieldInTask in taskFormModel.Fields)
            {
                var processField = processInstance.ProcessModel.ProcessFields.FirstOrDefault(pf => pf.Id == fieldInTask.Id);

                if (processField != null)
                {
                    var fieldValue = this.GetFieldValue(processField, processInstance.ProcessData);

                    bool isReadOnly = this.IsFieldReadOnly(processInstance, taskInstance, taskFormModel, fieldInTask);

                    var field =
                        new GetTaskInstance_Form_FieldsResult(processField.Id, processField.FieldName, processField.FieldType, fieldValue, isReadOnly);

                    list.Add(field);
                }
            }

            return new GetTaskInstance_FormResult(list.ToArray());
        }

        private bool IsFieldReadOnly(ProcessInstance processInstance, TaskInstance taskInstance, TaskFormModel taskFormModel, FieldInTask fieldInTask)
        {
            bool isFieldReadOnly =
                    processInstance.ProcessState == ProcessStates.Completed ||
                    processInstance.ProcessState == ProcessStates.Cancelled ||
                    taskInstance.TaskState == TaskStates.Canceled ||
                    taskInstance.TaskState == TaskStates.Completed ||
                    !fieldInTask.Editable;

            return isFieldReadOnly;
        }

        private object GetFieldValue(ProcessField processField, ProcessData processData)
        {
            if (processField.FieldType == FieldTypes.Date)
            {
                processData.DateValues.TryGetValue(processField.Id, out DateTime? value);

                if (value != null)
                {
                    return new int[] { value.Value.Year, value.Value.Month, value.Value.Day };
                }

                return value;
            }
            else if (processField.FieldType == FieldTypes.Text)
            {
                processData.TextValues.TryGetValue(processField.Id, out string value);

                return value;
            }
            else
            {
                return null;
            }
        }

        private GetTaskInstance_OtherTasksResult[] GetOtherTasks(TaskInstance[] taskInstances)
        {
            return taskInstances.Select(ti => new GetTaskInstance_OtherTasksResult(ti.Id, ti.TaskModel.TaskName, ti.AssigneeName, ti.TaskState, ti.CompletedAt)).ToArray();
        }

        private async Task<GetTaskInstance_UserTaskStateResult> GetUserTaskState(TaskInstance taskInstance, string actionUserId, IContextInformation contextInformation)
        {
            bool canEdit = actionUserId == taskInstance.AssignedUserId;
            bool assignedToAnotherUser =
                !string.IsNullOrEmpty(taskInstance.AssignedUserId) &&
                actionUserId != taskInstance.AssignedUserId;

            bool assignedToCurrentUsersGroup;
            bool assignedToGroup;
            if (!string.IsNullOrWhiteSpace(taskInstance.AssignedUserId))
            {
                assignedToGroup = false;
                assignedToCurrentUsersGroup = false;
            }
            else if (!string.IsNullOrWhiteSpace(taskInstance.AssignedGroupId))
            {
                assignedToGroup = true;

                var getUserResult = await this.GetUserQuery.ExecuteAsync(new data.ICommands.GetOrganizationUserParameter(actionUserId), contextInformation);
                // TODO: Check if user is empty.
                var user = getUserResult.Value.OrganizationUser;

                assignedToCurrentUsersGroup = user.GroupIds.Any(gi => gi == taskInstance.AssignedGroupId);
            }
            else
            {
                // TODO: unexpected case
                throw new NotImplementedException();
            }

            var userTaskState = new GetTaskInstance_UserTaskStateResult(canEdit, assignedToAnotherUser, assignedToCurrentUsersGroup, assignedToGroup);

            return userTaskState;
        }

        private async Task<ProcessInstance> GetProcessInstance(IContextInformation contextInformation, string processId, string processInstanceId)
        {
            var getProcessInstanceResult =
                await this.GetProcessInstanceQuery.ExecuteAsync(new data.ICommands.GetProcessInstanceParameter(processId, processInstanceId), contextInformation);

            return getProcessInstanceResult.Value.ProcessInstance;
        }

        private ActionModel[] GetActions(TaskInstance taskInstance)
        {
            var actions = taskInstance.TaskModel?.Actions.ToList();

            bool editableFieldExists = taskInstance.TaskModel.TaskFormModel.Fields.Any(f => f.Editable);

            // add save action if there is any non-read-only form value
            if (editableFieldExists)
            {
                actions.Add(new ActionModel()
                {
                    ActionText = "Save",
                    ActionType = ActionTypes.Secondary,
                    Id = "save",
                    NextItemId = "save"
                });
            }

            return actions.ToArray();
        }

        protected override async Task<IEnumerable<OperationErrorInformation>> ValidateAsync(GetTaskInstanceParameter parameter, IContextInformation contextInformation)
        {
            return Enumerable.Empty<OperationErrorInformation>();
        }
    }
}
