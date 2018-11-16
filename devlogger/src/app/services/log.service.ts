import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { HttpClientModule, HttpHeaders, HttpClient } from '@angular/common/http';
import { Log } from '../models/log';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  logs: Log[];
  private logSource = new BehaviorSubject<Log>({
    id: null,
    text: null,
    date: null,
    isNew: false
  });
  selectedLog = this.logSource.asObservable();

  private stateSource = new BehaviorSubject<boolean>(true);
  stateClear = this.stateSource.asObservable();


  constructor() {
    // this.logs = [{ id: 1, text: 'Generate Component', date: '12/12/2018', isNew: false },
    // { id: 2, text: 'Added Component', date: '12/12/2018', isNew: false }
    // ];
    this.logs = [];
  }
  getLogs(): Observable<Log[]> {
    if(localStorage.getItem('logs') === null){
      this.logs = [];
    }
    else
    this.logs = JSON.parse(localStorage.getItem('logs'));
    return of(this.logs.sort((a,b)=>{return b.date - a.date}));
  }
  // this is used to update the text inside the logForm
  setFormLog(log: Log) {
    this.logSource.next(log);
  }
  addLog(log: Log) {
    this.logs.unshift(log);
    // add to local storage
    localStorage.setItem('logs', JSON.stringify(this.logs))
  }
  updateLog(log: Log) {
    this.logs.forEach((cur , index) => {
    if ( log.id === cur.id) {
      this.logs.splice(index, 1);
  }
    });
    this.logs.unshift(log);
        // add to local storage
        localStorage.setItem('logs', JSON.stringify(this.logs))
  }
  deleteLog(log: Log) {
    this.logs.forEach((cur, index) => {
      if ( log.id === cur.id) {
        this.logs.splice(index, 1);
      }
    });
        // add to local storage
        localStorage.setItem('logs', JSON.stringify(this.logs))
  }
  clearState(){
    this.stateSource.next(true);
  }


}
