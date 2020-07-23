using Google.Cloud.Firestore;
using System;
using System.Collections.Generic;
using System.Text;

namespace bpmist.common.DataModels.SubDocumentTypes
{

    [FirestoreData]
    public class ProcessModel : SubDocumentWithId
    {
        [FirestoreProperty] public int VersionNumber { get; set; }

        [FirestoreProperty] public TaskModel[] Tasks { get; set; } = new TaskModel[0];

        [FirestoreProperty] public ConditionItem[] ConditionItems { get; set; } = new ConditionItem[0];

        [FirestoreProperty] public ParallelTaskStartItem[] ParallelTaskStartItems { get; set; } = new ParallelTaskStartItem[0];

        [FirestoreProperty] public ParallelTaskEndItem[] ParallelTaskEndItems { get; set; } = new ParallelTaskEndItem[0];
    }
}
