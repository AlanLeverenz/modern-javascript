class Weather {
  constructor(city, state) {
    this.apiKey = '7d4f2cda5bab002442683b32490d0c00';
    this.city = city;
    this.state = state;
  }

  // Fetch weather from API
  async getWeather() {
    // Get city ID (cid) for matching city and state from db.json
    const promise = await fetch('http://localhost:3000/cities');
    const data = await promise.json();
    const index = data.findIndex(
      (i) => i.name === this.city && i.state === this.state
    );
    const cid = data[index].id;
    // console.log(`index: ${index}, id: ${cid}`);

    // Fetch city weather data from OpenWeather
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?id=${cid}&appid=${this.apiKey}`
    );

    const responseData = await response.json();
    // console.log(responseData);
    // console.log(Math.round(responseData.main.temp * 1.8 - 459.67));
    return responseData;
  }

  // Change weather location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}
