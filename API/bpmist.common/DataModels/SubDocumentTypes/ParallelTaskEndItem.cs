using bpmist.business.common;
using bpmist.common.DataModels.DocumentTypes;
using System;
using System.Collections.Generic;
using System.Text;

namespace bpmist.common.DataModels.SubDocumentTypes
{
    public class ParallelTaskEndItem : SubDocument
    {
        public string ParallelTaskStartItemId { get; set; }


    }
}
