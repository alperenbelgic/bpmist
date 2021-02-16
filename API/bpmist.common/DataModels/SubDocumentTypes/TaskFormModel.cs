using Google.Cloud.Firestore;
using System;
using System.Collections.Generic;
using System.Text;

namespace bpmist.common.DataModels.SubDocumentTypes
{
    [FirestoreData]
    public class TaskFormModel : SubDocumentWithId
    {
        [FirestoreProperty] public FieldInTask[] Fields { get; set; } = new FieldInTask[0];
    }

    [FirestoreData]
    public class FieldInTask : SubDocumentWithId
    {
        [FirestoreProperty] public bool Editable { get; set; }

        [FirestoreProperty] public FieldInTaskValidation Validation { get; set; } = new FieldInTaskValidation();
    }

    [FirestoreData]
    public class FieldInTaskValidation
    {
        [FirestoreProperty]
        public bool IsRequired { get; set; } = false; // This shouldn't be relevant if FieldInTask.Editable is false.

        [FirestoreProperty]
        public CustomValidationDefinition CustomValidationDefinition { get; set; } = new CustomValidationDefinition();
    }

    [FirestoreData]
    public class CustomValidationDefinition
    {
        [FirestoreProperty]
        public bool HasCustomValidation { get; set; } = false;


        [FirestoreProperty]
        public string CustomCodeContent { get; set; }

        [FirestoreProperty]
        public string ValidationErrorMessage { get; set; }
    }
}