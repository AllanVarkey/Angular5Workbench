
import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { loadModules } from 'esri-loader';
import esri = __esri;
import { Layer } from '../../model/layer';


@Component({
  selector: 'app-esri-map',
  templateUrl: './esri-map.component.html',
  styleUrls: ['./esri-map.component.css']
})
export class EsriMapComponent implements OnInit {

  @Output() mapLoaded = new EventEmitter<boolean>();
  @ViewChild('mapViewNode') private mapViewEl: ElementRef;

  private _mapPortalItem: string;
  private _layerPortalItems: Array<string> = ['test'];
  private _layerUrlItems: Array<string>;

  private _mapLayers: Array<Layer>;

  @Input()
  set mapPortalItem(mapPortalItem: string) {
    this._mapPortalItem = mapPortalItem;
  }

  @Input()
  set layerPortalItems(mapLayerItems: Array<string>) {
    this._layerPortalItems = mapLayerItems;
  }

  @Input()
  set layerUrls(layerUrls: Array<string>) {
    this._layerUrlItems = layerUrls;
  }
  @Input()
  set mapLayerItems(mapLayers: Array<Layer>) {
    this._mapLayers = mapLayers;
  }

  constructor() { }

  async initializeMap() {
    try {
      const [EsriMapView, EsriMap, Search, EsriLayer, OpenStreetMapLayer] = await loadModules([
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
      // Layers as urls
      this._layerUrlItems.forEach((url) => {
          this.addUrlLayer(map, EsriLayer, url);
        });

    //  portalItemLayers
      this._layerPortalItems.forEach((layerPortalItem) => {
         this.addPortalItemLayer(map, EsriLayer, layerPortalItem);
      });




/**
 * STILL WORK IN PROGRESS CODE
 *
 *    this needs work . dont use it yet
       this._mapLayers.forEach((mapLayer) => {
         this.addMapLayers(map, EsriLayer, mapLayer);
       });
 */

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

  addPortalItemLayer(map: esri.Map, EsriLayer, portalId) {
    EsriLayer.fromPortalItem({
      portalItem: {
        id: portalId
      }
    })
    .then((layer) => {
      map.add(layer); })
    .catch((error) => { console.log(error);
       });

  }
  addUrlLayer(map: esri.Map, EsriLayer, arcgisUrl) {
    EsriLayer.fromArcGISServerUrl(
      {
        url: arcgisUrl,
        properties: {
          // set any layer properties here
          opacity: .50
        }
      }
    ).then((layer) => {map.add(layer); }).catch((error) =>{console.log(error); });

  }

  /**
   *  Following is the code for addMapy layers, addPortalItemLayer and addUrlImageLayer.
   * there is something wrong with the code therefore im not using it . for the time being stick calling them separatley
   *
   */

  // addMapLayers(map: esri.Map, EsriLayer, layerObject: Layer) {
  //   if (layerObject.portalId){
  //     this.addPortalItemLayer(map, EsriLayer, layerObject.portalId);
  //   } else if (layerObject.url){
  //     this.addUrlLayer(map, EsriLayer, layerObject);
  //   }
  // }


  // addPortalItemLayer(map: esri.Map, EsriLayer, layerObject) {
  //   EsriLayer.fromPortalItem({
  //     portalItem: {
  //       id: layerObject.portalId
  //     }
  //   })
  //   .then((layer) => {
  //     map.add(layer); })
  //   .catch((error) => { console.log(error);
  //      });

  // }
  // addUrlLayer(map: esri.Map, EsriLayer, layerObject) {
  //   EsriLayer.fromArcGISServerUrl(layerObject).then((layer) => {map.add(layer); }).catch((error) =>{console.log(error); });

  // }

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

  ngOnChanges() {
    this.initializeMap();
  }

}
