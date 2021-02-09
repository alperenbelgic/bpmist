using Google.Cloud.Firestore;
using System;
using System.Collections.Generic;
using System.Text;

namespace bpmist.common.DataModels.SubDocumentTypes
{
    [FirestoreData]
    public class TaskFormModel : SubDocumentWithId
    {
        [FirestoreProperty] public FieldInTask[] Fields { get; set; } = new FieldInTask[0];
    }

    [FirestoreData]
    public class FieldInTask : SubDocumentWithId
    {
        [FirestoreProperty] public bool Editable { get; set; }
    }
}