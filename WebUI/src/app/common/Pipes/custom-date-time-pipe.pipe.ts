import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

export type DateTimeType = 'long' | 'date' | 'time';

@Pipe({
  name: '_dateTime'
})
export class CustomDateTimePipePipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

  transform(date: Date | string, type: DateTimeType = 'long'): string {

    if (date == null) {
      return '';
    }

    date = new Date(date);  // if orginal type was a string
    return date.toLocaleDateString('en-GB', { year: 'numeric', month: 'short', day: 'numeric' }) + ', ' +
      date.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });


    // new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  }



}
