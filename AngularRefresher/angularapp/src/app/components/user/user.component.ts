import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User;
  // the constructor is used for dependency injection
  constructor() {

  }

  // this is where you would include server calls ;
  ngOnInit(): void {

  }

  sayHello(): void {

  }
}

