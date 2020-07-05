using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using bpmist.common.Commands;
using bpmist.data.ICommands;
using bpmist.firestore.DataModels;
using Google.Cloud.Firestore;

namespace bpmist.firestore.Commands
{
    public partial class GetProcessesQuery
    {
        protected override async Task<GetProcessesResult> ExecuteImplementationAsync(GetProcessesParameter parameter, IContextInformation contextInformation)
        {
            var processesSnapshot =
                await
                FirestoreDb
                .Create("bpmistproject")
                .Collection("organisations")
                .Document("I8b23jRR3LVAa6ROcqS8")
                .Collection("processes")
                .GetSnapshotAsync();

            var processes = new FirestoreHelper().Get<Process>(processesSnapshot);

            return
            new GetProcessesResult(
                processes.Select(p => new GetProcesses_ProcessesResult(
                    p.ProcessName,
                    p.Tasks.Select(t => new GetProcesses_Processes_TasksResult(t.TaskId, t.TaskName)).ToArray()
                )).ToArray());
        }

        protected override async Task<IEnumerable<OperationErrorInformation>> ValidateAsync(GetProcessesParameter parameter, IContextInformation contextInformation)
        {
            return Enumerable.Empty<OperationErrorInformation>();
        }
    }




}
