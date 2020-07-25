using Google.Cloud.Firestore;
using System;
using System.Collections.Generic;
using System.Runtime.InteropServices;
using System.Text;

namespace bpmist.common.DataModels.SubDocumentTypes
{
    [FirestoreData]
    public class ActionModel : SubDocumentWithId
    {
        [FirestoreProperty] public string ActionText { get; set; }

        /// <summary>
        /// ? this might be renamed as action something (action goal etc.) having a next item is not always the case.
        /// This can be an id of a task, condition, paralleltaskstartitem, paralleltaskenditem. 
        /// If null -> the process will end upon the action call.
        /// If the value is cancel, the task and the process will be canceled. 
        /// If the value is save, the submitted form values are saved but the task instance is still active
        /// </summary>
        [FirestoreProperty] public string NextItemId { get; set; }

        [FirestoreProperty] public string ActionType { get; set; } = ActionTypes.Primary;
    }

    public class ActionTypes
    {
        public const string Primary = nameof(Primary);
        public const string Secondary = nameof(Secondary);
        public const string Warned = nameof(Warned);
    }
}
