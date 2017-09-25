import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'timeFormat' })
export class TimeFormatPipe implements PipeTransform {
  transform(time: any) {
    const year = time.getFullYear();
    const month = time.getMonth();
    const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    const day = time.getDate();

    return year + '/' + months[month] + '/' + day;
  }
}
