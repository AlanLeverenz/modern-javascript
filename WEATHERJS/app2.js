// getJSON jQuery example pulling data from file

$.getJSON('yourjsonfile.json', function (data) {
  console.log('JSON Data: ' + data);
  $.each(data, function (key, val) {
    console.log(key + 'value:: ' + val);
  });
});

// start of app.js file

$(document).ready(function () {
  var appID = '7d4f2cda5bab002442683b32490d0c00';

  $('.query_btn').click(function () {
    var query_param = $(this).prev().val();
  });
});

$(document).ready(function () {
  var appID = '7d4f2cda5bab002442683b32490d0c00';

  $('.query_btn').click(function () {
    var query_param = $(this).prev().val();

    if ($(this).prev().attr('placeholder') == 'City') {
      var weather =
        'http://api.openweathermap.org/data/2.5/weather?q=' +
        query_param +
        '&id=524901' +
        '&APPID=' +
        appID;
    } else if ($(this).prev().attr('placeholder') == 'Zip Code') {
      var weather =
        'http://api.openweathermap.org/data/2.5/weather?zip=' +
        query_param +
        '&id=524901' +
        '&APPID=' +
        appID;
    }
  });
});

$(document).ready(function () {
  var appID = '7d4f2cda5bab002442683b32490d0c00';

  $('.query_btn').click(function () {
    var query_param = $(this).prev().val();

    if ($(this).prev().attr('placeholder') == 'City') {
      var weather =
        'http://api.openweathermap.org/data/2.5/weather?q=' +
        query_param +
        '&id=524901' +
        '&APPID=' +
        appID;
    } else if ($(this).prev().attr('placeholder') == 'Zip Code') {
      var weather =
        'http://api.openweathermap.org/data/2.5/weather?zip=' +
        query_param +
        '&id=524901' +
        '&APPID=' +
        appID;
    }

    $.getJSON(weather, function (json) {
      $('#city').html(json.name);
      $('#main_weather').html(json.weather[0].main);
      $('#description_weather').html(json.weather[0].description);
      $('#weather_image').attr(
        'src',
        'http://openweathermap.org/img/w/' + json.weather[0].icon + '.png'
      );
      $('#temperature').html(json.main.temp);
      $('#pressure').html(json.main.pressure);
      $('#humidity').html(json.main.humidity);
    });
  });

  // Optional Code for temperature conversion
  var fahrenheit = true;

  $('#convertToCelsius').click(function () {
    if (fahrenheit) {
      $('#temperature').text((($('#temperature').text() - 32) * 5) / 9);
    }
    fahrenheit = false;
  });

  $('#convertToFahrenheit').click(function () {
    if (fahrenheit == false) {
      $('#temperature').text($('#temperature').text() * (9 / 5) + 32);
    }
    fahrenheit = true;
  });
});

const openweatherNYC5128581 = {
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
};
