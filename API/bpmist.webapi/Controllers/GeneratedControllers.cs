using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Google.Cloud.Firestore;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using bpmist.common.Commands;

namespace API.Controllers
{
    public class GetProcessesQueryController : BaseController
    {
        private bpmist.data.ICommands.IGetProcessesQuery GetProcessesQuery { get; }

        public GetProcessesQueryController(
            bpmist.data.ICommands.IGetProcessesQuery _GetProcessesQuery)
        {
            this.GetProcessesQuery = _GetProcessesQuery;
        }

        [HttpGet]
        public async Task<CommandResult<bpmist.data.ICommands.GetProcessesResult>> Get(
            
        )
        {
            var contextInfo = this.GetContextInfo();

            return await this.GetProcessesQuery.ExecuteAsync(
                new bpmist.data.ICommands.GetProcessesParameter(
                    
                    ),
                contextInfo
            );
        }
    }
    public class GetTaskInstanceQueryController : BaseController
    {
        private bpmist.common.ICommands.IGetTaskInstanceQuery GetTaskInstanceQuery { get; }

        public GetTaskInstanceQueryController(
            bpmist.common.ICommands.IGetTaskInstanceQuery _GetTaskInstanceQuery)
        {
            this.GetTaskInstanceQuery = _GetTaskInstanceQuery;
        }

        [HttpGet]
        public async Task<CommandResult<bpmist.common.ICommands.GetTaskInstanceResult>> Get(
            
        )
        {
            var contextInfo = this.GetContextInfo();

            return await this.GetTaskInstanceQuery.ExecuteAsync(
                new bpmist.common.ICommands.GetTaskInstanceParameter(
                    
                    ),
                contextInfo
            );
        }
    }
    public class SendUserActionCommandController : BaseController
    {
        private bpmist.common.ICommands.ISendUserActionCommand SendUserActionCommand { get; }

        public SendUserActionCommandController(
            bpmist.common.ICommands.ISendUserActionCommand _SendUserActionCommand)
        {
            this.SendUserActionCommand = _SendUserActionCommand;
        }

        [HttpPost]
        public async Task<CommandResult<bpmist.common.ICommands.SendUserActionResult>> Post(
            SendUserActionControllerParameter _parameter
        )
        {
            var contextInfo = this.GetContextInfo();

            return await this.SendUserActionCommand.ExecuteAsync(
                new bpmist.common.ICommands.SendUserActionParameter(
                    _parameter.ProcessId, _parameter.ProcessInstanceId, _parameter.TaskInstanceId, _parameter.ActionId, _parameter.Notes
                    ),
                contextInfo
            );
        }

         public class SendUserActionControllerParameter
         {
            public string ProcessId { get; set; } 
            public string ProcessInstanceId { get; set; } 
            public string TaskInstanceId { get; set; } 
            public string ActionId { get; set; } 
            public string Notes { get; set; } 
         }



    }
    public class StartNewProcessCommandController : BaseController
    {
        private bpmist.common.ICommands.IStartNewProcessCommand StartNewProcessCommand { get; }

        public StartNewProcessCommandController(
            bpmist.common.ICommands.IStartNewProcessCommand _StartNewProcessCommand)
        {
            this.StartNewProcessCommand = _StartNewProcessCommand;
        }

        [HttpPost]
        public async Task<CommandResult<bpmist.common.ICommands.StartNewProcessResult>> Post(
            StartNewProcessControllerParameter _parameter
        )
        {
            var contextInfo = this.GetContextInfo();

            return await this.StartNewProcessCommand.ExecuteAsync(
                new bpmist.common.ICommands.StartNewProcessParameter(
                    _parameter.ProcessId
                    ),
                contextInfo
            );
        }

         public class StartNewProcessControllerParameter
         {
            public string ProcessId { get; set; } 
         }



    }

}
