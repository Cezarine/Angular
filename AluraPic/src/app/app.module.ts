import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PhotoComponent } from './Photo/Photo.Component';
import { TitlesComponents } from './Titles/Titles.Components';

@NgModule({
  declarations: [
    AppComponent,
    PhotoComponent,
    TitlesComponents
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
