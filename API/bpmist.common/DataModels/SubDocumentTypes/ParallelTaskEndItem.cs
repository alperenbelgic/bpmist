using bpmist.business.common;
using bpmist.common.DataModels.DocumentTypes;
using Google.Cloud.Firestore;
using System;
using System.Collections.Generic;
using System.Text;

namespace bpmist.common.DataModels.SubDocumentTypes
{
    [FirestoreData]

    public class ParallelTaskEndItem : SubDocument
    {
        [FirestoreProperty]
        public string ParallelTaskStartItemId { get; set; }


    }
}
