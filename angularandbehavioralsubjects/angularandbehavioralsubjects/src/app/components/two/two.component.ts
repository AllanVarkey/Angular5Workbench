import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/User';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {

  componentTwoUser: User = {'name' : 'comp2user', 'age': '12'};
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.editUser(this.componentTwoUser);
  }

}
