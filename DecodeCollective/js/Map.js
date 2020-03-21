//*** MAP ***//
mapboxgl.accessToken = 'pk.eyJ1IjoiYW5uYWthbXAiLCJhIjoiY2pxcGQ2dDJuMDBjbzQ0bnV0eDU0Y2dxciJ9.cXjuy1PnrpFANm1UItLJww';
var map = new mapboxgl.Map({
    container: 'map', // Container ID
    style: 'mapbox://styles/annakamp/ck7gkqyfj1srz1imrg3f1j9h5', // Map style to use
    center: [7.3072819,45.9083282], // Starting position [lng, lat]
    zoom: 3.5, // Starting zoom level
    preserveDrawingBuffer: true,
    language: 'en-EN',
    //dragPan: false
});


// //---------------- Geocoder  ---------------//
// var geocoder = new MapboxGeocoder({ // Initialize the geocoder
//     accessToken: mapboxgl.accessToken, // Set the access token
//     mapboxgl: mapboxgl, // Set the mapbox-gl instance
//     marker: false, // Do not use the default marker style
//     placeholder: 'Search for a place', // Placeholder text for the search bar
//     language: 'en',
//     limit: 1,
//     zoom: 15

// });

// // Add the geocoder to the map
// map.addControl(geocoder);

map.addControl(new mapboxgl.ScaleControl({
    position: 'bottom-right'
}));
// document.getElementById('geocoder').appendChild(geocoder.onAdd(map));

map.on('load', function () {
    map.addSource('single-point', {
        type: 'geojson',
        data: {
            type: 'FeatureCollection',
            features: []
        }
    });

    // // Listen for the `result` event from the Geocoder
    // // `result` event is triggered when a user makes a selection
    // geocoder.on('result', function (ev) {
    //     map.getSource('single-point').setData(ev.result.geometry);
    // });

    //---------------- Set map language
    map.setLayoutProperty('country-label', 'text-field', [
        'get',
        'name_en'
    ]);
    map.setLayoutProperty('state-label', 'text-field', [
        'get',
        'name_en'
    ]);
   
});

// disable map rotation using right click + drag
map.dragRotate.disable();
// disable map rotation using touch rotation gesture
map.touchZoomRotate.disableRotation();

// make a marker for each feature and add to the map
let el = document.createElement('div');
  el.className = 'marker';

new mapboxgl.Marker(el)
.setLngLat([-0.11472,51.51299])
.addTo(map);

let elA = document.createElement('div');
  elA.className = 'marker';
new mapboxgl.Marker(elA)
.setLngLat([23.7613095,37.9851516])
.addTo(map);