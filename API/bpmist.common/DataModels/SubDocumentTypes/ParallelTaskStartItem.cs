using bpmist.business.common;
using Google.Cloud.Firestore;
using System;
using System.Collections.Generic;
using System.Text;

namespace bpmist.common.DataModels.SubDocumentTypes
{
    [FirestoreData]
    public class ParallelTaskStartItem : SubDocument
    {
        [FirestoreProperty]
        public string[] StartingItemIds { get; set; }

        [FirestoreProperty]
        public string ParallelTaskEndItemId { get; set; }
    }
}
