import { Component } from '@angular/core';
import { Layer } from './model/layer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  mapPortalItem = '372b7caa8fe340b0a6300df93ef18a7e';
  // H2SafetyMap Residence :'dc5f81b8f9934bb194f4a3f284651d4f';
  // Empty Map : 372b7caa8fe340b0a6300df93ef18a7e
  layerPortalItems = ['576ff17d12d045e094494e273632b74c'];

  layerUrls = ['https://services6.arcgis.com/WPy7n4au9iRiYgbP/arcgis/rest/services/H2Safety_Training_EPZ/FeatureServer'];

  //  H2Safety Whitelabel Residence:  '576ff17d12d045e094494e273632b74c';
  //  H2Safety EPZ training:  '7198585cc909444cae3b1c9c1d9af4fe';
  // Sample Feature Layer: '8444e275037549c1acab02d2626daaee';
  // Sample Feature Layer: '2e8d3c53bfe24a72a7301607365d0b60';

  mapLayerItems: Array<Layer> = [{
    portalId: '576ff17d12d045e094494e273632b74c'
  },
  {
    url: 'https://services6.arcgis.com/WPy7n4au9iRiYgbP/arcgis/rest/services/H2Safety_Training_EPZ/FeatureServer',
     properties: {
      opacity: .50
    }
  }];


  mapLoadedEvent(status: boolean) {
    console.log('The map has loaded: ' + status);
  }
}
