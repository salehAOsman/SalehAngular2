"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
//library to add this down
//import using statment
var core_1 = require("@angular/core");
//8 we add here
var http_1 = require("@angular/http");
//we put here path and name of component to set the name of template that related with this component 
var AppComponent = /** @class */ (function () {
    //10 we add here to manipolate with request response
    function AppComponent(http) {
        this.http = http;
        //this part is like view model
        this.name = 'Angular';
        this.foo = 'another one';
        this.search = ''; //we display variable from 'app.component.html' '<input type="text" [(ngModel)]="search" />' 
        this.someNames = ['Ulf', 'Kent', 'Erik', 'Fredrik']; //Array   here 'someNames' is like db reference
        this.sNames = this.someNames; //search name
    }
    //here is method like controller 
    AppComponent.prototype.Search = function () {
        var _this = this;
        //check search if ='' or not
        //console.log('Ulf');
        if (this.search != '') {
            this.sNames = this.someNames.filter(function (n) { return n == _this.search; }); //this is like Find() in c#;
        }
    };
    //11  This code care about JSON request from Home controller and PeopleList method without
    AppComponent.prototype.GetPeople = function () {
        //we will resive by http.get the json informantion
        var _this = this;
        this.http.get('/Home/PeopleList')
            .subscribe(function (data) {
            //now here we will get info as json object from server
            _this.people = data.json(); //now I get request from server by people we use key 'this.' to tell this local variable line 28
        });
    };
    ;
    AppComponent = __decorate([
        core_1.Component({
            //select name of view name 
            selector: 'my-app',
            //    template:`<h1>Hello {{name}} and {{foo}}</h1>
            //<h2>1+2={{1+2}}</h2>`,
            // give path of view file as template it looklike a partial view 
            templateUrl: "./app.component.html",
        })
        // view model and controller action
        ,
        __metadata("design:paramtypes", [http_1.Http])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map