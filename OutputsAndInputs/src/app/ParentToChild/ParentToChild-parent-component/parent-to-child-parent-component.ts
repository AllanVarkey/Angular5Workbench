import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-parent-to-child-parent-component',
  templateUrl: './parent-to-child-parent-component.html',
  styleUrls: ['./parent-to-child-parent-component.css']
})
export class ParentToChildParentComponent implements OnInit {

  constructor() { }

 
  messageObject :string;

  ngOnInit() {
    this.messageObject = "Hello from the fromComponent";
  }
  

}
