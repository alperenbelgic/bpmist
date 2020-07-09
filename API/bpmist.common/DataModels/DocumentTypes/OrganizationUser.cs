using bpmist.common.DataModels.SubDocumentTypes;
using Google.Cloud.Firestore;
using System;
using System.Collections.Generic;
using System.Text;

namespace bpmist.common.DataModels.DocumentTypes
{
    [FirestoreData]
    public class OrganizationUser : Document
    {
        [FirestoreProperty] public string Email { get; set; } // usually email address
        [FirestoreProperty] public string UserFullName { get; set; } 
        [FirestoreProperty] public UserTask[] Tasks { get; set; } 

    }
}
