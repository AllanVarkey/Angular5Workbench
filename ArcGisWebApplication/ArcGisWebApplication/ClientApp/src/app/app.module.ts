import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { ArcGisComponent } from './components/arc-gis/arc-gis.component';
import { MapformComponent } from './components/mapform/mapform.component';
import { EsriMapComponent } from './components/esri-map/esri-map.component';
import { PanelModule } from 'primeng/panel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MapsandboxComponent } from './components/mapsandbox/mapsandbox.component';
import { MapservicesService } from './services/mapservices.service';
import { TabViewModule } from 'primeng/tabview';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    ArcGisComponent,
    MapformComponent,
    EsriMapComponent,
    MapsandboxComponent

      ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    PanelModule,
    BrowserAnimationsModule,
    ButtonModule,
    TabViewModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ArcGisComponent },
      { path: 'mapsandbox', component: MapsandboxComponent }
    ])
  ],
  providers: [MapservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
