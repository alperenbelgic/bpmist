using bpmist.business.common;
using System;
using System.Collections.Generic;
using System.Text;

namespace bpmist.common.DataModels.SubDocumentTypes
{
    public class Condition : SubDocument
    {
        public object ConditionExpression { get; set; }

        public GenericProcessItem NextItem { get; set; }
    }
}
