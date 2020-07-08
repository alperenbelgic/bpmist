using bpmist.business.common;
using Google.Cloud.Firestore;
using System;
using System.Collections.Generic;
using System.Text;

namespace bpmist.common.DataModels.SubDocumentTypes
{
    [FirestoreData]
    public class Task : SubDocument
    {
        [FirestoreProperty]
        public string TaskName { get; set; }

        [FirestoreProperty]
        public Action[] Actions { get; set; }

        [FirestoreProperty]
        public string[] AssignableUserIds { get; set; }

        [FirestoreProperty]
        public string AssignableGroupId { get; set; }
    }
}
