import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CitationComponent } from './citation/citation.component';
import { FormCitationComponent } from './form-citation/form-citation.component';

@NgModule({
  declarations: [
    AppComponent,
    CitationComponent,
    FormCitationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
