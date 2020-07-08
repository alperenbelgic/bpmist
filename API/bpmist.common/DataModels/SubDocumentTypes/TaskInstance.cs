using bpmist.business.common;
using Google.Cloud.Firestore;
using Google.Type;
using System;
using System.Collections.Generic;
using System.Text;

namespace bpmist.common.DataModels.SubDocumentTypes
{
    [FirestoreData]
    public class TaskInstance : SubDocument
    {
        [FirestoreProperty]
        public string TaskState { get; set; }

        [FirestoreProperty]
        public string AssignedUserId { get; set; }

        [FirestoreProperty]
        public string AssignedGroupId { get; set; }

        [FirestoreProperty]
        public TaskModel Task { get; set; }

        [FirestoreProperty]
        public Activity[] Activities { get; set; }

        [FirestoreProperty]
        public System.DateTime? StartedAt { get; set; }

        [FirestoreProperty]
        public System.DateTime? CompletedAt { get; set; }

    }

    public class TaskStates
    {
        public const string Candidate = nameof(Candidate); // this is for newly created process. the first task is created automatically. but if it is not saved, it will be abandoned.
        public const string Waiting = nameof(Waiting); // not sure this will be used. Maybe just jump to active.
        public const string Active = nameof(Active);
        public const string Closed = nameof(Closed);
    }
}
