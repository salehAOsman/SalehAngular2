//library to add this down
//import using statment
import { Component } from '@angular/core';

//saleh 16*  add 'import { Http } from '@angular/http';' 
import { Http } from '@angular/http'; 
//saleh 17*  add 'import "{ Person } from '../Person';"
import { Person } from '../Person'; //this route to get path of Person and use it as Person 

//we put here path and name of component to set the name of template that related with this component 
@Component({
    //select name of view name 
    selector: 'my-app',
    //    template:`<h1>Hello {{name}} and {{foo}}</h1>
    //<h2>1+2={{1+2}}</h2>`,
    // give path of view file as template it looklike a partial view 
    templateUrl: `./app.component.html`,//copy past in app.component.html i need to give it path

})
// view model and controller action
export class AppComponent {
    //this part is like view model
    name = 'Angular';
    foo = 'another one';
    search = ''; //we display variable from 'app.component.html' '<input type="text" [(ngModel)]="search" />' 

    //saleh 18*  add new variable by ':' to use this list of Person
    people: Person[];

    someNames = ['Ulf', 'Kent', 'Erik', 'Fredrik'];//Array   here 'someNames' is like db reference

    sNames = this.someNames;//search name

    //saleh 19*  add here to munipolate with request response
    constructor(private http: Http) { }

    //here is method like controller 
    Search() {
        //check search if ='' or not
        //console.log('Ulf');
        if (this.search != '') {
            this.sNames = this.someNames.filter(n => n == this.search);//this is like Find() in c#;
        }
    }
    //saleh 19*  add here  This method that care about JSON request from Home controller and PeopleList method without
    GetPeople() {
        //we will resive by http.get the json informantion
        this.http.get('/Home/PeopleList')
            //we use 'subscribe' just to say I am waiting 
            .subscribe(data => {
                //now here we will get info as json object from server
                this.people = data.json()//now I get request from server by people we use key 'this.' to tell this local variable line 28
            });
    };
    //saleh 20* go to app.component.html to  display object people in app.component.html side 
}