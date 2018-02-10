// mapid points to <div id="mapid"></div>
var mymap = L.map('mapid').setView([51.50, -116.0], 12);
var api_url = 'https://api.tiles.mapbox.com/' +
    'v4/{id}/{z}/{x}/{y}.png?access_token=' +
    'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.' +
    'rJcFIG214AriISLbB6B5aw';

// The api url determines the location of the map
// You need to request to create an account and get an api if you want to customize the location
L.tileLayer(api_url, {
    maxZoom: 12,
    attribution: 'Map data', // The content will show at the bottom right of the map
    id: 'mapbox.run-bike-hike'
}).addTo(mymap);

// Marker on the map
L.marker([51.24, -116.13])
    .addTo(mymap)
    .bindPopup("<b>Lake Louise</b>") // Give the marker a name
    .openPopup();

// Print the longitude and latitude of the location that you clicked
function onMapClick(location) { 
    alert("You clicked the map at " + location.latlng); 
}

// When you click anywhere on the map, it will call the onMapClick function
mymap.on('click', onMapClick);