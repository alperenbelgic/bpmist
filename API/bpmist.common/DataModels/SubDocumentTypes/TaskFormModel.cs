using Google.Cloud.Firestore;
using System;
using System.Collections.Generic;
using System.Text;

namespace bpmist.common.DataModels.SubDocumentTypes
{
    [FirestoreData]
    public class TaskFormModel : SubDocumentWithId
    {
        [FirestoreProperty] public Field[] Fields { get; set; } = new Field[0];
    }

    [FirestoreData]
    public class Field : SubDocumentWithId
    {
        [FirestoreProperty] public string ValueType { get; set; }

        [FirestoreProperty] public string FieldName { get; set; }
    }
    public class ValueTypes
    {
        public const string Date = nameof(ValueTypes.Date);
    }
}