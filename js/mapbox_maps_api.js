// TODO
// Generate a map that shows the city with your favorite restaurant using geocoding.
mapboxgl.accessToken = "pk.eyJ1IjoiYW5kcmV3bmVlbHkiLCJhIjoiY2xiMm9rZnY2MDZqNDNwcWVxdWZmeHpsdCJ9.uVgP2A2FNPbrYaF1e2C2vw";
const map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/mapbox/streets-v12", // style URL
  center: [-97.74023, 31.12035], // starting position [lng, lat]
  zoom: 20, // starting zoom
});

// TODO
// Redraw the map of the above location at zoom levels 5, 15, and 20.
// Do this by simply changing the value of zoom level where the map properties are initially set and refresh the page to see the changes.
// Can the zoom be changed programmatically after the initial map is drawn?

// TODO
// Create a marker on your map of the exact location of your favorite restaurant set the zoom to allow for best viewing distance.

// TODO
// Create a popup with the name of the restaurant.
const popup = new mapboxgl.Popup({ closeOnClick: false })
.setLngLat([-97.74023, 31.12035])
.setHTML('<h1 class="mapbox-h1">Kebabistan Grill</h1><p class="mapbox-p">Kebabistan Grill is a restaurant located in Killeen, Texas at 1001 East Central Texas Expressway. They are open every day of the week.</p>')
// .setHTML('<p class="mapbox-p">Kebabistan Grill is a restaurant located in 921 W Veterans Memorial Blvd suite 106, Killeen, TX 76541. They are open every day of the week.</p>')
.addTo(map);

// TODO
// Make sure the info window does not display until the marker has been clicked on.

// TODO
// Refactor your code to display at least three of your favorite restaurants with information about each.
// Create an array of objects with information about each restaurant to accomplish this.
// Use a .forEach() loop rather than a for loop.

let arrayOfObjectsForRestaurants = [{}];

arrayOfObjectsForRestaurants.forEach(function (restaurant) {
  // TODO
});
