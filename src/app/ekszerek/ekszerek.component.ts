import { Component } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-ekszerek',
  templateUrl: './ekszerek.component.html',
  styleUrls: ['./ekszerek.component.css']
})
export class EkszerekComponent {
  szo:any;
  ekszerek:any;
  modositando:any=[]
  rendezendo:any=0;
  irany=false;
  constructor(private base:BaseService){
    this.base.getEkszerek().subscribe(
      {
        next:(ekszerek)=> {this.ekszerek=ekszerek; console.log(this.ekszerek)},
        error:(e)=>console.log(e)
      }
    )
  }

torol(ekszer:any){
  this.base.torolNyaklanc(ekszer)
}
modosit(ekszer:any){
  const id= ekszer.id
  if (!this.modositasAlatt(id))
  {
    
    // console.log("Id:", id)
    this.modositando.push(id);
  }
}

modositasAlatt(id:any){
  // console.log("Tömb", this.modositando)
  const elem= this.modositando.filter((e:any)=>e==id)[0]
  // console.log("Elem", elem)
  return elem!=undefined;
}
ment(ekszer:any){
  this.modositando=this.modositando.filter((e:any)=>e!=ekszer.id)
  this.base.modositNyaklanc(ekszer)
}
rendezes(){
  console.log(this.rendezendo)
}
}
