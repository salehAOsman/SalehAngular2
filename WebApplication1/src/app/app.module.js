"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
// Angular ajax we will add down in '@NgModule'
//saleh 13* add here import {HttpModule} from '@angular/http';
var http_1 = require("@angular/http"); //Get post Ajax and added 'HttpModule' and we go to app.comonent.spec.ts to add 
//Ulf add module as library
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component"); // path of page 
//**13 we have to tel to import library  component PersonEditcomponent
var person_Edit_component_1 = require("./personEdit/person.Edit.component"); //we added the same in line 'declarations'
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            //Ulf Confirm here library module up down 
            //saleh 14* add here import :[ ..,..., HttpModule],
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule],
            //saleh 15*  Go to  'app.component.ts'
            //**14 add here 'PersonEditcomponent'
            declarations: [app_component_1.AppComponent, person_Edit_component_1.PersonEditcomponent],
            bootstrap: [app_component_1.AppComponent],
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map