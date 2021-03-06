using System;
using System.Threading.Tasks;
using HelloCoreClrApp.Data;
using HelloCoreClrApp.WebApi.Messages;
using Serilog;

namespace HelloCoreClrApp.WebApi.Actions
{
    public class SayHelloWorldAction : ISayHelloWorldAction
    {
        private static readonly ILogger Log = Serilog.Log.ForContext<SayHelloWorldAction>();
        private readonly IDataService dataService;

        public SayHelloWorldAction(IDataService dataService)
        {
            this.dataService = dataService;
        }

        public async Task<SayHelloWorldResponse> ExecuteAsync(string name)
        {
            Log.Information("Calculating result.");

            Tuple<string, bool> res = Rules.SayHelloWorldRule.Process(name);
            if (res.Item2)
                await SaveGreetingAsync(res.Item1);

            return new SayHelloWorldResponse{Greeting = res.Item1};
        }

        private async Task SaveGreetingAsync(string greeting)
        {
            Log.Information("Save greeting.");
            await dataService.SaveGreetingAsync(greeting);
        }
    }
}
