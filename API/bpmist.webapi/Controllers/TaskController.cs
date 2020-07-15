using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using bpmist.common.DataModels.DocumentTypes;
using bpmist.common.DataModels.SubDocumentTypes;
using bpmist.firestore.DataModels;
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
        public async Task<object> InitializeDb()
        {
            string organizationId = "I8b23jRR3LVAa6ROcqS8";
            // create organization
            await CreateOrganization(organizationId);


            var initialiseUsersAndGroupsResult = await InitialiseUsersAndGroups(organizationId);
            string hrGroupId = initialiseUsersAndGroupsResult.HrGroupId;

            //--Create process here
            await InitialiseProcesses(organizationId, hrGroupId);

            return new { Hodor = "modor" };
        }

        private async Task CreateOrganization(string organizationId)
        {
            await Documents.organization(organizationId).SetAsync(new Organization()
            {
                Name = "Client Aura Tech"
            });
        }

        private async Task InitialiseProcesses(string organizationId, string hrGroupId)
        {

            string secondTaskId = Guid.NewGuid().ToString();
            string thirdTaskId = Guid.NewGuid().ToString();


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
                                        NextItemId = "cancel",
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
                                    AssigningGroupId =  hrGroupId
                                },
                            }
                        };

            string holidayProcessId = "{A34F2DCD-07D2-49EE-A28C-4C5B6084533E}";

            //Documents.process(organizationId, holidayProcessId);

            await
                Documents.process(organizationId, holidayProcessId)
                .SetAsync(
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

        private async Task CreateGroups(string organizationId, string[] hrUserIds, string hrGroupId)
        {

            var group = Documents.group(organizationId, hrGroupId);

            await group
                .SetAsync(new Group()
                {
                    GroupName = "HR",
                    UserIds = hrUserIds
                });
        }

        private async Task<(string HrGroupId, string Temp)> InitialiseUsersAndGroups(string organizationId)
        {
            var usersCollection = Collections.organizationUsers(organizationId);

            string userId = "{9296A486-5D25-4A40-97BA-F67CB6FBBBCC}";
            string managerId = "{208DDB53-FDF0-41C8-A2F1-535E975CED22}";
            string hrUser1 = "{83B203D7-2030-4788-BE40-CB153563A979}";
            string hrUser2 = "{C06960E7-203F-4265-85BA-A0B59863B82D}";

            string hrGroupId = "{44CBC4BF-DBDF-4B43-90F8-123B4242BB34}";


            await usersCollection
                .Document(userId)
                .SetAsync(new OrganizationUser()
                {
                    Email = "alperenbelgic@outlook.com",
                    ManagerId = managerId,
                    UserFullName = "Alperen Belgic"
                });

            await usersCollection
                .Document(managerId)
                .SetAsync(new OrganizationUser()
                {
                    Email = "omar@gmail.com",
                    ManagerId = null,
                    UserFullName = "Omar Little"
                });

            await usersCollection
                .Document(hrUser1)
                .SetAsync(new OrganizationUser()
                {
                    Email = "pelin@gmail.com",
                    ManagerId = null,
                    UserFullName = "Pelin Mezrea",
                    GroupIds = new string[] { hrGroupId }
                }); ;

            await usersCollection
                .Document(hrUser2)
                .SetAsync(new OrganizationUser()
                {
                    Email = "baris@gmail.com",
                    ManagerId = null,
                    UserFullName = "Baris B Belgic",
                    GroupIds = new string[] { hrGroupId }
                });

            await this.CreateGroups(organizationId, new string[] { hrUser1, hrUser2 }, hrGroupId);

            return (hrGroupId, null);
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
