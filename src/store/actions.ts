import { Marker } from "@/types";
import Backend from '../plugins/backend'

export const getAddress = ({commit}: any, {lat, lng}: Marker) => {
  fetch(`https://geocode.maps.co/reverse?lat=${lat}&lon=${lng}`)
  .then(res => res.json())
  .then(data => {
    if (data.error) {
      commit('setErrorStatus', true);
      setTimeout(() => {
        commit('setErrorStatus', false);
      }, 2000);
    } else {
      commit('addMarker', {lat, lng, address: data.display_name, id: data.place_id});
    }
  });
}