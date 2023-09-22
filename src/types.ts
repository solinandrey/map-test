export interface Marker {
  lat: number;
  lng: number;
  address: string;
  id: number;
}

export interface State {
  mapCenter: number[];
  markers: Marker[] | null;
  activeMarker: number | null;
  error: boolean;
}