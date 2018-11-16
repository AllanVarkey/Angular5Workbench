import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';


@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})

export class UserComponent {
    user: User;
    constructor() {


    }
    ngOnInit() {
        this.user = {
            firstName: "Allan",
            lastName: "Varkey",
            email: "goodcatxbaddog@gmail.com"
        }
    }
    getFirstName() {
        return this.user.firstName;
    }
    getLastName() {
        return this.user.lastName;
    }
    getEmail() {
        return this.user.email;
    }
  

}
