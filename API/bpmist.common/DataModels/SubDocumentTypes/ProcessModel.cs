using bpmist.business.common;
using Google.Cloud.Firestore;
using System;
using System.Collections.Generic;
using System.Text;

namespace bpmist.common.DataModels.SubDocumentTypes
{

    [FirestoreData]
    public class ProcessModel : SubDocument
    {
        [FirestoreProperty]
        public int VersionNumber { get; set; }

        [FirestoreProperty]
        public Task[] Tasks { get; set; }

        [FirestoreProperty]
        public ConditionItem[] ConditionItems { get; set; }

        [FirestoreProperty]
        public ParallelTaskStartItem[] ParallelTaskStartItems { get; set; }

        [FirestoreProperty]
        public ParallelTaskEndItem[] ParallelTaskEndItems { get; set; }
    }
}
