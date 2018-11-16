// import { Extent } from 'esri/geometry';

export interface Layer {
  url?: string;
  portalId?: string;
  properties?: {
    declaredClass?: string;
    // fullExtent?: Extent;
    id?: string;
    listMode?: string;
    loaded?: boolean;
    loadError?: Error;
    loadStatus?: string;
    loadWarnings?: Object[];
    opacity?: number;
    title?: string;
    type?: string;
    visible?: boolean;
  };

}
