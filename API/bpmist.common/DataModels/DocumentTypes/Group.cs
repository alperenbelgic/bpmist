using bpmist.common.DataModels.SubDocumentTypes;
using Google.Cloud.Firestore;
using System;
using System.Collections.Generic;
using System.Text;

namespace bpmist.common.DataModels.DocumentTypes
{
    [FirestoreData]
    public class Group : Document
    {
        [FirestoreProperty] public string GroupName { get; set; }
        [Denormalized(nameof(OrganizationUser.GroupIds))] [FirestoreProperty] public string[] UserIds { get; set; } = new string[0];

        // Analysis: 
        // why do I use like below
        // alternatives: 
        // array map with details (hard to update, data will cumulate in group doc)
        // sub collection: not necessary reads? 
        // this: overhead: the format should be satisfied on read and write, another read will be done in process instances
        // of course can be changed later. 
        [Denormalized] [FirestoreProperty] public string[] ActiveTaskInstancePaths { get; set; } = new string[0]; // task instance path under organization processId/processInstanceId_taskInstanceId
        [Denormalized] [FirestoreProperty] public string[] ActiveTaskInstancePathsAssignedToUsers { get; set; } = new string[0]; // task instance path under organization processId/processInstanceId_taskInstanceId
    }
}
