using bpmist.common.DataModels.SubDocumentTypes;
using Google.Cloud.Firestore;
using System;
using System.Collections.Generic;
using System.Text;

namespace bpmist.common.DataModels.DocumentTypes
{
    [FirestoreData]
    public class Group : Document
    {
        [FirestoreProperty] public string GroupName { get; set; }
        [FirestoreProperty] public string[] UserIds { get; set; } = new string[0];
    }
}
