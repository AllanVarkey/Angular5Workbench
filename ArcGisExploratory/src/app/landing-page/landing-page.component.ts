import { Component, OnInit, ViewChild } from '@angular/core';
import { EsriMapComponent } from '../esri-map/esri-map.component';
import { Location } from '../../models/location';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor() { }
  location: Location = {
    latitude: null,
    longitude: null,
    center: [],
    zoom: null,
    basemap: ''
  };
  center: Array<number>;
  // so that we can use the form in the ts class
@ViewChild('locationForm') form: any;

  ngOnInit() {
    this.location.zoom = 10;
    this.location.center = [-114.0649, 51.0448]; // [long,lat]
    this.location.basemap = 'streets';
  }
  onSubmit ({value, valid}: {value: Location, valid: boolean} ) {
    this.location.latitude = value.latitude;
    this.location.longitude = value.longitude;
    this.location.zoom = value.zoom;
    this.location.basemap = value.basemap;
    this.location.center = [];
    this.location.center.push(this.location.longitude);
    this.location.center.push(this.location.latitude);

  }
  mapState(flag: boolean) {

  }

}
