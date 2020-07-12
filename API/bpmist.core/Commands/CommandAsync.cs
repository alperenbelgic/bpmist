using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace bpmist.common.Commands
{

    public static class ExceptionExtesnion
    {
        public static string GetExceptionMessage(this Exception exception, int index = 0)
        {
            string message = string.Format("{{Index:{0}, Message:{1}, StackTrace:{2} }}", index.ToString(), exception.Message, exception.StackTrace);

            if (exception.InnerException != null)
            {
                message = message + "|" + exception.InnerException.GetExceptionMessage(++index);
            }

            return message;
        }
    }
    public class BusinessError : Exception
    {


        public OperationErrorInformation[] OperationErrors { get; }
        public BusinessError(params OperationErrorInformation[] operationErrors)
        {
            this.OperationErrors = operationErrors;
        }

        public BusinessError(string errorCode, string messageTemplate, params string[] orderedMessageTemplateData)
        {
            this.OperationErrors = new OperationErrorInformation[] {
                new OperationErrorInformation(errorCode, messageTemplate, orderedMessageTemplateData)
            };
        }

        public static BusinessError Combine(params BusinessError[] businessErrors)
        {
            return
            new BusinessError(
            businessErrors.SelectMany(ae => ae.OperationErrors).ToArray()
            );
            
        }
    }

    public class BreakingApplicationError : Exception
    {
        public OperationErrorInformation[] OperationErrors { get; }

        public BreakingApplicationError(params OperationErrorInformation[] operationErrors)
        {
            this.OperationErrors = operationErrors;
        }

        public BreakingApplicationError(string errorCode, string messageTemplate, params string[] orderedMessageTemplateData)
        {
            this.OperationErrors = new OperationErrorInformation[] {
                new OperationErrorInformation(errorCode, messageTemplate, orderedMessageTemplateData)
            };
        }
    }
    public class OperationErrorInformation
    {
        public OperationErrorInformation(string errorCode, string messageTemplate, params string[] orderedMessageTemplateData)
        {
            this.ErrorCode = errorCode;
            this.ErrorMessageTemplate = messageTemplate;
            this.OrderedMessageTemplateData = orderedMessageTemplateData;
        }

        public string ErrorCode { get; }
        public string ErrorMessageTemplate { get; }
        public string ErrorMessage
        {
            get
            {
                string errorMessage = this.ErrorMessageTemplate;
                try
                {
                    errorMessage = string.Format(this.ErrorMessageTemplate, this.OrderedMessageTemplateData);
                }
                catch (Exception) { }
                return errorMessage;
            }
        }
        public string[] OrderedMessageTemplateData { get; }
    }
    public class CommandResult<ResultType>
    {
        public CommandResult(ResultType value, bool successful = true)
        {
            this.Successful = successful;
            this.Value = value;
        }

        public CommandResult(IEnumerable<OperationErrorInformation> operationErrors, Exception exception = null, bool successful = false, bool isBreakingError = false)
        {
            this.Successful = successful;
            this.IsBreakingError = isBreakingError;
            this.OperationErrors = operationErrors;
            this.Exception = exception;
        }

        public ResultType Value { get; }
        public bool Successful { get; }
        public bool IsBreakingError { get; }
        public IEnumerable<OperationErrorInformation> OperationErrors { get; }
        internal Exception Exception { get; private set; }
    }
    public interface IRole
    {
        //string RoleName { get; }

        string RoleCode { get; }
    }

    public interface ITeam
    {
        int TeamId { get; }
        int TeamRoleId { get; }
    }
    public interface IUser
    {
        string UserName { get; }

        IList<IRole> Roles { get; }

        IList<ITeam> Teams { get; }

        string OrganizationId { get; }

        string UserId { get; }
    }

    public interface IContextInformation
    {
        IUser User { get; }

        bool IsBaseCommand(Guid executionId);
        void OnCommandExecuting<T>(string commandName, T parameter, Guid executionId);
        void OnCommandExecuted<T>(string commandName, CommandResult<T> returnValue, Guid executionId);

        void OnCheckPoint(string checkPointIdentifier);
    }

    public interface ICommand<CommandParameter, ReturnType>
    {
        Task<CommandResult<ReturnType>> ExecuteAsync(CommandParameter parameter, IContextInformation contextInformation);
    }

    public interface IQueryAsync<CommandParameter, ReturnType> : ICommand<CommandParameter, ReturnType>
    {

    }


    public abstract class CommandBase<CommandParameter, ReturnType>
        : ICommand<CommandParameter, ReturnType>

    {
        private bool BreakingErrorsHandled = false;

        /// <summary>
        /// Initialize values which can be used both in validation and execute. 
        /// Values are expected to be members of command implementations. 
        /// Commands must not be injected as Singleton-like .
        /// </summary>
        /// <param name="parameter"></param>
        /// <param name="contextInformation"></param>
        /// <returns></returns>
        protected virtual async Task Initialize(CommandParameter parameter, IContextInformation contextInformation)
        {

        }

        protected abstract Task<IEnumerable<OperationErrorInformation>> ValidateAsync(CommandParameter parameter, IContextInformation contextInformation);

        protected abstract Task<ReturnType> ExecuteImplementationAsync(CommandParameter parameter, IContextInformation contextInformation);

        public virtual async Task<CommandResult<ReturnType>> ExecuteAsync(CommandParameter parameter, IContextInformation contextInformation)
        {
            Guid executionId = Guid.NewGuid();
            contextInformation.OnCommandExecuting(this.ToString(), parameter, executionId);
            CommandResult<ReturnType> commandResult = null;

            try
            {
                var operationErrorResults = await ValidateAsync(parameter, contextInformation);

                if (operationErrorResults != null && operationErrorResults.Count() > 0)
                {
                    commandResult = new CommandResult<ReturnType>(operationErrorResults, isBreakingError: false);
                    return commandResult;
                }
                var value = await ExecuteImplementationAsync(parameter, contextInformation);
                commandResult = new CommandResult<ReturnType>(value);

                return commandResult;
            }
            catch (BusinessError applicationError)
            {
                commandResult = new CommandResult<ReturnType>(applicationError.OperationErrors, isBreakingError: false);
                return commandResult;
            }
            catch (BreakingApplicationError breakingApplicationError)
            {
                if (contextInformation.IsBaseCommand(executionId))
                {
                    commandResult = new CommandResult<ReturnType>(breakingApplicationError.OperationErrors, isBreakingError: true);
                    return commandResult;
                }
                else
                {
                    if (this.BreakingErrorsHandled)
                    {
                        commandResult = new CommandResult<ReturnType>(breakingApplicationError.OperationErrors, isBreakingError: true);
                        return commandResult;
                    }
                    else
                    {
                        throw;
                    }
                }
            }
            catch (Exception exception)
            {
                string exceptionMessage = exception.GetExceptionMessage();
                var operationErrorInformation = new OperationErrorInformation("UncaughtSystemError", "An undhandled error occured in the system: " + exceptionMessage);
                if (contextInformation.IsBaseCommand(executionId))
                {
                    commandResult =
                        new Commands.CommandResult<ReturnType>(
                            new List<OperationErrorInformation>() { operationErrorInformation },
                            isBreakingError: true);
                    return commandResult;
                    // return command result with a proper exception information
                }
                else
                {
                    if (this.BreakingErrorsHandled)
                    {
                        commandResult =
                                        new Commands.CommandResult<ReturnType>(
                                                    new List<OperationErrorInformation>() { operationErrorInformation },
                                                    isBreakingError: true);
                        return commandResult;
                    }
                    else
                    {
                        throw;
                    }
                }

            }
            finally
            {
                try
                {
                    contextInformation.OnCommandExecuted(this.ToString(), commandResult, executionId);
                }
                catch (Exception ex)
                {

                }
            }
        }

        public CommandBase<CommandParameter, ReturnType> HandleBreakingError()
        {
            this.BreakingErrorsHandled = true;
            return this;
        }

        protected bool HasFailed<T>(CommandResult<T> commandResult)
        {
            return
                false == commandResult.Successful;
        }

        public override string ToString()
        {
            return this.GetType().Name;
        }
    }


    public abstract class Command<CommandParameter, ReturnType>
        : CommandBase<CommandParameter, ReturnType>, ICommand<CommandParameter, ReturnType>
    {
        public override async Task<CommandResult<ReturnType>> ExecuteAsync(CommandParameter parameter, IContextInformation contextInformation)
        {
            var commandResult = await base.ExecuteAsync(parameter, contextInformation);

            // todo: find a way to call this inparallel, without using original contextinformation, because execution info lists are not working
            await this.RunAfterCommandExecuted(parameter, commandResult, contextInformation);

            return commandResult;
        }

        protected virtual async Task RunAfterCommandExecuted(CommandParameter parameter, Commands.CommandResult<ReturnType> commandResult, IContextInformation contextInformation)
        {

        }

    }

    public abstract class QueryAsync<ReturnType, CommandParameter> : CommandBase<ReturnType, CommandParameter>
    {

    }

    public abstract class CachedQueryAsync<ReturnType, CommandParameter> : QueryAsync<ReturnType, CommandParameter>
        where CommandParameter : ICachedParameter
    {

    }

    public interface ICachedParameter
    {
        string CacheKey();
    }
}


//public class OnTheFlyCommandAsync<CommandParameter, ReturnType> : Command<CommandParameter, ReturnType>
//{
//    private readonly Func<CommandParameter, IContextInformation, Task<ReturnType>> CommandImplementationAsync;
//    private readonly string CommandName;
//    private readonly Func<CommandParameter, IContextInformation, Task<IEnumerable<OperationErrorInformation>>> ValidationImplementationAsync;
//    private readonly Func<CommandParameter, CommandResult<ReturnType>, IContextInformation, Task> RunAfterCommandExecutedImplementation;

//    public OnTheFlyCommandAsync(
//        string commandName,
//          Func<CommandParameter, IContextInformation, Task<ReturnType>> commandImplementation,
//        Func<CommandParameter, IContextInformation, Task<IEnumerable<OperationErrorInformation>>> validationImplementation = null,
//        Func<CommandParameter, CommandResult<ReturnType>, IContextInformation, Task> runAfterCommandExecutedImplementation = null
//        )
//    {
//        this.CommandName = commandName;
//        this.CommandImplementationAsync = commandImplementation;
//        this.ValidationImplementationAsync = validationImplementation;
//        this.RunAfterCommandExecutedImplementation = runAfterCommandExecutedImplementation;
//    }

//    public override string ToString()
//    {
//        return this.CommandName;
//    }
//    protected override async Task<ReturnType> ExecuteImplementationAsync(CommandParameter parameter, IContextInformation contextInformation)
//    {
//        return await this.CommandImplementationAsync(parameter, contextInformation);
//    }

//    protected override async Task<IEnumerable<OperationErrorInformation>> ValidateAsync(CommandParameter parameter, IContextInformation contextInformation)
//    {
//        if (this.ValidationImplementationAsync == null)
//        {
//            return new List<OperationErrorInformation>();
//        }

//        return await this.ValidationImplementationAsync(parameter, contextInformation);
//    }

//    protected override async Task RunAfterCommandExecuted(CommandParameter parameter, CommandResult<ReturnType> commandResult, IContextInformation contextInformation)
//    {
//        if (this.RunAfterCommandExecutedImplementation != null)
//        {
//            await this.RunAfterCommandExecutedImplementation(parameter, commandResult, contextInformation);
//        }
//        else
//        {
//            // ??
//        }
//    }

//    public async Task<IEnumerable<OperationErrorInformation>> ValidateAsyncPublic(CommandParameter parameter, IContextInformation contextInformation)
//    {
//        return await this.ValidateAsync(parameter, contextInformation);
//    }

//}