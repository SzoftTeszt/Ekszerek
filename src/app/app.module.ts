import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EkszerekComponent } from './ekszerek/ekszerek.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { UjNyaklancComponent } from './uj-nyaklanc/uj-nyaklanc.component';
import { SearchPipe } from './search.pipe';
import { RendezesPipe } from './rendezes.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EkszerekComponent,
    NavbarComponent,
    UjNyaklancComponent,
    SearchPipe,
    RendezesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
