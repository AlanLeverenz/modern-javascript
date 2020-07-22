// Init weather object
const weather = new Weather('Boston', 'MA');

// get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// weather.changeLocation('Miami', 'FL');

function getWeather() {
  weather
    .getWeather()
    .then((results) => {
      console.log(results);
    })
    .catch((err) => console.log(err));
}

//******************************** */
// const openweatherNYC5128581 = {
//   coord: {
//     lon: -74.01,
//     lat: 40.71,
//   },
//   weather: [
//     {
//       id: 800,
//       main: 'Clear',
//       description: 'clear sky',
//       icon: '01d',
//     },
//   ],
//   base: 'stations',
//   main: {
//     temp: 304.55,
//     feels_like: 304.53,
//     temp_min: 301.48,
//     temp_max: 306.15,
//     pressure: 1016,
//     humidity: 43,
//   },
//   visibility: 10000,
//   wind: {
//     speed: 3.6,
//     deg: 160,
//   },
//   clouds: {
//     all: 1,
//   },
//   dt: 1595370415,
//   sys: {
//     type: 1,
//     id: 4610,
//     country: 'US',
//     sunrise: 1595324576,
//     sunset: 1595377299,
//   },
//   timezone: -14400,
//   id: 5128581,
//   name: 'New York',
//   cod: 200,
// };
