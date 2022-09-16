import { Pipe, PipeTransform } from '@angular/core';
import { Category } from '../Models/Categories';

@Pipe({
  name: 'categoryFilter'
})
export class CategoryFilterPipe implements PipeTransform {

  transform(value: Category[], filterText?: string): Category[] {
    filterText= filterText?filterText.toLocaleLowerCase():null
    return filterText?value.filter((p:Category)=>p.name
    .toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }
  }


