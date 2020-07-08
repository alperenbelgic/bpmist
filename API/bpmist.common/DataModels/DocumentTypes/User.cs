using Google.Cloud.Firestore;
using System;
using System.Collections.Generic;
using System.Text;

namespace bpmist.common.DataModels.DocumentTypes
{
    [FirestoreData]
    public class User : Document
    {
        [FirestoreProperty]
        public string UserLoginName { get; set; }

        [FirestoreProperty]
        public string UserFullName { get; set; }

    }
}
