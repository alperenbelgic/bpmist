﻿using bpmist.common.DataModels.SubDocumentTypes;
using Google.Cloud.Firestore;
using System;
using System.Collections.Generic;
using System.Text;

namespace bpmist.common.DataModels.DocumentTypes
{
    [FirestoreData]
    public class OrganizationUser : Document
    {
        [FirestoreProperty] public string Email { get; set; }
        [FirestoreProperty] public string UserFullName { get; set; }
        [FirestoreProperty] public DenormalizedTaskInstance[] Tasks { get; set; } = new DenormalizedTaskInstance[0];
        [FirestoreProperty] public string ManagerId { get; set; }
        [Denormalized(nameof(Group.UserIds))] [FirestoreProperty] public string[] GroupIds { get; set; } = new string[0];
    }
}
