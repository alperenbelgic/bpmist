using System;
using System.Collections.Generic;
using bpmist.common.Commands;

namespace bpmist.common.ICommands
{
    public interface IPullTaskFromGroupCommand : ICommand<PullTaskFromGroupParameter, PullTaskFromGroupResult>
    {
    }

    public class PullTaskFromGroupParameter
    {
        public PullTaskFromGroupParameter(
            string ProcessId, string ProcessInstanceId, string TaskInstanceId
            )
        {
            this.ProcessId = ProcessId;
            this.ProcessInstanceId = ProcessInstanceId;
            this.TaskInstanceId = TaskInstanceId;
        }

        public string ProcessId { get; } 
        public string ProcessInstanceId { get; } 
        public string TaskInstanceId { get; } 
    }

public class PullTaskFromGroupResult
{
    public PullTaskFromGroupResult()
    {

    }



        public static BusinessError TaskIsNotInProcessOrNotActive(params string[] messageTemplateData) => new BusinessError("TaskIsNotInProcessOrNotActive", "Task is not found.  ", messageTemplateData);
        public static BusinessError TaskIsNotAssignedToYourGroup(params string[] messageTemplateData) => new BusinessError("TaskIsNotAssignedToYourGroup", "TaskIsNotAssignedToYourGroup.  ", messageTemplateData);
}


}
