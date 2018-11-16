import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-reflect-change',
  templateUrl: './reflect-change.component.html',
  styleUrls: ['./reflect-change.component.css']
})
export class ReflectChangeComponent implements OnInit {

  reflectingChangedMessage: string;
  constructor(private dataServiceObject:DataService) { }

  ngOnInit() {

    this.dataServiceObject.currentMessage.subscribe(result =>{
      this.reflectingChangedMessage = result;

    });
  }

}
