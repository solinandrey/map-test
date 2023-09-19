import { State, Marker } from "@/types";

export function addMarker(state: State, marker: Marker) {
  state.markers.push(marker);
}
