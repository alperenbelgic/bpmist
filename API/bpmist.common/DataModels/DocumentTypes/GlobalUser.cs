using Google.Cloud.Firestore;
using System;
using System.Collections.Generic;
using System.Text;

namespace bpmist.common.DataModels.DocumentTypes
{
    [FirestoreData]
    public class GlobalUser : Document
    {
        [FirestoreProperty]
        public string UserLoginName { get; set; } // usually email address

        [FirestoreProperty]
        public string PasswordSalt { get; set; } = Guid.NewGuid().ToString(); // will be overridden when loaded from db

        [FirestoreProperty]
        public string HashedPassword { get; set; }

        [FirestoreProperty]
        public string OrganisationId { get; set; }

    }
}
