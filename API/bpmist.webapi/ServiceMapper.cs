using Microsoft.Extensions.DependencyInjection;

namespace API
{
    public static class BpmistServiceCollectionExtensions
    {
        public static void AddBpmistServices(this IServiceCollection services)
        {
            services.AddTransient<bpmist.data.ICommands.ICreateProcessInstanceCommand, bpmist.firestore.Commands.CreateProcessInstanceCommand>();
            services.AddTransient<bpmist.data.ICommands.IGetProcessQuery, bpmist.firestore.Commands.GetProcessQuery>();
            services.AddTransient<bpmist.data.ICommands.IGetProcessesQuery, bpmist.firestore.Commands.GetProcessesQuery>();
            services.AddTransient<bpmist.data.ICommands.IGetProcessInstanceQuery, bpmist.firestore.Commands.GetProcessInstanceQuery>();
            services.AddTransient<bpmist.common.ICommands.ISendUserActionCommand, bpmist.business.Commands.SendUserActionCommand>();
            services.AddTransient<bpmist.common.ICommands.IStartNewProcessCommand, bpmist.business.Commands.StartNewProcessCommand>();

        }
    }
}