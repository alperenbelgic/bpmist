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
            return new DefaultContextInformation();
            // throw new NotImplementedException();
            // return this.ContextProvider.GetContextInformation(this.GetCurrentUser());
        }

        protected virtual IUser GetCurrentUser(string authorizationKey = null)
        {
            return new DefaultUser();
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

    public class DefaultUser : IUser
    {
        public string UserName => "user_name";

        public IList<IRole> Roles => throw new NotImplementedException();

        public IList<ITeam> Teams => throw new NotImplementedException();

        public string TenantId => "tenant_id";

        public string UserId => "user_id";
    }

    public class DefaultContextInformation : IContextInformation
    {
        public IUser User => new DefaultUser();

        public bool IsBaseCommand(Guid executionId)
        {
            return false;
        }

        public void OnCheckPoint(string checkPointIdentifier)
        {

        }

        public void OnCommandExecuted<T>(string commandName, CommandResult<T> returnValue, Guid executionId)
        {

        }

        public void OnCommandExecuting<T>(string commandName, T parameter, Guid executionId)
        {

        }
    }

}
