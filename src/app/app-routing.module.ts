import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EkszerekComponent } from './ekszerek/ekszerek.component';
import { UjNyaklancComponent } from './uj-nyaklanc/uj-nyaklanc.component';

const routes: Routes = [
  {path:"",component:EkszerekComponent},
  {path:"UjNyaklanc",component:UjNyaklancComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
