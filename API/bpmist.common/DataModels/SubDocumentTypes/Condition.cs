using bpmist.business.common;
using Google.Cloud.Firestore;
using System;
using System.Collections.Generic;
using System.Text;

namespace bpmist.common.DataModels.SubDocumentTypes
{
    [FirestoreData]
    public class Condition : SubDocument
    {
        [FirestoreProperty] public object ConditionExpression { get; set; }

        [FirestoreProperty] public string NextItemId { get; set; }
    }
}
