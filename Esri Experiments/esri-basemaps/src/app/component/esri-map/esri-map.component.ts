
import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { loadModules } from 'esri-loader';
import esri = __esri;

@Component({
  selector: 'app-esri-map',
  templateUrl: './esri-map.component.html',
  styleUrls: ['./esri-map.component.css']
})
export class EsriMapComponent implements OnInit {

  @Output() mapLoaded = new EventEmitter<boolean>();
  @ViewChild('mapViewNode') private mapViewEl: ElementRef;

  private _mapPortalItem: string;
  private _layerPortalItem: string;

  @Input()
  set mapPortalItem(mapPortalItem: string) {
    this._mapPortalItem = mapPortalItem;
  }

  @Input()
  set layerPortalItem(mapLayerItem: string) {
    this._layerPortalItem = mapLayerItem;
  }

  constructor() { }

  async initializeMap() {
    try {
      const [EsriMapView, EsriMap, Search, Layer, OpenStreetMapLayer] = await loadModules([
        'esri/views/MapView', 'esri/WebMap', 'esri/widgets/Search', 'esri/layers/Layer',
        'esri/layers/OpenStreetMapLayer'
      ]);

      // Set type of map
      const mapProperties: esri.WebMapProperties = {
        portalItem: {
          id: this._mapPortalItem
         }
      };

      const map: esri.Map = new EsriMap(mapProperties);
      // Set type of map view
      const mapViewProperties: esri.MapViewProperties = {
        container: this.mapViewEl.nativeElement,
        map: map
      };
      const mapView: esri.MapView = new EsriMapView(mapViewProperties);





      // portalItemLayers
      this.portalItemLayers(map, Layer);
      // search Functionality
      this.searchFunctionality(mapView, Search);

      // openStreetMapLayer
      // this.openStreetMapLayer(map, OpenStreetMapLayer);




      // All resources in the MapView and the map have loaded.
      // Now execute additional processes
      mapView.when(() => {
        this.mapLoaded.emit(true);
      });
    } catch (error) {
      alert('We have an error: ' + error);
    }

  }
      /************************************************
       * Search Functionality
       *
      *************************************************/
  searchFunctionality(mapView: esri.MapView, Search) {
      const props = [{
        locator: { url: 'https://services.arcgisonline.nl/arcgis/rest/services/Geocoder_BAG_RD/GeocodeServer' },
        singleLineFieldName: 'SingleLine',
        outFields: ['Adres', 'Postcode'],
        name: 'test',
        placeholder: 'test placeholder',
      }];


      const search = new Search({
        view: mapView,
        sources: props
      }
      );
     mapView.ui.add(search, {
        position: 'top-left',
        index: 2
      });
  }

       /************************************************
       * portalItemLayers: given a portalItem id ,  the map and the Layer object
       * one can add a dataset layer on the map.
       *************************************************/

  portalItemLayers(map: esri.Map, Layer, portalItem?: string) {

      Layer.fromPortalItem({
        portalItem: {
          id: this._layerPortalItem;
        }
       }).then((layer) => {map.add(layer); }).catch((error) => { console.log(error); });

  }

  /**
   * Open Street Map Layer: adds roads to all the roads
   */

  openStreetMapLayer(map: esri.Map, OpenStreetMapLayer){
    // tslint:disable-next-line:prefer-const
    let openStreetMapObject = new OpenStreetMapLayer();
    map.add(openStreetMapObject);
  }

  ngOnInit() {
    this.initializeMap();
  }

}
