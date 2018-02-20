

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Angular ajax we will add down in '@NgModule'
//saleh 13* add here import {HttpModule} from '@angular/http';
import { HttpModule } from '@angular/http';//Get post Ajax and added 'HttpModule' and we go to app.comonent.spec.ts to add 

//Ulf add module as library
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
    //Ulf Confirm here library module up down 
    //saleh 14* add here import :[ ..,..., HttpModule],
    imports: [BrowserModule, FormsModule, HttpModule],
    //saleh 15*  Go to  'app.component.ts'
    declarations: [AppComponent],
    bootstrap: [AppComponent],
})
export class AppModule { }
