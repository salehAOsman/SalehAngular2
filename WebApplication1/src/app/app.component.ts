import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}} and {{foo}}</h1><h2>1+2={{1+2}}</h2>`,
})
   
export class AppComponent
{
    name = 'Angular';
    foo = 'another one';
}
