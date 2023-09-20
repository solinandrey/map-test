import {Marker} from '../types';

class Backend {
  constructor() {}
  
  async updateMarkersInStorage(markers: Marker[]) {
    localStorage.markers = JSON.stringify([...markers]);
  }

  async getMarkersFromStorage() {
    if (localStorage.markers) return JSON.parse(localStorage.markers);
  }
}

export default new Backend();