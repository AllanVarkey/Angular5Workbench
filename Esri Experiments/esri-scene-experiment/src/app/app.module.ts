import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EsriMapComponent } from './component/esri-map/esri-map.component';
import { EsriSceneComponent } from './component/esri-scene/esri-scene.component';


@NgModule({
  declarations: [
    AppComponent,
    EsriMapComponent,
    EsriSceneComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
