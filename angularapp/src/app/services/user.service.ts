import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { User } from '../models/User'
import { log } from 'util';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[];
  data: Observable<any>;

  constructor() {
    /*
    THIS IS WHERE WE MAKE THE ACTUAL DATABASE CALLS.

    */
    this.users = [
      {
        firstName: "Kevin",
        lastName: "Johnson",
        email: "goodcatbaddog@gmail.com",
        isActive: true,
        registered: new Date('01/02/2018 08:30:00'),
        hide: true
      },
      {
        firstName: "Ronnie",
        lastName: "Davis",
        email: "goodcatbaddog@gmail.com",
        isActive: false,
        registered: new Date('01/02/2018 08:30:00'),
        hide: true
      },
      {
        firstName: "Allan",
        lastName: "Varkey",
        email: "goodcatbaddog@gmail.com",
        isActive: true,
        registered: new Date('01/02/2018 08:30:00'),
        hide: true
      }
    ];
  }
  // a getter function to return the response from the call

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  addUser(user: User) {
    this.users.unshift(user);

  }
  getData() {
    this.data = new Observable(observer => {
      observer.next();
    });//end of Observable
    return this.data;
  }

}
