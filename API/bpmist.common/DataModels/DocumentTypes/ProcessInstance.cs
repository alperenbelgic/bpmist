using bpmist.business.common;
using bpmist.common.DataModels.SubDocumentTypes;
using Google.Cloud.Firestore;
using System;
using System.Collections.Generic;
using System.Text;

namespace bpmist.common.DataModels.DocumentTypes
{
    [FirestoreData]
    public class ProcessInstance : Document
    {
        [FirestoreProperty]
        public object ProcessData { get; set; }

        [FirestoreProperty]
        public ProcessModel[] ChangedProcessModels { get; set; } = new ProcessModel[0];

        [FirestoreProperty]
        public ProcessModel OriginalProcessModel { get; set; }

        [FirestoreProperty]
        public TaskInstance[] TaskInstances { get; set; }
    }

}
