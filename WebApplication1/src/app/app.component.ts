//library to add this down
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
    //    template:`<h1>Hello {{name}} and {{foo}}</h1>
    //<h2>1+2={{1+2}}</h2>`,
    templateUrl: `./app.component.html`,//copy past in app.component.html i need to give it path
})
   //this part is like view model
export class AppComponent
{
    name = 'Angular';
    foo = 'another one';
    someNames = ['ulf', 'Kent', 'Erik', 'Fredrik'];//Array 
}
