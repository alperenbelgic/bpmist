using Google.Cloud.Firestore;
using Google.Cloud.Firestore.V1;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace bpmist.firestore.DataModels
{
    public class FirestoreHelper
    {
        public T Get<T>(DocumentSnapshot documentSnapshot) where T : FirestoreDoc
        {
            var obj = documentSnapshot.ConvertTo<T>();

            obj.Id = documentSnapshot.Id;

            return obj;
        }

        public IEnumerable<T> Get<T>(QuerySnapshot querySnapshot) where T : FirestoreDoc
        {
            return querySnapshot.Select(documentSnapshot => Get<T>(documentSnapshot));
        }
    }

    public class FirestoreDoc
    {
        public string Id { get; set; }

        //created, updated, etc
    }

    [FirestoreData]
    public class Process : FirestoreDoc
    {
        Process()
        {

        }

        Process(DocumentSnapshot documentSnapshot)
        {
            this.MemberwiseClone();
        }



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
}
