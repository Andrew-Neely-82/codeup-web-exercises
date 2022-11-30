`use strict`;

//* generates the mapbox map
mapboxgl.accessToken = "pk.eyJ1IjoiYW5kcmV3bmVlbHkiLCJhIjoiY2xiMm9rZnY2MDZqNDNwcWVxdWZmeHpsdCJ9.uVgP2A2FNPbrYaF1e2C2vw";
const map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/mapbox/streets-v12", // style URL
  center: [-97.74023, 31.12035], // starting position [lng, lat]
  zoom: 15, // starting zoom
});

// * marker locations

// let restaurants = {
//   type: "FeatureCollection",
//   features: [
//     {
//       type: "Feature",
//       geometry: {
//         type: "Point",
//         coordinates: [-97.74023, 31.12035],
//       },
//       properties: {
//         title: "Kebabistan Grill",
//         description: "Kebabistan Grill",
//       },
//     },
//     {
//       type: "Feature",
//       geometry: {
//         type: "Point",
//         coordinates: [-97.72069, 31.09256],
//       },
//       properties: {
//         title: "Mapbox",
//         description: "Panera Bread",
//       },
//     },
//     {
//       type: "Feature",
//       geometry: {
//         type: "Point",
//         coordinates: [-97.7013730017652, 31.083025278452553],
//       },
//       properties: {
//         title: "Texas Roadhouse",
//         description: "Texas Roadhouse is a restaurant located in Killeen, Texas at 1001 East Central Texas Expressway. They are open every day of the week.",
//       },
//     },
//   ],
// };

// for (const feature of restaurants.features) {
//   // create an HTML element for each feature
//   const el = document.createElement("div");
//   el.className = "marker";

//   // make a marker for each feature and add to the map
//   new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates).addTo(map);
// }

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
    $(`.marker`).remove();
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

const addMarker1 = () => {
  const marker = new mapboxgl.Marker();
  const minPopup = new mapboxgl.Popup();
  minPopup.setHTML(`<h1>Kebabistan Grill</h1><p>Kebabistan Grill is a restaurant located in Killeen, Texas at 1001 East Central Texas Expressway. They are open every day of the week.</p>`);
  marker.setPopup(minPopup);
  marker.setLngLat([-97.74023, 31.12035]);
  marker.addTo(map);
};
map.on(`load`, addMarker1);

const addMarker2 = () => {
  const marker = new mapboxgl.Marker();
  const minPopup = new mapboxgl.Popup();
  minPopup.setHTML(`<h1>Panera Bread</h1><p>Panera Bread is a restaurant located in Killeen, Texas at 1001 East Central Texas Expressway. They are open every day of the week.</p>`);
  marker.setPopup(minPopup);
  marker.setLngLat([-97.72069, 31.09256]);
  marker.addTo(map);
};
map.on(`load`, addMarker2);

const addMarker3 = () => {
  const marker = new mapboxgl.Marker();
  const minPopup = new mapboxgl.Popup();
  minPopup.setHTML(`<h1>Texas Roadhouse</h1><p>Texas Roadhouse is a restaurant located in Killeen, Texas at 1001 East Central Texas Expressway. They are open every day of the week.</p>`);
  marker.setPopup(minPopup);
  marker.setLngLat([-97.7013730017652, 31.083025278452553]);
  marker.addTo(map);
};
map.on(`load`, addMarker3);
