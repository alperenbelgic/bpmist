using System;
using bpmist.common.Commands;

namespace bpmist.data.ICommands
{
    public interface ISaveGroupCommand : ICommand<SaveGroupParameter, SaveGroupResult>
    {
    }

    public class SaveGroupParameter
    {
        public SaveGroupParameter(
            bpmist.common.DataModels.DocumentTypes.Group Group
            )
        {
            this.Group = Group;
        }

        public bpmist.common.DataModels.DocumentTypes.Group Group { get; } 
    }

public class SaveGroupResult
{
    public SaveGroupResult()
    {

    }


}


}
