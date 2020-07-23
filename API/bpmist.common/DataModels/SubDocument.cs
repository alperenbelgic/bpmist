using Google.Cloud.Firestore;
using System;
using System.Collections.Generic;
using System.Text;

namespace bpmist.common.DataModels
{

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

        [FirestoreProperty]
        public string Id { get; set; }
    }
}
