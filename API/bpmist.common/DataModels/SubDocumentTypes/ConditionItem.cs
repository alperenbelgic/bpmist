using Google.Cloud.Firestore;
using System;
using System.Collections.Generic;
using System.Text;

namespace bpmist.common.DataModels.SubDocumentTypes
{
    [FirestoreData]
    public class ConditionItem : SubDocumentWithId
    {
        [FirestoreProperty]
        public Condition[] Conditions { get; set; }
    }
}
