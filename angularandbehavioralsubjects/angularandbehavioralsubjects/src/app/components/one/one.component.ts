import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/User';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  user: string;
  compOneUser: User;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.cast.subscribe(response => {
      this.compOneUser = response;
    });
  }

}
