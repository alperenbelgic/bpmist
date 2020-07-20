using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using bpmist.common.Commands;
using bpmist.common.DataModels.DocumentTypes;
using bpmist.data.ICommands;
using bpmist.firestore.DataModels;
using Google.Cloud.Firestore;

namespace bpmist.firestore.Commands
{
    public partial class GetProcessesQuery
    {
        protected override async Task<GetProcessesResult> ExecuteImplementationAsync(GetProcessesParameter parameter, IContextInformation contextInformation)
        {
            string organizationId = contextInformation.User.OrganizationId;

            var processesSnapshot = await Collections.processes(organizationId).GetSnapshotAsync();

            var processes = FirestoreHelper.Get<Process>(processesSnapshot);

            return
            new GetProcessesResult(
                processes.Select(p => new GetProcesses_ProcessesResult(
                    p.Id,
                    p.ProcessName, 
                    new GetProcesses_Processes_VisualsResult(
                        p.ProcessVisuals.IconColor,
                        p.ProcessVisuals.Initials)
                )).ToArray());
        }

        protected override async Task<IEnumerable<OperationErrorInformation>> ValidateAsync(GetProcessesParameter parameter, IContextInformation contextInformation)
        {
            return Enumerable.Empty<OperationErrorInformation>();
        }
    }




}
