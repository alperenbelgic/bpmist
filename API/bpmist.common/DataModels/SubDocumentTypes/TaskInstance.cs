using Google.Cloud.Firestore;
using Google.Type;
using System;
using System.Collections.Generic;
using System.Text;

namespace bpmist.common.DataModels.SubDocumentTypes
{
    [FirestoreData]
    public class TaskInstance : SubDocumentWithId
    {
        [FirestoreProperty] public string TaskState { get; set; }

        [FirestoreProperty] public string AssignedUserId { get; set; }

        [FirestoreProperty] public string AssignedGroupId { get; set; }
        [FirestoreProperty] public string AssigneeName { get; set; } // can be either user's full name or group name

        [FirestoreProperty] public TaskModel TaskModel { get; set; }

        [FirestoreProperty] public Activity[] Activities { get; set; } = new Activity[0];

        [FirestoreProperty] public System.DateTime? StartedAt { get; set; }

        [FirestoreProperty] public System.DateTime? CompletedAt { get; set; }
        [Denormalized(nameof(DenormalizedTaskInstance.DueDate))] [FirestoreProperty] public System.DateTime? DueDate { get; set; }
    }

    public class TaskStates
    {
        public const string Candidate = nameof(Candidate); // this is for newly created process. the first task is created automatically. but if it is not saved, it will be abandoned.
        public const string Draft = nameof(Draft); // only when a candidate, saved but not completed. 
        public const string Waiting = nameof(Waiting); // not sure this will be used. Maybe just jump to active. maybe, if a task is assigned to a group, it's waiting. if it assigned to a person, it is active. 
        public const string Active = nameof(Active);
        public const string Completed = nameof(Completed);
        public const string Canceled = nameof(Canceled);
    }
}
