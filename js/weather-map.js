mapboxgl.accessToken = weatherKey;

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/navigation-preview-night-v4',
    zoom: 10,
    center: [-98.4936, 29.4241],
    interactive: true
});
var markerOptions = {
    color: "red",
    draggable: true,
    rotationAlignment: "auto",
    rotation: 70,
    anchor: "top",
}
var marker = new mapboxgl.Marker(markerOptions)
    .setLngLat([-98.4936, 29.4241])
    .addTo(map);