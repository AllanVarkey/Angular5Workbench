import { Component, OnInit } from '@angular/core';
import { Log } from '../../models/log';
import { LogService } from '../../services/log.service';
@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {
  log:  Log = {
    id: 0,
    text: '',
    date: '',
    isNew: true
  };
  constructor(private logService: LogService) { }

  ngOnInit() {
    // subscribe to the selected Log observable
    this.logService.selectedLog.subscribe(log => {
     if (log.id !== null) {
        this.log.id = log.id;
        this.log.text = log.text;
        this.log.date = log.date;
        this.log.isNew = false;
     }
    });
  }
  onSubmit() {
    if (this.log.isNew) {
      const newLog = {
        id: this.generateId(),
        text: this.log.text,
        date: this.log.date,
        isNew: true
      }
      this.logService.addLog(newLog);
    }
    else {
      const updateLog = {
        id: this.log.id,
        text: this.log.text,
        date: this.log.date,
        isNew: true
      }
      this.logService.updateLog(updateLog);
    }
    this.clearState();

  }

  generateId(): any {

    const lut = [];
     for (let i = 0; i < 256; i++) {
       lut[i] = (i < 16 ? '0' : '' ) + (i).toString(16);
      }
      let d0 = Math.random()*0xffffffff|0;
      let d1 = Math.random()*0xffffffff|0;
      let d2 = Math.random()*0xffffffff|0;
      let d3 = Math.random()*0xffffffff|0;
      return lut[d0&0xff] + lut[d0>>8&0xff] + lut[d0>>16&0xff] + lut[d0>>24&0xff] + '-' +
      lut[d1&0xff] + lut[d1>>8&0xff] + '-' + lut[d1>>16&0x0f|0x40] + lut[d1>>24&0xff] + '-' +
      lut[d2&0x3f|0x80] + lut[d2>>8&0xff] + '-' + lut[d2>>16&0xff] + lut[d2>>24&0xff] +
      lut[d3&0xff] + lut[d3>>8&0xff] + lut[d3>>16&0xff] + lut[d3>>24&0xff] ;
  }
  clearState() {
    this.log.isNew = true;
    this.log.id = 0;
    this.log.text = '';
    this.log.date = '';
    this.logService.clearState();
  }
}
