import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];
  constructor() {
    this.users = [
    //   {
    //   firstName: 'John',
    //   lastName: 'Smith',
    //   age: 56,
    //   address: {
    //     street: '1231 Nightengale Ave',
    //     city: 'Airdrie',
    //     state: 'Alberta'
    //   }
    // },
    //   {
    //     firstName: 'Priya',
    //     lastName: 'Stephen',
    //     age: 31,
    //     address: {
    //       street: '1231 LordsManor',
    //       city: 'Airdrie',
    //       state: 'Alberta'
    //     }
    //   },
    //   {
    //     firstName: 'Allan',
    //     lastName: 'Varkey',
    //     age: 31,
    //     address: {
    //       street: '1231 LordsManor',
    //       city: 'Airdrie',
    //       state: 'Alberta'
    //     }
    //   }
    ];


  }

  ngOnInit(): void {
  }

  addUsers(user: User): void{
    this.users.push(user);
  }
}
