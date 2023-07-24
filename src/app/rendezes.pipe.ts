import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rendezes'
})
export class RendezesPipe implements PipeTransform {

  transform(array:any, miSzerint:any, irany:boolean): any {
    // console.log("Miszerint", miSzerint)
    if (miSzerint==0) return array;

    array.sort((a:any, b:any)=>{
      if (irany){
        const s= a;
        a=b;
        b=s;
      }
      if (miSzerint==1){
        a.ar=Number(a.ar)
        b.ar=Number(b.ar)
        // console.log("Ár", typeof(a.ar), b.ar)
        if (a.ar>b.ar) return 1;
        if (a.ar<b.ar) return -1;
        return 0;
      }
      return a['nev'].localeCompare(b['nev'], 'hu', {sensitivity:'base'})
    })

    return array;
  }

}
