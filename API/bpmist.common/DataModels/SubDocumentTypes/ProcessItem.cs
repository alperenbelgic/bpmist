using bpmist.common.DataModels;
using bpmist.common.DataModels.SubDocumentTypes;
using Google.Cloud.Firestore;

namespace bpmist.business.common
{
    [FirestoreData]
    public class GenericProcessItem : SubDocument
    {
        [FirestoreProperty]
        public TaskModel Task { get; set; }

        [FirestoreProperty]
        public Condition Condition { get; set; }

        [FirestoreProperty]
        public ParallelTaskStartItem ParallelTaskStartItem { get; set; }

        [FirestoreProperty]
        public ParallelTaskEndItem ParallelTaskEndItem { get; set; }
    }
}