using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using bpmist.common.Commands;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public abstract class BaseController : ControllerBase
    {
        protected virtual IContextInformation GetContextInfo()
        {
            throw new NotImplementedException();
            // return this.ContextProvider.GetContextInformation(this.GetCurrentUser());
        }

        protected virtual IUser GetCurrentUser(string authorizationKey = null)
        {
            throw new NotImplementedException();
            // IUser user;
            // if (authorizationKey == null)
            // {
            //     user = this.AuthService.GetUser(this.Request.Headers.GetValues("Authorization").First());
            // }
            // else
            // {
            //     user =
            //     this.AuthService.GetUser(authorizationKey);
            // }

            // return user;
        }
    }

}
