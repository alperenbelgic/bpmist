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
    public class GetProcessStartTemplateQueryController : BaseController
    {
        private bpmist.data.ICommands.IGetProcessStartTemplateQuery GetProcessStartTemplateQuery { get; }

        public GetProcessStartTemplateQueryController(
            bpmist.data.ICommands.IGetProcessStartTemplateQuery _GetProcessStartTemplateQuery)
        {
            this.GetProcessStartTemplateQuery = _GetProcessStartTemplateQuery;
        }

        [HttpGet]
        public async Task<CommandResult<bpmist.data.ICommands.GetProcessStartTemplateResult>> Get(
            string ProcessId
        )
        {
            var contextInfo = this.GetContextInfo();

            return await this.GetProcessStartTemplateQuery.ExecuteAsync(
                new bpmist.data.ICommands.GetProcessStartTemplateParameter(
                    ProcessId
                    ),
                contextInfo
            );
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
