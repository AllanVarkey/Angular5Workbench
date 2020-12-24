import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];
  enableAdd: boolean = true;
  showUserForm: boolean = false;
  constructor() {
    this.users = [
      {
        firstName: 'John',
        lastName: 'Smith',
        age: 56,
        address: {
          street: '1231 Nightengale Ave',
          city: 'Airdrie',
          state: 'Alberta'
        },

        isActive: false,
        hideDetails: false,
        registered: new Date('01/02/2018 08:30:00')
      },
      {
        firstName: 'Priya',
        lastName: 'Stephen',
        age: 31,
        address: {
          street: '1231 LordsManor',
          city: 'Airdrie',
          state: 'Alberta'
        },

        isActive: true,
        hideDetails: false,
        registered: new Date('01/06/2018 08:30:00')
      },
      {
        firstName: 'Allan',
        lastName: 'Varkey',
        age: 31,
        address: {
          street: '1231 LordsManor',
          city: 'Airdrie',
          state: 'Alberta'
        },

        isActive: false,
        hideDetails: false,
        registered: new Date('01/09/2018 08:30:00')
      }
    ];


  }

  ngOnInit(): void {

  }

  addUser(): void {

  }



}
