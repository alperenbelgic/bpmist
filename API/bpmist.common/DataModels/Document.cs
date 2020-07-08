using Google.Cloud.Firestore;
using System;
using System.Collections.Generic;
using System.Text;

namespace bpmist.common.DataModels
{
    [FirestoreData]
    public abstract class Document
    {
        [FirestoreDocumentId]
        public string Id { get; set; }

        //created, updated, etc
    }
}
