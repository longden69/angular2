import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'hideStr'})
export class HideStrPipe implements PipeTransform {
  transform(value: string): string {
    let newStr = '';
    for ( let i = 0; i < value.length; i++) {
      newStr += '*';
    }

    return newStr;
  }
}
