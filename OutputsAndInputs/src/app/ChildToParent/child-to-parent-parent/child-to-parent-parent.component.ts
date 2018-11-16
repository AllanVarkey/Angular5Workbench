import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-to-parent-parent',
  templateUrl: './child-to-parent-parent.component.html',
  styleUrls: ['./child-to-parent-parent.component.css']
})
export class ChildToParentParentComponent implements OnInit {

  constructor() { }

  receivedMessageFromChild:string;

  ngOnInit() {
  }

  setReceivedMessageFromChild($event){
    console.log("Event: "+$event)
    this.receivedMessageFromChild = $event;
  }
}
