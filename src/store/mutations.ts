import Backend from "@/plugins/backend";
import { State, Marker } from "@/types";

export function addMarker(state: State, marker: Marker) {
  state.markers?.push(marker);
  if (state.markers) Backend.updateMarkersInStorage(state.markers);
}

export function setActiveMarker(state: State, markerId: number) {
  state.activeMarker = markerId;
}

export function setMapCenter(
  state: State,
  { lat, lng }: { lat: number; lng: number }
) {
  state.mapCenter = [lat, lng];
}

export function setErrorStatus(state: State, errorStatus: boolean) {
  state.error = errorStatus;
}