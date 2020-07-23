// $(document).ready(function () {
//   $.getJSON('./city.list.json', function (data) {
//     console.log('JSON Data: ' + data);
//     $.each(data, function (key, val) {
//       console.log(key + 'value:: ' + val);
//     });
//   });
// });

// $(document).ready(function(){
//   $("button").click(function(){
//     $.getJSON("demo_ajax_json.js", function(result){
//       $.each(result, function(key, value){
//         $("div").append(key + ": " + value + ", ");
//       });
//     });
//   });
// });

class Weather {
  constructor(city, state) {
    this.apiKey = '7d4f2cda5bab002442683b32490d0c00';
    this.city = city;
    this.state = state;
  }

  // Fetch weather from API
  async getWeather() {
    // Fetch ID from city.list.json data using JSON-Server

    const promise = await fetch('http://localhost:3000/cities');
    let value = await promise.json();

    // get index position in array of objects
    // var elementPos = array.map(function(x) {return x.id; }).indexOf(idYourAreLookingFor);
    // var objectFound = array[elementPos];

    let id = value[0]['id'];
    console.log(value);
    console.log(id);
    // const id = await value.findIndex(['New York']);
    // const id = await '5128638';
    console.log(this);

    // Fetch city weather data from OpenWeather
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${this.apiKey}`
    );

    const responseData = await response.json();

    return [responseData.main, responseData.wind, responseData.weather[0].icon];
  }

  // Change weather location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}

// getWeather('New York', 'NY', '5128638');

// OpenWeather object

/*
const object = {
    coord: {
      lon: -74.01,
      lat: 40.71,
    },
    weather: [
      {
        id: 800,
        main: 'Clear',
        description: 'clear sky',
        icon: '01d',
      },
    ],
    base: 'stations',
    main: {
      temp: 304.55,
      feels_like: 304.53,
      temp_min: 301.48,
      temp_max: 306.15,
      pressure: 1016,
      humidity: 43,
    },
    visibility: 10000,
    wind: {
      speed: 3.6,
      deg: 160,
    },
    clouds: {
      all: 1,
    },
    dt: 1595370415,
    sys: {
      type: 1,
      id: 4610,
      country: 'US',
      sunrise: 1595324576,
      sunset: 1595377299,
    },
    timezone: -14400,
    id: 5128581,
    name: 'New York',
    cod: 200,
  }; */
