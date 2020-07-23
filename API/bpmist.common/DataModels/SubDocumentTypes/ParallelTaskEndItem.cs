using bpmist.common.DataModels.DocumentTypes;
using Google.Cloud.Firestore;
using System;
using System.Collections.Generic;
using System.Text;

namespace bpmist.common.DataModels.SubDocumentTypes
{
    [FirestoreData]

    public class ParallelTaskEndItem : SubDocumentWithId
    {
        [FirestoreProperty]
        public string ParallelTaskStartItemId { get; set; }


    }
}
