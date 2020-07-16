using Microsoft.Extensions.DependencyInjection;

namespace API
{
    public static class BpmistServiceCollectionExtensions
    {
        public static void AddBpmistServices(this IServiceCollection services)
        {
            services.AddTransient<bpmist.data.ICommands.IGetGroupQuery, bpmist.firestore.Commands.GetGroupQuery>();
            services.AddTransient<bpmist.data.ICommands.IGetOrganizationUserQuery, bpmist.firestore.Commands.GetOrganizationUserQuery>();
            services.AddTransient<bpmist.data.ICommands.IGetProcessQuery, bpmist.firestore.Commands.GetProcessQuery>();
            services.AddTransient<bpmist.data.ICommands.IGetProcessesQuery, bpmist.firestore.Commands.GetProcessesQuery>();
            services.AddTransient<bpmist.data.ICommands.IGetProcessInstanceQuery, bpmist.firestore.Commands.GetProcessInstanceQuery>();
            services.AddTransient<bpmist.common.ICommands.IGetTaskInstanceQuery, bpmist.business.Commands.GetTaskInstanceQuery>();
            services.AddTransient<bpmist.common.ICommands.IPullTaskFromGroupCommand, bpmist.business.Commands.PullTaskFromGroupCommand>();
            services.AddTransient<bpmist.data.ICommands.ISaveGroupCommand, bpmist.firestore.Commands.SaveGroupCommand>();
            services.AddTransient<bpmist.data.ICommands.ISaveOrganizationUserCommand, bpmist.firestore.Commands.SaveOrganizationUserCommand>();
            services.AddTransient<bpmist.data.ICommands.ISaveProcessInstanceCommand, bpmist.firestore.Commands.SaveProcessInstanceCommand>();
            services.AddTransient<bpmist.common.ICommands.ISendUserActionCommand, bpmist.business.Commands.SendUserActionCommand>();
            services.AddTransient<bpmist.common.ICommands.IStartNewProcessCommand, bpmist.business.Commands.StartNewProcessCommand>();

        }
    }
}