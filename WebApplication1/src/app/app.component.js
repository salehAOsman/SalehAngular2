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
//1** add new 'OnInit' this like second constractor efter first one 'constructor'
var core_1 = require("@angular/core");
//saleh 16*  add 'import { Http } from '@angular/http';' 
var http_1 = require("@angular/http");
//we put here path and name of component to set the name of template that related with this component 
var AppComponent = /** @class */ (function () {
    //saleh 19*  add here to munipolate with request response
    function AppComponent(http) {
        this.http = http;
        //this part is like view model
        this.name = 'Angular';
        this.foo = 'another one';
        this.search = ''; //we display variable from 'app.component.html' '<input type="text" [(ngModel)]="search" />' 
        //**4 we add new variable as object type of class Person to send it to server side with all info and we need to set default value in it to not have exception we go to OnInit
        //4** give default in newPerson
        //**4 now we have to display this object as add default obj now we go to app.component.html
        this.newPerson = { Id: 0, Name: "Name", Age: 0 };
        this.someNames = ['Ulf', 'Kent', 'Erik', 'Fredrik']; //Array   here 'someNames' is like db reference
        this.sNames = this.someNames; //search name
    } //it is here from base package not like OnInit
    //3** shift this down from up to here
    //after contructor is done then I need this method from library 'ngOnInit()' to call this method to have that job without press button
    AppComponent.prototype.ngOnInit = function () {
        //3**throw new Error("Method not implemented.");
        //3** I will tell it to GetPeople
        this.GetPeople();
        //3**then go run we will see the list of people with press that button
        //**7 onSelect
    };
    //**7 we use edit like toggle display for first click then hide for next click 
    AppComponent.prototype.onSelect = function (personEdit) {
        /*here we have taggle way as jquery exmple to check if I click on row for edit then check if i click before
        *then hide this edit or if I did not click in  then display edit it work like filp flop
         */
        //here i check if this person the same person that I have selected then hide or not then display 
        if (this.selectedPerson == personEdit) {
            this.selectedPerson = null;
        }
        else {
            this.selectedPerson = personEdit;
        }
    }; // **8 go to component .html to drow this edit 
    //here is method like controller 
    AppComponent.prototype.Search = function () {
        var _this = this;
        //check search if ='' or not
        //console.log('Ulf');
        if (this.search != '') {
            this.sNames = this.someNames.filter(function (n) { return n == _this.search; }); //this is like Find() in c#;
        }
    };
    //saleh 19*  add here  This method that care about JSON request from Home controller and PeopleList method without
    AppComponent.prototype.GetPeople = function () {
        var _this = this;
        //we will resive by http.get the json informantion
        this.http.get('/Home/PeopleList')
            .subscribe(function (data) {
            //now here we will get info as json object from server
            _this.people = data.json(); //now I get request from server by people we use key 'this.' to tell this local variable line 28
        });
    };
    ;
    //**5then we create here this method
    AppComponent.prototype.CreatePerson = function () {
        //**5 now we will send this object to server as JSON part
        var _this = this;
        console.log(this.newPerson); //**5  before we continue we check without this 3 lines to be shoor it is works
        //**6 now this side will sent the data to server side 
        this.http.post('/Home/CreatePerson', this.newPerson) //this request and send data, this code have 5 over load, we have link to where we go and  post to server then we have object newPerson 
            .subscribe(function (data) {
            //we can add here seccess status 
            console.log(data);
            if (data.status == 200) {
                //then we push the data to server
                _this.people.push(data.json());
            }
            //this.people.push(data.json());
        }); //**6 Now we go to 'Controller.cs' to build method in server side   
    };
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
        //2** add implements then delete constructor then add at end method
        ,
        __metadata("design:paramtypes", [http_1.Http])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map