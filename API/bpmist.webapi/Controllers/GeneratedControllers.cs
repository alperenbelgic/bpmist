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
    public class GetProcessStartTemplateQueryController : BaseController
    {
        private bpmist.data.ICommands.IGetProcessStartTemplateQuery GetProcessStartTemplateQuery { get; }

        public GetProcessStartTemplateQueryController(
            bpmist.data.ICommands.IGetProcessStartTemplateQuery _GetProcessStartTemplateQuery)
        {
            this.GetProcessStartTemplateQuery = _GetProcessStartTemplateQuery;
        }

        [HttpGet]
        public async Task<CommandResult<bpmist.data.ICommands.GetProcessStartTemplateQueryResult>> Get(
            string ProcessId
        )
        {
            var contextInfo = this.GetContextInfo();

            return await this.GetProcessStartTemplateQuery.ExecuteAsync(
                new bpmist.data.ICommands.GetProcessStartTemplateQueryParameter(
                    ProcessId
                    ),
                contextInfo
            );
        }
    }

}
