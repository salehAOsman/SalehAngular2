"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
//library to add this down
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
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
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            //    template:`<h1>Hello {{name}} and {{foo}}</h1>
            //<h2>1+2={{1+2}}</h2>`,
            templateUrl: "./app.component.html",
        })
        //this part is like view model
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map