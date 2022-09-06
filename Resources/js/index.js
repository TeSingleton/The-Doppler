// var apiKey =() ;

// const apiKey = require(dotenv).config();

// var weatherApiUrl=`http://api.openweathermap.org/geo/1.0/direct?q=${city name},{state code},{country code}&{limit}=limit&appid={apiKey}`
var cityName = document.getElementById("city_name");
cityName = cityName.textContent;

// submit the form to fetch weather information

// Fetch the city name from the text<input>

// Call the 'getLocation' and pass the city name
var submiT = document.getElementById("search-btn");

// handle button click to fetch  weather information/////////////////////////////////////
//  Get the city name from the clicked buttons (event.target) data-city attribute

// call the getLocation and pass the city name
function searcH() {
  getLocation(cityName);
}

// fetch geolocation data (geocoding api)
// onclick event listener

console.log("are you attached");

//fetch Geolocation Data (geocoding API)
function getLocation(cityName) {
//   var request = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName},&appid=${apiKey}`;
var request = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName},&appid=d9fd8247a7260c41e5441662fe670a6b`;
// var request ='http://api.openweathermap.org/geo/1.0/direct?q=Las%20Vegas&appid=d9fd8247a7260c41e5441662fe670a6b'
  fetch(request)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      //Access lat and lon from data
    //   call fetchOneCallWeather and pass thru the lat and long
    });
}
getLocation('las vegas');

// fetch weather data (onecall)
function fetchOneCallWeather(lat,lon) {
  var request= ' https://api.openweathermap.org/data/2.5/onecall?lat=36.1672559&lon=-115.148516&units=imperial&exclude=hourly,minutely&appid=d9fd8247a7260c41e5441662fe670a6b'
//   var request= ' https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=-${lon}&units=imperial&exclude=hourly,minutely&appid=${apiKey}'
  console.log(request)
  fetch(request)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    // render/ dispaly the weather data
  });
}

fetchOneCallWeather()
console.log("attached");
