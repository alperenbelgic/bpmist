﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using bpmist.common.DataModels.DocumentTypes;
using bpmist.common.DataModels.SubDocumentTypes;
using bpmist.firestore.DataModels;
using Google.Cloud.Firestore;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Localization.Internal;
using Microsoft.Extensions.Logging;

namespace API.Controllers
{
    public class TempController : BaseController
    {

        private readonly ILogger<TempController> _logger;

        public TempController(ILogger<TempController> logger)
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
            string financeGroupId = initialiseUsersAndGroupsResult.FinanceGroupId;

            //--Create process here
            await InitialiseProcesses(organizationId, hrGroupId, financeGroupId);

            return new { Hodor = "modor" };
        }

        [HttpGet]
        public string Hello()
        {
            return "what's up?";
        }

        private async Task CreateOrganization(string organizationId)
        {
            await Documents.organization(organizationId).SetAsync(new Organization()
            {
                Name = "Client Aura Tech"
            });
        }

        private async Task InitialiseProcesses(string organizationId, string hrGroupId, string financeGroupId)
        {

            await this.CreateLeaveRequestProcess(organizationId, hrGroupId);

            await this.CreateExpenseRequestProcess(organizationId, financeGroupId);
        }

        private async Task CreateExpenseRequestProcess(string organizationId, string financeGroupId)
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
                                        ActionText = "Submit",
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
                                    new ActionModel
                                    {
                                        ActionText = "Save",
                                        NextItemId = "save",
                                        ActionType = ActionTypes.Secondary
                                    },
                                },
                                AssigningConfiguration = new AssigningConfiguration
                                {
                                    AssigningRule = new AssigningRule()
                                    {
                                        AssignToManager = true
                                    }
                                },
                                DueDateConfiguration = new DueDateConfiguration()
                                {
                                    DueDay = 2
                                }
                            },
                            new TaskModel
                            {
                                Id = thirdTaskId,
                                TaskName = "Finance Confirmation",
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
                                    AssigningGroupId =  financeGroupId
                                },
                                DueDateConfiguration = new DueDateConfiguration()
                                {
                                    DueDay = 1
                                }
                            }
                        };

            string leaveRequestProcessId = "B2A5B393-8B96-4FC5-B22A-AA16C8128425";

            await
                Documents.process(organizationId, leaveRequestProcessId)
                .SetAsync(
                            new Process()
                            {
                                ProcessName = "Expense Request",
                                VersionedProcessModels = new ProcessModel[]
                                {
                                        new ProcessModel() { Tasks = tasks }
                                },
                                ProcessVisuals = new ProcessVisuals()
                                {
                                    IconColor = "#C38D9E",
                                    Initials = "ER"
                                }
                            }
                        );
        }

        private async Task CreateLeaveRequestProcess(string organizationId, string hrGroupId)
        {
            string secondTaskId = Guid.NewGuid().ToString();
            string thirdTaskId = Guid.NewGuid().ToString();

            // setting static ids for fields for keeping custom javascript runs
            string startFieldId = "{A0A3DC51-67A3-4B9B-88CB-067376940DE2}";
            string endFieldId = "{55A7B3A6-9D58-421A-B323-47DED5D09797}";
            string notesId = "{D6B0F4E4-B037-4A85-8DAE-F40DACDD117F}";

            var startField = new ProcessField()
            {
                FieldName = "Start Date",
                FieldType = FieldTypes.Date,
                Id = startFieldId
            };

            var endField = new ProcessField()
            {
                FieldName = "End Date",
                FieldType = FieldTypes.Date,
                Id = endFieldId
            };

            var notesField = new ProcessField()
            {
                FieldName = "Notes",
                FieldType = FieldTypes.Text,
                Id = notesId
            };

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
                                TaskFormModel = new TaskFormModel
                                {
                                    Fields = new FieldInTask[]
                                    {
                                        new FieldInTask
                                        {
                                            Id = startField.Id,
                                            Editable = true,
                                            Validation = new FieldInTaskValidation()
                                            {
                                                
                                            }
                                        },
                                        new FieldInTask
                                        {
                                            Id = endField.Id,
                                            Editable = true,
                                            Validation = new FieldInTaskValidation()
                                            {
                                                IsRequired  = true
                                            }
                                        },
                                    },
                                    CustomValidationDefinition = new CustomValidationDefinition()
                                    {
                                            HasCustomValidation = true,
                                            CustomCodeContent = $@"
function validate(getValue) {{ 	
	var startDate = getValue('Start Date', '{startFieldId}');	
	var endDate = getValue('End Date', '{endFieldId}');		

	return endDate > startDate;
    /* or return 'Start Date must be before End Date' if values satisfy.*/
}}
",
                                            ValidationErrorMessage = "End Date must be later than Start Date"

                                    }
                                }
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
                                TaskFormModel=   new TaskFormModel
                                {
                                    Fields = new FieldInTask[]
                                    {
                                        new FieldInTask
                                        {
                                            Id = startField.Id,
                                            Editable = false
                                        },
                                        new FieldInTask
                                        {
                                            Id = endField.Id,
                                            Editable = false
                                        },
                                        new FieldInTask
                                        {
                                            Id = notesField.Id,
                                            Editable = true
                                        },
                                    }
                                },
                                AssigningConfiguration = new AssigningConfiguration
                                {
                                    AssigningRule = new AssigningRule()
                                    {
                                        AssignToManager = true
                                    }
                                },
                                DueDateConfiguration = new DueDateConfiguration()
                                {
                                    DueDay = 2
                                }
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
                                TaskFormModel=   new TaskFormModel
                                {
                                    Fields = new FieldInTask[]
                                    {
                                        new FieldInTask
                                        {
                                            Id = startField.Id,
                                            Editable = false
                                        },
                                        new FieldInTask
                                        {
                                            Id = endField.Id,
                                            Editable = false
                                        },
                                        new FieldInTask
                                        {
                                            Id = notesField.Id,
                                            Editable = false
                                        },
                                    }
                                },
                                AssigningConfiguration = new AssigningConfiguration
                                {
                                    AssigningGroupId =  hrGroupId
                                },
                                DueDateConfiguration = new DueDateConfiguration()
                                {
                                    DueDay = 1
                                }
                            }
                        };

            string leaveRequestProcessId = "A34F2DCD-07D2-49EE-A28C-4C5B6084533E";

            await
                Documents.process(organizationId, leaveRequestProcessId)
                    .SetAsync(
                                new Process()
                                {
                                    ProcessName = "Leave Request",
                                    VersionedProcessModels = new ProcessModel[]
                                    {
                                        new ProcessModel()
                                        {
                                            Tasks = tasks,
                                            ProcessFields = new ProcessField[]
                                            {
                                                startField,
                                                endField,
                                                notesField
                                            }
                                        }
                                    },
                                    ProcessVisuals = new ProcessVisuals()
                                    {
                                        IconColor = "goldenrod",
                                        Initials = "LR"
                                    }
                                }
                            );
        }

        private async Task CreateGroups(string organizationId, string[] hrUserIds, string hrGroupId, string[] financeUserIds, string financeGroupId)
        {

            var group = Documents.group(organizationId, hrGroupId);

            await group
                .SetAsync(new Group()
                {
                    GroupName = "HR",
                    UserIds = hrUserIds
                });

            var financeGroup = Documents.group(organizationId, financeGroupId);

            await financeGroup
                .SetAsync(new Group()
                {
                    GroupName = "Finance",
                    UserIds = financeUserIds
                });
        }

        private async Task<(string HrGroupId, string FinanceGroupId)> InitialiseUsersAndGroups(string organizationId)
        {
            var usersCollection = Collections.organizationUsers(organizationId);

            string alperen = "9296A486-5D25-4A40-97BA-F67CB6FBBBCC";
            string omer = "208DDB53-FDF0-41C8-A2F1-535E975CED22";
            string baris = "83B203D7-2030-4788-BE40-CB153563A979";
            string pelin = "C06960E7-203F-4265-85BA-A0B59863B82D";

            string hrGroupId = "44CBC4BF-DBDF-4B43-90F8-123B4242BB34";
            string financeGroupId = "AEF717FA-EC23-4708-B2D3-5BADB54EFD70";


            await usersCollection
                .Document(alperen)
                .SetAsync(new OrganizationUser()
                {
                    Email = "alperenbelgic@outlook.com",
                    ManagerId = omer,
                    UserFullName = "Alperen Belgic",
                    GroupIds = new string[] { hrGroupId }
                });

            await usersCollection
                .Document(omer)
                .SetAsync(new OrganizationUser()
                {
                    Email = "omar@gmail.com",
                    ManagerId = null,
                    UserFullName = "Omar Little",
                    GroupIds = new string[] { hrGroupId }
                });

            await usersCollection
                .Document(pelin)
                .SetAsync(new OrganizationUser()
                {
                    Email = "pelin@gmail.com",
                    ManagerId = null,
                    UserFullName = "Pelin Mezrea",
                    GroupIds = new string[] { financeGroupId }
                }); ;

            await usersCollection
                .Document(baris)
                .SetAsync(new OrganizationUser()
                {
                    Email = "baris@gmail.com",
                    ManagerId = pelin,
                    UserFullName = "Baris B Belgic",
                    GroupIds = new string[] { financeGroupId }
                });

            await this.CreateGroups(organizationId, new string[] { alperen, omer }, hrGroupId, new string[] { pelin, baris }, financeGroupId);

            return (hrGroupId, financeGroupId);
        }
    }
}
