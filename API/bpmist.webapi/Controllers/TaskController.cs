using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Google.Cloud.Firestore;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace API.Controllers
{
    public class TaskController : BaseController
    {

        private readonly ILogger<TaskController> _logger;

        public TaskController(ILogger<TaskController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public async Task<object> GetNewProcessTemplate(string processId, int hodor)
        {
            var db = FirestoreDb.Create("bpmistproject");


            DocumentReference docRef = db.Collection("users").Document("alovelace");
            Dictionary<string, object> user = new Dictionary<string, object>
{
    { "First", "Ada" },
    { "Last", "Lovelace" },
    { "Born", 1815 }
};
            await docRef.SetAsync(user);


            return new
            {
                Hodor = "modor"
            };
        }

        [HttpPost]
        public object Save(X param)
        {
            return new
            {
                Hodor = "modor",
                processId = param.processId,
                modor = param.hodor
            };
        }
    }

    public class X
    {
        public string processId { get; set; }
        public int hodor { get; set; }
    }
}
