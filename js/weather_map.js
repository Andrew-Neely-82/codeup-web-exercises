(() => {
  `use strict`;

  // * TODO: Using HTML, CSS, jQuery, AJAX, and the OpenWeatherMap API, start by showing the current conditions for city you live in on your page.
  $.get("http://api.openweathermap.org/data/2.5/weather", {
    APPID: weatherKey,
    q: "Fort Bragg, US",
  });

  // TODO: Update your layout and AJAX request(s) to display a five day forecast for the city you live in that looks like the screenshot below.

  

  // TODO: If you want to add the icons the URLs for OpenWeatherMap's icons are formatted like: http://openweathermap.org/img/w/[icon].png where [icon] comes from the API response.

  // TODO: Refer to your Mapbox API exercise. Recreate the map below your 5 day forecast. Read through the documentation for the Mapbox API and figure out how to allow the user to drop a pin on any place on the map. Once the user drops a pin, grab its coordinates and feed those into your OpenWeatherMap API. Update the five-day forecast with the information from those coordinates (you should also get rid of your input boxes at this point).

  // TODO: Add a Mapbox text input to search by location and have the forecast update when a new location is searched.

  // TODO: As a bonus make sure you can update the marker's position to the new search result.
})();
