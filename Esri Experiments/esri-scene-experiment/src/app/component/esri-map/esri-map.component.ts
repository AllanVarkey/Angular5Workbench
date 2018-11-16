
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

  /**
   * @private _zoom sets map zoom
   * @private _center sets map center
   * @private _basemap sets type of map
   */
  private _zoom: number = 10;
  private _center: Array<number> = [0.1278, 51.5074];
  private _basemap: string = 'dark-gray';

  @Input()
  set zoom(zoom: number) {
    this._zoom = zoom;
  }

  get zoom(): number {
    return this._zoom;
  }

  @Input()
  set center(center: Array<number>) {
    this._center = center;
  }

  get center(): Array<number> {
    return this._center;
  }

  @Input()
  set basemap(basemap: string) {
    this._basemap = basemap;
  }

  get basemap(): string {
    return this._basemap;
  }

  constructor() { }

  async initializeMap() {
    try {
      const [EsriMapView, EsriMap, Search] = await loadModules([
        'esri/views/MapView', 'esri/WebMap', 'esri/widgets/Search'
      ]);

      // Set type of map
      const mapProperties: esri.WebMapProperties = {
        portalItem: {
          id: 'e691172598f04ea8881cd2a4adaa45ba'
          // id: 'ad5759bf407c4554b748356ebe1886e5'
    }
      };

     const map: esri.Map = new EsriMap(mapProperties);

      // Set type of map view
      const mapViewProperties: esri.MapViewProperties = {
        container: this.mapViewEl.nativeElement,
        map: map
      };

      const mapView: esri.MapView = new EsriMapView(mapViewProperties);

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

      // All resources in the MapView and the map have loaded.
      // Now execute additional processes
      mapView.when(() => {
        this.mapLoaded.emit(true);
      });
    } catch (error) {
      alert('We have an error: ' + error);
    }

  }


  ngOnInit() {
    this.initializeMap();
  }

}
