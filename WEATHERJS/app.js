// Init weather object
const weather = new Weather('Boston', 'MA');
// Init UI
const ui = new UI();

// get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// weather.changeLocation('Miami', 'FL');

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
