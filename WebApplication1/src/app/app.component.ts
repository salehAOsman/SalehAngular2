//library to add this down
//import using statment
//1** add new 'OnInit' this like second constractor efter first one 'constructor'
import { Component,OnInit } from '@angular/core';

//saleh 16*  add 'import { Http } from '@angular/http';' 
import { Http } from '@angular/http'; 
//saleh 17*  add 'import "{ Person } from '../Person';"
import { Person } from './Person'; // one point . for one level this route to get path of Person and use it as Person 

//we put here path and name of component to set the name of template that related with this component 
@Component({
    //select name of view name 
    selector: 'my-app',//to tell wich page I will select this page 'my-app'
    //    template:`<h1>Hello {{name}} and {{foo}}</h1>
    //<h2>1+2={{1+2}}</h2>`,
    // give path of view file as template it looklike a partial view 
    templateUrl: `./app.component.html`,//copy past in app.component.html i need to give it path to view file
})
// view model and controller action
    //2** add implements then delete constructor then add at end method
export class AppComponent implements OnInit
{
    //this part is like view model
    name = 'Angular';
    foo = 'another one';
    search = ''; //we display variable from 'app.component.html' '<input type="text" [(ngModel)]="search" />' 
    //**4 we add new variable as object type of class Person to send it to server side with all info and we need to set default value in it to not have exception we go to OnInit
    //4** give default in newPerson
       
        //**4 now we have to display this object as add default obj now we go to app.component.html
    newPerson: Person = { Id: 0, Name: "Name", Age: 0 };

    //**7 after we go back from controller.cs we create new variable selectedPerson
    selectedPerson: Person;//''7 type of Person class.cs then we need method onSelect
    //saleh 18*  add new variable by ':' to use this list of Person
    people: Person[];

    someNames = ['Ulf', 'Kent', 'Erik', 'Fredrik'];//Array   here 'someNames' is like db reference

    sNames = this.someNames;//search name

    //saleh 19*  add here to munipolate with request response
    constructor(private http: Http) { }//it is here from base package not like OnInit

    //3** shift this down from up to here
    //after contructor is done then I need this method from library 'ngOnInit()' to call this method to have that job without press button
    ngOnInit(): void {
        //3**throw new Error("Method not implemented.");
        //3** I will tell it to GetPeople
        this.GetPeople();
        //3**then go run we will see the list of people with press that button
    //**7 onSelect
    }
    //**7 we use edit like toggle display for first click then hide for next click 
    onSelect(personEdit: Person) {
        /*here we have taggle way as jquery exmple to check if I click on row for edit then check if i click before
        *then hide this edit or if I did not click in  then display edit it work like filp flop
         */
        //here i check if this person the same person that I have selected then hide or not then display 
        if (this.selectedPerson == personEdit) {
            this.selectedPerson = null;
        } else {
        this.selectedPerson = personEdit;
        }
    }// **8 go to component .html to drow this edit 
    //here is method like controller 
    Search() {
        //check search if ='' or not
        //console.log('Ulf');
        if (this.search != '') {
            this.sNames = this.someNames.filter(n => n == this.search);//this is like Find() in c#;
        }
    }
    //saleh 19*  add here  This method that care about JSON request from Home controller and PeopleList method without
    GetPeople(){
        //we will resive by http.get the json informantion
        this.http.get('/Home/PeopleList')
            //we use 'subscribe' just to say I am waiting 
            .subscribe(data => {
                //now here we will get info as json object from server
                this.people = data.json()//now I get request from server by people we use key 'this.' to tell this local variable line 28
            });
    };

    //**5then we create here this method
    CreatePerson() {
        //**5 now we will send this object to server as JSON part
        
        console.log(this.newPerson); //**5  before we continue we check without this 3 lines to be shoor it is works
        //**6 now this side will sent the data to server side 
        this.http.post('/Home/CreatePerson', this.newPerson) //this request and send data, this code have 5 over load, we have link to where we go and  post to server then we have object newPerson 
            //we have this 'subscribe' like Async in C# to wait for another info 
            //This work as response to fitch the answer it means the server hade the data  
            .subscribe(data => { 
                //we can add here seccess status 
                console.log(data);
                if (data.status == 200) {
                    //then we push the data to server
                    this.people.push(data.json());        
                }
            //this.people.push(data.json());
            });//**6 Now we go to 'Controller.cs' to build method in server side   
    }

    //saleh 20* go to app.component.html to  display object people in app.component.html side 
}

