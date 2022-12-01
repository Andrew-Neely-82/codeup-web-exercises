`use strict`;

//* generates the mapbox map
mapboxgl.accessToken = mapboxKey;
const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v12",
  center: [-97.74023, 31.12035], // starting position [lng, lat]
  zoom: 15, // starting zoom
});

const restaurants = [
  {
    name: "Kebabistan Grill",
    description: "Kebabistan is a turkish style restaurant",
    coordinates: [-97.74023, 31.12035],
    directions: `https://www.google.com/maps/dir/?api=1&destination=Kebabistan+Grill`,
  },
  {
    name: "Panera Bread",
    description: `Panera Bread serves fresh foods and has a delicious bakery`,
    coordinates: [-97.72069, 31.09256],
    directions: `https://www.google.com/maps/dir/?api=1&destination=Panera+Bread`,
  },
  {
    name: "Texas Roadhouse",
    description: "Texas Roadhouse is a steak and casual american style meal restaurant",
    coordinates: [-97.7013730017652, 31.083025278452553],
    directions: `https://www.google.com/maps/dir/?api=1&destination=Texas+Roadhouse`,
  },
];

restaurants.forEach(function (restaurant) {
  new mapboxgl.Marker()
    .setLngLat(restaurant.coordinates)
    .setPopup(new mapboxgl.Popup().setHTML(`<h1>${restaurant.name}</h1><p>${restaurant.description}</p><button class="directions-button"><a href="${restaurant.directions}" target="blank">Directions</a></button>`))
    .addTo(map);
});

$(document).ready(() => {
  // Zoom feature
  $(`.zoom-in`).click(() => {
    map.zoomIn();
  });
  $(`.zoom-out`).click(() => {
    map.zoomOut();
  });
  // remove marker feature
  $(`.remove-marker`).click(() => {
    $(`.mapboxgl-marker`).remove();
  });
  // search feature
  $(`.search`).click(() => {
    const search = $(`.search-input`).val();
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${search}.json?access_token=${mapboxgl.accessToken}`;
    $.ajax({
      url: url,
      success: (data) => {
        const coordinates = data.features[0].center;
        map.flyTo({
          center: coordinates,
          zoom: 15,
        });
      },
    });
  });
  $(`.search-input`).keypress((e) => {
    if (e.which === 13) {
      $(`.search`).click();
    }
  });
});
