// Init storage
const storage = new Storage();
// Get stored location data
const weatherLocation = storage.getLocationData();

// Init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.state);

// Init UI
const ui = new UI();

// get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
document.getElementById('w-change-btn').addEventListener('mouseup', (e) => {
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;

  // Change location
  weather.changeLocation(city, state);

  // Set location in LS
  storage.setLocationData(city, state);

  // Get and display weather
  getWeather();

  // Close modal
  $('#locModal').modal('hide');
});

function getWeather() {
  weather
    .getWeather()
    .then((results) => {
      ui.paint(results);
    })
    .catch((err) => console.log(err));
}

//******************************** */

// conversion from Kelvin to Fahrenheit
// [°F] = [K] × ​9⁄5 − 459.67

// conversion from Kelvin to Celsius
// [°C] = [K] − 273.15

// conversion from Fahrenheit to Celsius
// [°C] = ([°F] − 32) × ​5⁄9

// conversion from Celsius to Fahrenheit
// [°F] = [°C] × ​9⁄5 + 32
