//**9 copy past from app.component

import { Component, OnInit ,Input} from '@angular/core';


import { Http } from '@angular/http';
//**10 we have to move place or path of Person class to app folder
import { Person } from '../Person'; //  one . point for one level up then here tow points ..
//**10 this work as annotation for down component
@Component({
    //**10 we change selector 
    selector: 'my-person-edit',//we have to have one name of selector for each componemt in project that works as render of Id in css to display infor inside it
    templateUrl: `./person.Edit.component.html`,//this path for html page 
})
    //**10  we need implemnt and delete inside 
export class PersonEditcomponent implements OnInit
{
    //I want to tel parent this information will come from out side 
    @Input() personEdit: Person;
        //**10  we need constructor to save edit in server 
    constructor(private http: Http) { }

    ngOnInit(): void {
        
    }

    //** 12 Past this EditPerson() from html same create person

    EditPerson()
     {
        console.log(this.personEdit); 
        this.http.post('/Home/EditPerson', this.personEdit)
            .subscribe(data => {
                console.log(data);
                if (data.status == 200) {

                }
            });
        //we go to controller to create edit part
    }
}