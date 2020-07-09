using bpmist.business.common;
using Google.Cloud.Firestore;
using System;
using System.Collections.Generic;
using System.Text;

namespace bpmist.common.DataModels.SubDocumentTypes
{
    [FirestoreData]
    public class TaskModel : SubDocument
    {
        [FirestoreProperty]
        public string TaskName { get; set; }

        [FirestoreProperty]
        public ActionModel[] Actions { get; set; }

        [FirestoreProperty]
        public AssigningConfiguration AssigningConfiguration { get; set; }
    }

    [FirestoreData]
    public class AssigningConfiguration
    {

        [FirestoreProperty]
        public AssigningRule AssigningRule { get; set; }

        [FirestoreProperty]
        public string[] AssignableUserIds { get; set; }

        [FirestoreProperty]
        public string AssignableGroupId { get; set; }
    }

    [FirestoreData]
    public class AssigningRule
    {
        [FirestoreProperty]
        public bool AssignToManager { get; set; } = false;
    }


}
