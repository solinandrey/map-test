export interface Marker {
  lat: number;
  lng: number;
  address: string
}

export interface State {
  markers: Marker[];
}