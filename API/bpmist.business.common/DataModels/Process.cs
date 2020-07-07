using Google.Cloud.Firestore;
using System;

namespace bpmist.business.common
{

    [FirestoreData]
    public abstract class DocumentWithId
    {
        [FirestoreDocumentId]
        public string Id { get; set; }

        //created, updated, etc
    }

    /// <summary>
    /// A map object belonging to a document
    /// </summary>
    [FirestoreData]
    public abstract class SubDocumentWithId
    {
        public SubDocumentWithId()
        {
            // we assign an id
            // if the object is loaded from db, this will be overridden
            // otherwise, which means we programatically created this object,
            // this id will be saved in db
            this.Id = Guid.NewGuid().ToString();
        }

        public string Id { get; set; }
    }

    [FirestoreData]
    public class Process : DocumentWithId
    {
        [FirestoreProperty]
        public string ProcessName { get; set; }

        [FirestoreProperty]
        public Task[] Tasks { get; set; }
    }

    [FirestoreData]
    public class Task
    {

        [FirestoreProperty]
        public string TaskName { get; set; }

        [FirestoreProperty]
        public string TaskId { get; set; }
    }




    //public class ProcessInstance : FirestoreDoc
    //{
    //    [FirestoreProperty]
    //    public object ProcessData { get; set; }

    //    [FirestoreProperty]
    //    public ProcessModel ProcessModel { get; set; }
    //}

    //[FirestoreData]
    //public class Process : FirestoreDoc
    //{

    //    [FirestoreProperty]
    //    public string ProcessName { get; set; }

    //    [FirestoreProperty]
    //    public ProcessModel ProcessTasks { get; set; }

    //    [FirestoreProperty]
    //    public ProcessModel[] VersionedProcessTasks { get; set; }
    //}

    //[FirestoreData]
    //public class ProcessModel : FirestoreMap
    //{
    //    [FirestoreProperty]
    //    public int VersionNumber { get; set; }

    //    [FirestoreProperty]
    //    public Task[] Tasks { get; set; }

    //    public ConditionItem[] ConditionItems { get; set; }

    //    public ParallelTaskStartItem[] ParallelTaskStartItems { get; set; }

    //    public ParallelTaskEndItem[] ParallelTaskEndItems { get; set; }
    //}

    //[FirestoreData]
    //public class ProcessItem : FirestoreMap
    //{
    //    public ProcessItem[] NextProcessItems { get; set; } = new ProcessItem[0];
    //}



    //[FirestoreData]
    //public class Task : ProcessItem
    //{
    //    [FirestoreProperty]
    //    public string TaskName { get; set; }

    //    [FirestoreProperty]
    //    public Action[] Actions { get; set; }
    //}

    //[FirestoreData]
    //public class ConditionItem : ProcessItem
    //{
    //    public Condition[] Conditions { get; set; }
    //}

    //public class Condition : FirestoreMap
    //{
    //    public object ConditionExpression { get; set; }

    //    public ProcessItem NextItem { get; set; }

    //}

    //public class ParallelTaskStartItem : ProcessItem
    //{
    //    public ProcessItem[] StartingItems { get; set; }

    //    public string ParallelTaskEndItemId { get; set; }
    //}

    //public class ParallelTaskEndItem : ProcessItem
    //{
    //    public string ParallelTaskStartItemId { get; set; }
    //}

    //[FirestoreData]
    //public class Action
    //{
    //    [FirestoreProperty]
    //    public string ActionName { get; set; }

    //    [FirestoreProperty]
    //    public ProcessItem NextItem { get; set; }

    //}

}
