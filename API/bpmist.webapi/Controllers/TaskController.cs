using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using bpmist.common.DataModels.DocumentTypes;
using bpmist.common.DataModels.SubDocumentTypes;
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

            string secondTaskId = Guid.NewGuid().ToString();
            string thirdTaskId = Guid.NewGuid().ToString();

            string hrGroupId = "hr_group_id";

            if (true)
            {

                var tasks =
                    new TaskModel[]
                    {
                            new TaskModel
                            {
                                TaskName = "Request Entry",
                                Actions=new ActionModel[]
                                {
                                    new ActionModel
                                    {
                                        ActionText = "Complete",
                                        NextItemId = secondTaskId,
                                    }
                                },

                            },
                            new TaskModel
                            {
                                Id = secondTaskId,
                                TaskName = "Approval",
                                Actions = new ActionModel[]{
                                    new ActionModel
                                    {
                                        ActionText = "Approve",
                                        NextItemId = thirdTaskId,
                                    },
                                    new ActionModel
                                    {
                                        ActionText = "Reject",
                                        NextItemId = null,
                                        ActionType = ActionTypes.Warned
                                    },

                                },
                                AssigningConfiguration = new AssigningConfiguration
                                {
                                    AssigningRule = new AssigningRule()
                                    {
                                        AssignToManager = true
                                    }
                                },
                            },
                            new TaskModel
                            {
                                Id = thirdTaskId,
                                TaskName = "HR Confirmation",
                                Actions = new ActionModel[]
                                {
                                    new ActionModel
                                    {
                                        ActionText = "Confirm",
                                        NextItemId = null
                                    }
                                },
                                AssigningConfiguration = new AssigningConfiguration
                                {
                                    AssignableGroupId =  hrGroupId
                                },
                            }
                    };


                await
                    FirestoreDb
                    .Create("bpmistproject")
                    .Collection("organisations")
                    .Document("I8b23jRR3LVAa6ROcqS8")
                    .Collection("processes")
                    .AddAsync(
                                new Process()
                                {
                                    ProcessName = "Holiday Request",
                                    VersionedProcessModels = new ProcessModel[]
                                    {
                                        new ProcessModel() { Tasks = tasks }
                                    }
                                }
                            );
            }



            //            var db = FirestoreDb.Create("bpmistproject");


            //            DocumentReference docRef = db.Collection("users").Document("alovelace");
            //            Dictionary<string, object> user = new Dictionary<string, object>
            //{
            //    { "First", "Ada" },
            //    { "Last", "Lovelace" },
            //    { "Born", 1815 }
            //};
            //            await docRef.SetAsync(user);


            return new
            {
                Hodor = "modor"
            };
        }

        [HttpPost]
        public object Test(X param)
        {
            return param;
        }
    }

    public class X
    {
        public Dictionary<string, object> theObject { get; set; }
    }
}
