using Microsoft.Extensions.DependencyInjection;
using System;

namespace API
{
    public static class BpmistServiceCollectionExtensions
    {
        public static void AddBpmistServices(this IServiceCollection services)
        {
            services.AddTransient<bpmist.data.ICommands.IGetGroupQuery, bpmist.firestore.Commands.GetGroupQuery>();
            services.AddSingleton<Func<bpmist.data.ICommands.IGetGroupQuery>>(x => () => x.GetService<bpmist.data.ICommands.IGetGroupQuery>());

            services.AddTransient<bpmist.data.ICommands.IGetOrganizationUserQuery, bpmist.firestore.Commands.GetOrganizationUserQuery>();
            services.AddSingleton<Func<bpmist.data.ICommands.IGetOrganizationUserQuery>>(x => () => x.GetService<bpmist.data.ICommands.IGetOrganizationUserQuery>());

            services.AddTransient<bpmist.data.ICommands.IGetProcessQuery, bpmist.firestore.Commands.GetProcessQuery>();
            services.AddSingleton<Func<bpmist.data.ICommands.IGetProcessQuery>>(x => () => x.GetService<bpmist.data.ICommands.IGetProcessQuery>());

            services.AddTransient<bpmist.data.ICommands.IGetProcessesQuery, bpmist.firestore.Commands.GetProcessesQuery>();
            services.AddSingleton<Func<bpmist.data.ICommands.IGetProcessesQuery>>(x => () => x.GetService<bpmist.data.ICommands.IGetProcessesQuery>());

            services.AddTransient<bpmist.data.ICommands.IGetProcessInstanceQuery, bpmist.firestore.Commands.GetProcessInstanceQuery>();
            services.AddSingleton<Func<bpmist.data.ICommands.IGetProcessInstanceQuery>>(x => () => x.GetService<bpmist.data.ICommands.IGetProcessInstanceQuery>());

            services.AddTransient<bpmist.common.ICommands.IGetTaskInstanceQuery, bpmist.business.Commands.GetTaskInstanceQuery>();
            services.AddSingleton<Func<bpmist.common.ICommands.IGetTaskInstanceQuery>>(x => () => x.GetService<bpmist.common.ICommands.IGetTaskInstanceQuery>());

            services.AddTransient<bpmist.common.ICommands.IGetUserTaskInstancesQuery, bpmist.business.Commands.GetUserTaskInstancesQuery>();
            services.AddSingleton<Func<bpmist.common.ICommands.IGetUserTaskInstancesQuery>>(x => () => x.GetService<bpmist.common.ICommands.IGetUserTaskInstancesQuery>());

            services.AddTransient<bpmist.common.ICommands.IPullTaskFromGroupCommand, bpmist.business.Commands.PullTaskFromGroupCommand>();
            services.AddSingleton<Func<bpmist.common.ICommands.IPullTaskFromGroupCommand>>(x => () => x.GetService<bpmist.common.ICommands.IPullTaskFromGroupCommand>());

            services.AddTransient<bpmist.data.ICommands.ISaveGroupCommand, bpmist.firestore.Commands.SaveGroupCommand>();
            services.AddSingleton<Func<bpmist.data.ICommands.ISaveGroupCommand>>(x => () => x.GetService<bpmist.data.ICommands.ISaveGroupCommand>());

            services.AddTransient<bpmist.data.ICommands.ISaveOrganizationUserCommand, bpmist.firestore.Commands.SaveOrganizationUserCommand>();
            services.AddSingleton<Func<bpmist.data.ICommands.ISaveOrganizationUserCommand>>(x => () => x.GetService<bpmist.data.ICommands.ISaveOrganizationUserCommand>());

            services.AddTransient<bpmist.data.ICommands.ISaveProcessInstanceCommand, bpmist.firestore.Commands.SaveProcessInstanceCommand>();
            services.AddSingleton<Func<bpmist.data.ICommands.ISaveProcessInstanceCommand>>(x => () => x.GetService<bpmist.data.ICommands.ISaveProcessInstanceCommand>());

            services.AddTransient<bpmist.common.ICommands.ISendUserActionCommand, bpmist.business.Commands.SendUserActionCommand>();
            services.AddSingleton<Func<bpmist.common.ICommands.ISendUserActionCommand>>(x => () => x.GetService<bpmist.common.ICommands.ISendUserActionCommand>());

            services.AddTransient<bpmist.common.ICommands.IStartNewProcessCommand, bpmist.business.Commands.StartNewProcessCommand>();
            services.AddSingleton<Func<bpmist.common.ICommands.IStartNewProcessCommand>>(x => () => x.GetService<bpmist.common.ICommands.IStartNewProcessCommand>());


        }
    }
}