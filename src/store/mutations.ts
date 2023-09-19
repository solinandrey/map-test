import { State, Marker } from "@/types";

export function addMarker(state: State, marker: Marker) {
  state?.markers?.push(marker);
}

export function setActiveMarker(state: State, markerId: number) {
  state.activeMarker = markerId;
}