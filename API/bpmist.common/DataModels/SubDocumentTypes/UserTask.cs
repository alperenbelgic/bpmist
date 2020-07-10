using bpmist.business.common;
using Google.Cloud.Firestore;
using System;
using System.Collections.Generic;
using System.Text;

namespace bpmist.common.DataModels.SubDocumentTypes
{
    [FirestoreData]
    public class UserTask : SubDocument
    {
        [FirestoreProperty] public string ProcessId { get; set; }
        [FirestoreProperty] public string ProcessInstanceId { get; set; }
        [FirestoreProperty] public string TaskInstanceId { get; set; }
        [FirestoreProperty] public string ProcessName { get; set; }
        [FirestoreProperty] public string TaskName { get; set; }
        [FirestoreProperty] public DateTime DueDate { get; set; }

    }
}
