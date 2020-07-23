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
        /// This can be an id of a task, condition, paralleltaskstartitem, paralleltaskenditem. 
        /// If null -> the process will end upon the action call.
        /// If the value is cancel, the task and the process will be canceled. 
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
