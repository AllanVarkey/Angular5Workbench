import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  // Set our map properties
   mapPortalItem = 'ad5759bf407c4554b748356ebe1886e5';
  //  layerPortalItem = '8444e275037549c1acab02d2626daaee';

   mapLoadedEvent(status: boolean) {
     console.log('The map has loaded: ' + status);
   }
}
