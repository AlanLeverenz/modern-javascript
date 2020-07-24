class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    // this.country = document.getElementById('w-country');
    this.desc = document.getElementById('w-desc');
    this.temp = document.getElementById('w-temp');
    this.pressure = document.getElementById('w-pressure');
    this.humidity = document.getElementById('w-humidity');
    this.feelsLike = document.getElementById('w-feels-like');
    this.wind = document.getElementById('w-wind');
    this.icon = document.getElementById('w-icon');
  }

  paint(weather) {
    this.location.textContent = weather.name;
    // this.country.textContent = weather.sys.country;
    this.desc.textContent = weather.weather[0].description;
    this.temp.textContent = Math.round(weather.main.temp * 1.8 - 459.67) + ' F';
    this.pressure.textContent = `Pressure: ${weather.main.pressure}`;
    this.humidity.textContent = `Humidity: ${weather.main.humidity}`;
    this.feelsLike.textContent = `Feels like: ${Math.round(
      weather.main.feels_like * 1.8 - 459.67
    )}`;
    this.wind.textContent = `Wind: ${weather.wind.speed}`;
    this.icon.setAttribute(
      'src',
      `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
    );
  }
}

//   capitalize = (str) => {
//     var splitStr = str.toLowerCase().split(' ');
//     for (var i = 0; i < splitStr.length; i++) {
//       splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
//     }
//     return splitStr.join(' ');
//   };

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
