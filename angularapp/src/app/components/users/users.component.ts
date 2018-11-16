import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from "../../models/User";
import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    email: ''
  }
  users: User[];
  showExtended: boolean = false;
  enableAdd: boolean = false;
  showUsersForm: boolean = false;
  loaded: boolean = false;
  @ViewChild('userForm') form: any;
  data: any;


  // HERE WE intialize a private variable with the dataservice so we can call the dataservice
  //function from within this component.
  constructor(private userService: UserService) {


  }

  //functions
  addUser({ value, valid }: { value: User, valid: boolean }) {
    if (!valid) {
      console.log("form is not valid");
    }
    else {
      //push adds to the end unshift adds to the beginning
      this.user.isActive = true;
      this.user.registered = new Date();
      this.userService.addUser(value); 
      this.user = {
        firstName: '',
        lastName: '',
        email: ''
      }
    }
  }

  clearForm() {
    this.user = {
      firstName: '',
      lastName: '',
      email: ''
    }
  }
  toggleHide(user: User) {
    user.hide = !user.hide;
  }
  // toggle userForm
  toggleUserForm() {
    this.showUsersForm = !this.showUsersForm;
  }
  //formSubmit
  formSubmit(e) {
    console.log("formSubmitted");
    e.preventDefualt();

  }
  //toggleEnableAdd()
  toggleEnableAdd() {
    this.enableAdd = !this.enableAdd;
  }
  //handle input
  handleInput(e) {
  }

  //consider ngOnInit as the initialization point 
  ngOnInit() {

    //here we are initializing the users variable with the response from the database. 
    /*
      the dataservice has a getUsers function which returns the response from the
      database call
    */
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.loaded = true;
    });

    // in the case of an observer you have to subscribe to the datastream. 

    this.userService.getData().subscribe(data => {
      console.log(data);
    });

  }


}


