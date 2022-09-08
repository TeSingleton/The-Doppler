var apiKey;
var searchHistory = [];
var pastSearches;

// HTML Elements
var date = new Date();
//  create time variable and add to the page
var time = date.toLocaleTimeString();
document.getElementById("time").innerText = time;
// create date variable and add to the page
var localeDate = date.toLocaleDateString();
document.getElementById("date").innerText = localeDate;
// varible initialized with html element with the ID of city
var city = document.getElementById("city");
city = city.textContent;
var forecast = document.getElementById("7day_forecast");
forecast = forecast.innerHTML;
var searchButton = document.getElementById("search_btn");
var searchHistoryContainer = document.getElementById("search_history");
var uvIndex = document.getElementById("uv_index");

function showCurrent() {
  // append current weather info to the page
}

function submitForm() {
  // fetch the cityName from the text input
  // Call the getLocation and pass the city name
  // preventDefault to make sure form doesnt reset
}

function showSearchHistory() {
  // show previous searches
  // get searches from local storage
}

function show7Day() {
  // append 7 day forecast info to the page
}
//* Remeber YOUR `Why`...
// get the city location
function getCityLocation(city) {
  // variable initialized with the geoLocation API
  var geoDataApi =
    "http://api.openweathermap.org/geo/1.0/direct?q=" +
    city +
    "as&appid=d9fd8247a7260c41e5441662fe670a6b";

  fetch(geoDataApi).then(function (response) {
    if (response.ok) {
      return response.json().then(function (data) {
        console.log(data);
      });
    } else {
      console.log(response.status);
    }
  });
}
getCityLocation("las veg");

function getCurrentWeather(data) {
  var currentWeatherApi =
    "https://api.openweathermap.org/data/2.5/onecall?lat=36.1672559&lon=-115.148516&units=imperial&exclude=hourly,minutely&appid=d9fd8247a7260c41e5441662fe670a6b";

  fetch(currentWeatherApi).then(function (response) {
    if (response.ok) {
      return response.json().then(function (data) {
        console.log(data);
      });
    }
  });
  // get forecast info
  /* show current Temp w/ icon
   show current Humidity
   show Winds Speeds
   show UV index*/
}
getCurrentWeather();

//  get the 7Day forecast
function get7DayWeather() {
  var forecastAPI =
    "https://api.openweathermap.org/data/2.5/forecast/?lat=36.1672559&lon=-115.148516&cnt=7&units=imperial&appid=d9fd8247a7260c41e5441662fe670a6b";

  fetch(forecastAPI).then(function (response) {
    if (response.ok) {
      return response.json().then(function (data) {
        console.log(data);
      });
    }
  });

  get7DayWeather();

  // get forecast info
  // appened forecast info to the html
  /* show current Temp w/ icon
   show current Humidity
   show Winds Speeds
   show UV index*/
}

function clearWeatherData() {
  // to be called when a new search is submitted
}

// add an
console.log(time);
console.log(localeDate);

//* Its amazing what we are able to do.
//* If you're reading this , just recognize that You are Dope!

//*Thank you for Reading My Code
// GIVEN a weather dashboard
// ...with form inputs ✅

// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history
// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
// WHEN I view the UV index
// THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city

// weather icons url  http://openweathermap.org/img/wn/10d@2x.png
// from the web address of https://openweathermap.org/weather-conditions
