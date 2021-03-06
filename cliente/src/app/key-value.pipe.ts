import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keyValue'
})
export class KeyValuePipe implements PipeTransform {

  transform(value: any, args: string[]): any {
    const keys = [];
    // tslint:disable-next-line:forin
    for (const key in value) {
      keys.push({ key: key, value: value[key] });
    }
    return keys;
  }

}
