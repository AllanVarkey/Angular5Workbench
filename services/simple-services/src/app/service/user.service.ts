import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: string[] = ['John', 'Jill', 'Peter'];
  constructor() { }

  getFirstUser() {
    return this.users[0];
  }

  getAllUsers() {
    return this.users;
  }

}
