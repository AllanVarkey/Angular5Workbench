import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  defaultUser: User = {'name': 'Ronnie', 'age': '10'};
  private user = new BehaviorSubject<User>(this.defaultUser);
  cast = this.user.asObservable(); // we use asObservalbe to monitor the user variable

  constructor() { }

  editUser(nextUser) {
    this.user.next(nextUser);
  }
}
