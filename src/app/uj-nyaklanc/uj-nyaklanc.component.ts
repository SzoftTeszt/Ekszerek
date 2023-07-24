import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-uj-nyaklanc',
  templateUrl: './uj-nyaklanc.component.html',
  styleUrls: ['./uj-nyaklanc.component.css']
})
export class UjNyaklancComponent {
ekszer:any={}

constructor(private base:BaseService, private router:Router){}

ment(ekszer:any){
  console.log(ekszer)
  this.base.ujNyaklanc(ekszer).then(()=>this.router.navigate(['/']))
}
}
