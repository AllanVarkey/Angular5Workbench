import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  public goals = new BehaviorSubject<any>(['INitial goal','Another Silly Life Goal']);
  goal = this.goals.asObservable();
  constructor() { 

  }

  changeGoal(goal){
    this.goals.next(goal);
  }

}
