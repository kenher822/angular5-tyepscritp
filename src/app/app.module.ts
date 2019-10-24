import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VideoJuegosComponent } from './videojuegos/videojuegos.components';

@NgModule({
  declarations: [
    AppComponent,
    VideoJuegosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
