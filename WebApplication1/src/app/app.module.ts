import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Ulf add module as library 
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';

@NgModule({
    //ulf Confirm here library module up down 
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
