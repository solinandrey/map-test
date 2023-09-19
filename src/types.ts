export interface Marker {
  lat: number;
  lng: number;
  address: string;
  id: number;
}

export interface State {
  markers: Marker[] | null;
  activeMarker: number | null;
}