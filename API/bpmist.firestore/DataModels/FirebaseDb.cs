using bpmist.business.common;
using bpmist.common.DataModels;
using Google.Cloud.Firestore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

// I keep losing this addres:
// https://googleapis.github.io/google-cloud-dotnet/docs/Google.Cloud.Firestore/datamodel.html

// temp link: storage upload: https://github.com/googleapis/google-cloud-dotnet/blob/master/apis/Google.Cloud.Storage.V1/Google.Cloud.Storage.V1.IntegrationTests/UploadObjectTest.cs

namespace bpmist.firestore.DataModels
{
    public class FirestoreHelper
    {
        public T Get<T>(DocumentSnapshot documentSnapshot) where T : Document
        {
            var obj = documentSnapshot.ConvertTo<T>();
            return obj;
        }

        public IEnumerable<T> Get<T>(QuerySnapshot querySnapshot) where T : Document
        {
            return querySnapshot.Select(documentSnapshot => Get<T>(documentSnapshot));
        }
    }
}
