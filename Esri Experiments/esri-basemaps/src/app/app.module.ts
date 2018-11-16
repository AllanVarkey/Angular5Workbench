import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// PrimeNg Modules
import { DropdownModule } from 'primeng/dropdown';
import { EsriMapComponent } from './component/esri-map/esri-map.component';




@NgModule({
  declarations: [
    AppComponent,
    EsriMapComponent

  ],
  imports: [
    BrowserModule,
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
