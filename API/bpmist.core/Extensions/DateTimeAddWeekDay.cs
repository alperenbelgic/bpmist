using System;
using System.Collections.Generic;
using System.Runtime.CompilerServices;
using System.Text;

namespace System
{
    public static class DateTimeAddWeekDay
    {
        public static DateTime AddWeekday(this DateTime dateTime, int daysToAdd)
        {
            DateTime calculatingDate = dateTime;

            if (calculatingDate.DayOfWeek == DayOfWeek.Saturday)
            {
                calculatingDate = calculatingDate.AddDays(2);
            }
            else if (calculatingDate.DayOfWeek == DayOfWeek.Sunday)
            {
                calculatingDate = calculatingDate.AddDays(1);
            }

            int counter = 0;

            while (counter < daysToAdd)
            {
                calculatingDate = calculatingDate.AddDays(1);
                if (calculatingDate.DayOfWeek == DayOfWeek.Saturday || calculatingDate.DayOfWeek == DayOfWeek.Sunday)
                {

                }
                else
                {
                    counter++;
                }
            }

            return dateTime;
        }
    }
}
