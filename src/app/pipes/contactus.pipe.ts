import { Pipe, PipeTransform } from '@angular/core';
import { Contactus } from '../Models/Contactus';

@Pipe({
  name: 'contactus'
})
export class ContactusPipe implements PipeTransform {

  transform(value: Contactus[], filterText?: string): Contactus[] {
    filterText= filterText?filterText.toLocaleLowerCase():null
    return filterText?value.filter((p:Contactus)=>p.name
    .toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
