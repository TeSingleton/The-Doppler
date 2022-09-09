var apiKey;
var searchHistory = [];
var pastSearches;

// HTML Elements
var date = new Date();

// varible initialized with html element with the ID of city
var cityName = document.getElementById("city_name");
var forecast = document.getElementById("7day_forecast");
var searchButton = document.getElementById("search_btn");
var searchHistoryContainer = document.getElementById("search_history");
var uvIndex = document.getElementById("uv_index");
var currentTemp = document.getElementById("current_temp")
var currentHumidity = document.getElementById("humidity")
// todo add weather icons

//* Remeber YOUR `Why?`...

//  create time variable and add to the page
var time = date.toLocaleTimeString();
document.getElementById("time").innerText = time;
// create date variable and add to the page
var localeDate = date.toLocaleDateString();
document.getElementById("date").innerText = localeDate;


var newCity = "tokyo";
// get the city location
function getCityLocation() {
  // variable initialized with the geoLocation API
  var lati;
  var long;
  var geoDataApi = `https://api.openweathermap.org/geo/1.0/direct?q=${newCity}&limit=5&appid=d9fd8247a7260c41e5441662fe670a6b`;

  fetch(geoDataApi).then(function (response) {
    if (response.ok) {
      return response.json().then(function (data) {
        console.log(data);
        lati = data[0].lat;
        console.log(lati);
        long = data[0].lon;
        console.log(long);
        newCity = data[0].name;
        get7DayWeather(lati, long);
      });
    }
  });
}
getCityLocation();

function get7DayWeather(lati, long) {
  var getWeather = `https://api.openweathermap.org/data/2.5/onecall?lat=${lati}&lon=${long}&units=imperial&appid=d9fd8247a7260c41e5441662fe670a6b`;

  fetch(getWeather)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      temp = data.current.temp;
      wind = data.current.wind_speed;
      humidity = data.current.humidity;
      uvI = data.current.uvi;
      forecast = data.daily;
      icon = data.current.weather[0].icon;
      console.log(temp, wind, humidity, uvI, icon);
      showWeather(temp, wind, humidity, uvI, forecast, icon);
    });
}

function showWeather(temp, wind, humidity, uvI, forecast, icon) {
  cityName.textContent = newCity;
  uvIndex.textContent = uvI;
}
showWeather();


function clearWeatherData() {
  // to be called when a new search is submitted
}

// add an
console.log(time);
console.log(localeDate);

//* Its amazing what we are able to do.
//* If you're reading this , just recognize that You are Dope!

//*Thank you for Reading My Code

// function showCurrent() {
//   // append current weather info to the page
// }

// function submitSearch() {
//   console.log("clicked")
//  showCurrent();
//  show7Day();

//   // fetch the cityName from the text input
//   // Call the getLocation and pass the city name
//   // preventDefault to make sure form doesnt reset
// }
// submitSearch()
// function showSearchHistory() {
//   // show previous searches
//   // get searches from local storage
// }

// function show7Day() {
//   // append 7 day forecast info to the page
// }

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
