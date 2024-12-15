// setup
import { call_api } from './api.js'
var map = L.map('map').setView([40.75, -99.39], 4.5);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

function onMapClick(e) { 
    call_api(e.latlng);
    create_pointer(e.latlng);
}

function create_pointer(coordinates) {
    L.marker([coordinates.lat, coordinates.lng]).addTo(map);
}

map.on('click', onMapClick);