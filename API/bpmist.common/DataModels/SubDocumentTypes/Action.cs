using bpmist.business.common;
using Google.Cloud.Firestore;
using System;
using System.Collections.Generic;
using System.Text;

namespace bpmist.common.DataModels.SubDocumentTypes
{
    [FirestoreData]
    public class Action
    {
        [FirestoreProperty]
        public string ActionName { get; set; }

        [FirestoreProperty]
        public GenericProcessItem NextItem { get; set; }
    }
}
