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
        [FirestoreProperty] public string TaskName { get; set; }

        [FirestoreProperty] public ActionModel[] Actions { get; set; } = new ActionModel[0];

        [FirestoreProperty] public AssigningConfiguration AssigningConfiguration { get; set; }

        [FirestoreProperty] public DueDateConfiguration DueDateConfiguration { get; set; }
    }

    [FirestoreData]
    public class DueDateConfiguration
    {
        [FirestoreProperty] public int? DueDay { get; set; }
    }

    [FirestoreData]
    public class AssigningConfiguration
    {

        [FirestoreProperty] public AssigningRule AssigningRule { get; set; }

        [FirestoreProperty] public string AssigningUserId { get; set; }

        [FirestoreProperty] public string AssigningGroupId { get; set; }
    }

    [FirestoreData]
    public class AssigningRule
    {
        [FirestoreProperty] public bool AssignToManager { get; set; } = false; // can this be set for parallel tasks? probably no. maybe we can say that, the previous item has to be a (single) task, not anything else. 
    }


}
