import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(array:any, szo:string): any {
    if (!szo) return array;
    return array.filter((e:any)=> JSON.stringify(e).toLowerCase().includes(szo.toLowerCase()))
    return null;
  }

}
