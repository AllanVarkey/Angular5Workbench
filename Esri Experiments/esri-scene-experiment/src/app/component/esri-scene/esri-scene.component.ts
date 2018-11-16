import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { loadModules } from 'esri-loader';
import esri = __esri;

@Component({
  selector: 'app-esri-scene',
  templateUrl: './esri-scene.component.html',
  styleUrls: ['./esri-scene.component.css']
})
export class EsriSceneComponent implements OnInit {
  @ViewChild('sceneView') private mapViewEl: ElementRef;

  private _map: esri.Map;
  private _sceneView: esri.SceneView;

  constructor() { }

  async initializeScene() {
    try {
      const [EsriMap, EsriScene] = await loadModules(['esri/WebMap', 'esri/views/SceneView']);
      const mapProperties: esri.WebMapProperties = {
        basemap: 'streets',
        ground: 'world-elevation'
      };
      this._map = new EsriMap(mapProperties);

      const sceneProperties = new EsriScene({
        container: 'sceneView',
        map: this._map,
        scale: 50000000,
        center: [-101.17, 21.78]
      });

      const sceneView: esri.SceneView = new EsriScene(sceneProperties);

    } catch (error) {
      alert('We have an error: ' + error);
    }
  }

  ngOnInit() {
    this.initializeScene();
  }

}
