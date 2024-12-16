// setup
import { call_api } from './api.js'

var map = L.map('map').setView([39, -97], 4.5);  // set map up, views USA

// tilelayer from openstreemap
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let current_marker = null;

function onMapClick(e) { 
    create_pointer(e.latlng);
    call_api(e.latlng);  // api.js
}

function create_pointer(coordinates) {
    // If a marker already exists, update its position
    if (current_marker) {
        current_marker.setLatLng([coordinates.lat, coordinates.lng]);
    } else {
        current_marker = L.marker([coordinates.lat, coordinates.lng]);
        current_marker.addTo(map);
    }
}

map.on('click', onMapClick);