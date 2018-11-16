import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  // this is the BehaviorSubject which will hold the changed message
  private message = new BehaviorSubject('Default Message');
  //this is the listener used by the components
  currentMessage = this.message.asObservable();

  changeMessage(incommingMessage:string){
    this.message.next(incommingMessage);
  }
}
