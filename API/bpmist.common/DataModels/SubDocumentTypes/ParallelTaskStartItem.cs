using bpmist.business.common;
using System;
using System.Collections.Generic;
using System.Text;

namespace bpmist.common.DataModels.SubDocumentTypes
{
    public class ParallelTaskStartItem : SubDocument
    {
        public GenericProcessItem[] StartingItems { get; set; }

        public string ParallelTaskEndItemId { get; set; }
    }
}
