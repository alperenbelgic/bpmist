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

        [FirestoreProperty] public ProcessField[] ProcessFields { get; set; } = new ProcessField[0];

        [FirestoreProperty] public ProcessData DefaultValues { get; set; } = new ProcessData();

        [FirestoreProperty] public TaskModel[] Tasks { get; set; } = new TaskModel[0];

        [FirestoreProperty] public ConditionItem[] ConditionItems { get; set; } = new ConditionItem[0];

        [FirestoreProperty] public ParallelTaskStartItem[] ParallelTaskStartItems { get; set; } = new ParallelTaskStartItem[0];

        [FirestoreProperty] public ParallelTaskEndItem[] ParallelTaskEndItems { get; set; } = new ParallelTaskEndItem[0];


    }

    [FirestoreData]
    public class ProcessField : SubDocumentWithId
    {
        [FirestoreProperty] public string FieldName { get; set; }

        [FirestoreProperty] public string FieldType { get; set; }
    }

    [FirestoreData]
    public class ProcessData
    {
        [FirestoreProperty] public Dictionary<string, DateTime?> DateValues { get; set; } = new Dictionary<string, DateTime?>();
        [FirestoreProperty] public Dictionary<string, string> TextValues { get; set; } = new Dictionary<string, string>();
    }
}
