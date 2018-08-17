import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { HttpService } from './service/http.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FilmComponent } from './film/film.component';
import { MainComponent } from './main/main.component';
import { DescriptionComponent } from './description/description.component';


@NgModule({
  declarations: [
    AppComponent,
    FilmComponent,
    MainComponent,
    DescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
