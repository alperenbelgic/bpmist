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

        public string OrganizationId => "I8b23jRR3LVAa6ROcqS8";

        //9296A486-5D25-4A40-97BA-F67CB6FBBBCC // alperen
        //208DDB53-FDF0-41C8-A2F1-535E975CED22 //omer
        //83B203D7-2030-4788-BE40-CB153563A979 //pelin
        //C06960E7-203F-4265-85BA-A0B59863B82D //baris
        public string UserId => "C06960E7-203F-4265-85BA-A0B59863B82D";

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
