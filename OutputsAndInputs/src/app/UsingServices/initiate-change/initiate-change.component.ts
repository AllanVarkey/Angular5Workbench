import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-initiate-change',
  templateUrl: './initiate-change.component.html',
  styleUrls: ['./initiate-change.component.css']
})
export class InitiateChangeComponent implements OnInit {
  changedMessage:string;

  constructor(private dataServiceObject:DataService) { }

  ngOnInit() {
 
 
  }
  initiateTheMessageChange(){
    this.changedMessage = "Changed the Message In the initiateChange Component";
    // here we are calling the changed message function in the dataservice to change the message
    this.dataServiceObject.changeMessage(this.changedMessage);
  }

}
