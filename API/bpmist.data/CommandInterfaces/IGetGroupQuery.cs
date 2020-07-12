using System;
using bpmist.common.Commands;

namespace bpmist.data.ICommands
{
    public interface IGetGroupQuery : ICommand<GetGroupParameter, GetGroupResult>
    {
    }

    public class GetGroupParameter
    {
        public GetGroupParameter(
            string GroupId
            )
        {
            this.GroupId = GroupId;
        }

        public string GroupId { get; } 
    }

public class GetGroupResult
{
    public GetGroupResult(bpmist.common.DataModels.DocumentTypes.Group Group)
    {
            this.Group = Group;
    }

        public bpmist.common.DataModels.DocumentTypes.Group Group { get; } 
}


}
