//library to add this down
//import using statment
import { Component } from '@angular/core';

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
export class AppComponent
{
    //this part is like view model
    name = 'Angular';
    foo = 'another one';
    search = ''; //we display variable from 'app.component.html' '<input type="text" [(ngModel)]="search" />' 

    someNames = ['Ulf', 'Kent', 'Erik', 'Fredrik'];//Array   here 'someNames' is like db reference

    sNames = this.someNames;//search name

    //here is method like controller 
    Search() {
        //check search if ='' or not
        //console.log('Ulf');
        if (this.search!='') {
            this.sNames = this.someNames.filter(n => n == this.search);//this is like Find() in c#;
        }
    }
}
