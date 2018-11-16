import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent-to-child-child-component',
  templateUrl: './parent-to-child-child-component.html',
  styleUrls: ['./parent-to-child-child-component.css']
})
export class ParentToChildChildComponent implements OnInit {

  constructor() { }
  @Input()
  incommingMessage: string;
  ngOnInit() {
  }

  receivingMessage(incMessage: string){

    this.incommingMessage = incMessage;
    console.log(this.incommingMessage);
  }
}
