using System;
using System.Collections.Generic;
using System.Text;

namespace bpmist.common.DataModels
{
    /// <summary>
    /// This attribute has no functional effect on runtime. It is only for tagging denormalized properties.
    /// </summary>
    public class DenormalizedAttribute : Attribute
    {

        public DenormalizedAttribute(params string[] relatedProperties)
        {
        }
    }
}
