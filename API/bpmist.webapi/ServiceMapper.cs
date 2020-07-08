using Microsoft.Extensions.DependencyInjection;

namespace API
{
    public static class BpmistServiceCollectionExtensions
    {
        public static void AddBpmistServices(this IServiceCollection services)
        {
            services.AddTransient<bpmist.data.ICommands.IGetProcessesQuery, bpmist.firestore.Commands.GetProcessesQuery>();
            services.AddTransient<bpmist.data.ICommands.IGetProcessStartTemplateQuery, bpmist.firestore.Commands.GetProcessStartTemplateQuery>();
            services.AddTransient<bpmist.common.ICommands.IStartNewProcessCommand, bpmist.business.Commands.StartNewProcessCommand>();

        }
    }
}