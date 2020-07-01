using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
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
        public object GetNewProcess(string processId, int hodor)
        {
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
                processId = param.processId2,
                modor = param.hodor2
            };
        }
    }

    public class X
    {
        public X(string processId, int hodor)
        {
            this.processId2 = processId;
            this.hodor2 = hodor;
        }

        public string processId2 { get; set; }
        public int hodor2 { get; set; }
    }
}
