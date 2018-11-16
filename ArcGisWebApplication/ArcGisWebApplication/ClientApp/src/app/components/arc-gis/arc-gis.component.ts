import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Location } from '../../models/location';
import { log } from 'util';
import { MapservicesService } from '../../services/mapservices.service';


@Component({
  selector: 'app-arc-gis',
  templateUrl: './arc-gis.component.html',
  styleUrls: ['./arc-gis.component.css']
})
export class ArcGisComponent implements OnInit {

  mapFormGroup: FormGroup;
  baseMap: string;
  zoomLevel: number;
  location: Location = {
    center: []
  };
  constructor(private fb: FormBuilder, private mapsService: MapservicesService) {
    this.createForm();
  }

  ngOnInit() {
    this.location.center = [475711.2, 291619.9];
    this.baseMap = 'streets';
    this.zoomLevel = 10;
  }

  createForm() {
    this.mapFormGroup = this.fb.group({

      'latitude': 'number',
      'longitude': 'number'

    });
  }
  formSubmission() {
    this.mapsService.setCoordinates(this.mapFormGroup.value.latitude, this.mapFormGroup.value.longitude);
    this.location = this.mapsService.getLocation();
    console.log(this.location);
  }
  mapState(flag: boolean) {

  }

}
