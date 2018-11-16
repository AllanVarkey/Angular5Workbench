import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  firstUser: string;
  allUsers: string[];
  constructor(private userService: UserService) { }

  ngOnInit() {

    this.firstUser = this.userService.getFirstUser();
    this.allUsers = this.userService.getAllUsers();
  }

}
