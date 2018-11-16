import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Location } from '../models/location';

@Injectable()
export class MapservicesService {

  latitude: number;
  longitude: number;
  location: Location = {
    center: [0, 0]
  };

  constructor() { }

  setCoordinates(lat: number, lon: number) {
    this.latitude = lat;
    this.longitude = lon;
    this.location.center = [lat, lon];
  }

  getLocation() {
    return this.location;
  }

}
