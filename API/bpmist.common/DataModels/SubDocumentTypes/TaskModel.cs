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
        public string AssigningUserId { get; set; }

        [FirestoreProperty]
        public string AssigningGroupId { get; set; }

        [FirestoreProperty]
        public string PoolId { get; set; } // this is on the fly group, which is created by selecting multiple users while defining assigned person.

    }

    [FirestoreData]
    public class AssigningRule
    {
        [FirestoreProperty]
        public bool AssignToManager { get; set; } = false; // can this be set for parallel tasks? probably no. maybe we can say that, the previous item has to be a (single) task, not anything else. 
    }


}
