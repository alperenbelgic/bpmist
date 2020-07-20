using Google.Cloud.Firestore;
using System;
using System.Collections.Generic;
using System.Text;

namespace bpmist.common.DataModels.SubDocumentTypes
{

    [FirestoreData]
    public class ProcessVisuals
    {
        [FirestoreProperty] public string IconColor { get; set; }
        [FirestoreProperty] public string Initials { get; set; }
        [FirestoreProperty] public string IconName { get; set; }
    }
}
