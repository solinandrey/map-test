import { Marker } from "@/types";

export const getAddress = ({commit}: any, {lat, lng}: Marker) => {
  fetch(`https://geocode.maps.co/reverse?lat=${lat}&lon=${lng}`)
  .then(res => res.json())
  .then(data => {
    commit('addMarker', {lat, lng, address: data.display_name});
  });
}