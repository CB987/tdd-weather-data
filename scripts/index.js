// Implement the following functions to fulfill the tests!
function getLocationName(atlWeather) {
  return atlWeather.name;
}
function getLocationCountry(atlWeather) {
  return atlWeather.sys.country;
}
function getLocationLatitude(atlWeather) {
  return atlWeather.coord.lat;
}
function getLocationLongitude(atlWeather) {
  return atlWeather.coord.lon;
}
function getDescription(atlWeather) {
  return atlWeather.weather[0].description;
}
function getWindSpeed(atlWeather) {
  return atlWeather.wind.speed;
}
function getSunrise(atlWeather) {
  return atlWeather.sys.sunrise;
}

// Please ignore the following
try {
  module.exports = {
    getLocationName,
    getLocationCountry,
    getLocationLatitude,
    getLocationLongitude,
    getDescription,
    getWindSpeed,
    getSunrise
  };
} catch (e) {}
