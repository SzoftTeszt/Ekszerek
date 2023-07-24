import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  url='http://localhost:3000/ekszerek/'

  constructor(private http:HttpClient) { }
  nyaklancokSubject = new Subject()

  getEkszerek(){
    this.http.get(this.url).forEach((e)=>this.nyaklancokSubject.next(e))

    return this.nyaklancokSubject
  }


  torolNyaklanc(ekszer:any){
    return this.http.delete(this.url+ekszer.id).forEach(()=>this.getEkszerek())
  }

  modositNyaklanc(ekszer:any){
    return this.http.put(this.url+ekszer.id, ekszer).forEach(()=>this.getEkszerek())
  }

  ujNyaklanc(ekszer:any){
    return this.http.post(this.url, ekszer).forEach(()=>this.getEkszerek())
  }
}
