var apiKey;
var searchHistory = [];
var pastSearches;

// HTML Elements
var date = new Date();
var time = date.toLocaleTimeString();
var localeDate = date.toLocaleDateString();
var city = document.getElementById("city");
city = city.textContent;
var forecast = document.getElementById("7day_forecast");
forecast = forecast.innerHTML;
var searchButton = document.getElementById("search_btn");
var searchHistoryContainer = document.getElementById("search_history");
var uvIndex = document.getElementById("uv_index");

function submitForm() {
  // fetch the cityName from the text input
  // Call the getLocation and pass the city name
  // preventDefault to make sure form doesnt reset
}

function showSearchHistory() {
  // show previous searches
  // get searches from local storage
}

function showCurrent() {
  // append current weather info to the page
}

function show7Day() {
  // append 7 day forecast info to the page
}

function getCityLocation() {}

function getCurrentWeather() {
  // get forecast info
  /* show current Temp w/ icon
   show current Humidity
   show Winds Speeds
   show UV index*/
}

function get7DayWeather() {
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

console.log(time);
console.log(localeDate);

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
