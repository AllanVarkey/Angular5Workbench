import { Component, OnInit } from '@angular/core';
import { EsriLoaderService } from 'angular-esri-loader';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  providers: [EsriLoaderService]

})
export class MapComponent implements OnInit {

  mapProperties: __esri.MapProperties = {
    basemap: 'dark-gray'
  };
  mapViewProperties: __esri.MapViewProperties = {
    center: [-118, 34.5],
    zoom: 8
  };
  map: __esri.Map;
  mapView: __esri.MapView;


  constructor(private esriLoader: EsriLoaderService) { }

  ngOnInit() {

  }
  onMapInit(mapInfo: { map: __esri.Map, mapView: __esri.MapView }) {
    this.map = mapInfo.map;
    this.mapView = mapInfo.mapView;

  }


}
