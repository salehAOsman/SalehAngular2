"use strict";
//**9 copy past from app.component
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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
//**10 we have to move place or path of Person class to app folder
var Person_1 = require("../Person"); //  one . point for one level up then here tow points ..
//**10 this work as annotation for down component
var PersonEditcomponent = /** @class */ (function () {
    //**10  we need constructor to save edit in server 
    function PersonEditcomponent(http) {
        this.http = http;
    }
    PersonEditcomponent.prototype.ngOnInit = function () {
    };
    //** 12 Past this EditPerson() from html same create person
    PersonEditcomponent.prototype.EditPerson = function () {
        console.log(this.personEdit);
        this.http.post('/Home/EditPerson', this.personEdit)
            .subscribe(function (data) {
            console.log(data);
            if (data.status == 200) {
            }
        });
        //we go to controller to create edit part
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Person_1.Person)
    ], PersonEditcomponent.prototype, "personEdit", void 0);
    PersonEditcomponent = __decorate([
        core_1.Component({
            //**10 we change selector 
            selector: 'my-person-edit',
            templateUrl: "./person.Edit.component.html",
        })
        //**10  we need implemnt and delete inside 
        ,
        __metadata("design:paramtypes", [http_1.Http])
    ], PersonEditcomponent);
    return PersonEditcomponent;
}());
exports.PersonEditcomponent = PersonEditcomponent;
//# sourceMappingURL=person.Edit.component.js.map