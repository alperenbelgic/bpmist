using Microsoft.Extensions.DependencyInjection;
using System;

namespace API
{
    public static class ServiceMapper
    {
        public static void AddServices(this IServiceCollection services)
        {
            services.AddTransient<bpmist.common.Javascript.IJavascriptValidator, bpmist.javascript.JavascriptValidator>();
        }
    }
}