import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: string, limit?: number): string {
    if(!value) return null;
    console.log("FLimit : " + limit);
    limit = limit ? limit : 20;
    if(limit > value.length) {
      return value;
    }
    return value.substring(0, limit) + '...';
  }
}