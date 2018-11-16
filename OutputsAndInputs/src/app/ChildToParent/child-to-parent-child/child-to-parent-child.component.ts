import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-to-parent-child',
  templateUrl: './child-to-parent-child.component.html',
  styleUrls: ['./child-to-parent-child.component.css']
})
export class ChildToParentChildComponent implements OnInit {

  constructor() { }
  @Output()
  messageEventEmitter = new EventEmitter<string>();
  messageToParent:string;

  ngOnInit() {

  }
  onButtonClick(){
    console.log("Button Has been Clicked");
    this.messageToParent = "Hello From The Child Component";
    this.messageEventEmitter.emit(this.messageToParent);
  }

}
