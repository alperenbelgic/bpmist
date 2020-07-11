using bpmist.common.DataModels.DocumentTypes;
using bpmist.common.DataModels.SubDocumentTypes;
using bpmist.data.ICommands;
using Google.Cloud.Firestore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace bpmist.firestore.DataModels
{
    public class Collections
    {

        private static FirestoreDb Db => FirestoreDb.Create(FirestoreHelper.ProjectName);

        //public const string groups = nameof(groups);


        public static CollectionReference globalUsers = Collections.Db.Collection(nameof(globalUsers));

        public static CollectionReference organizations = Collections.Db.Collection(nameof(organizations));
        public static CollectionReference processes(string organizationId) => organizations.Document(organizationId).Collection(nameof(processes));
        public static CollectionReference organizationUsers(string organizationId) => organizations.Document(organizationId).Collection(nameof(organizationUsers));
        public static CollectionReference groups(string organizationId) => organizations.Document(organizationId).Collection(nameof(groups));
        public static CollectionReference processInstances(string organizationId, string processId) => processes(organizationId).Document(processId).Collection(nameof(processInstances));
    }

    public class Documents
    {

        public static DocumentReference process(string organizationId, string processId) => Collections.processes(organizationId).Document(processId);
        public static DocumentReference group(string organizationId, string groupId) => Collections.groups(organizationId).Document(groupId);
        public static DocumentReference organizationUser(string organizationId, string organizationUserId) => Collections.organizationUsers(organizationId).Document(organizationUserId);
        public static DocumentReference organization(string organizationId) => Collections.organizations.Document(organizationId);
        public static DocumentReference processInstance(string organizationId, string processId, string processInstanceId) => Collections.processInstances(organizationId, processId).Document(processInstanceId);
    }
}
