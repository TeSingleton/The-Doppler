var apiKey;
var searchHistory = [];
var pastSearches;

// HTML Elements
var date = new Date();
console.log(date);
// varible initialized with html element with the ID of city
var cityName = document.getElementById("city_name");
var sevenDayForecast = document.getElementById("7day_forecast");

var weatherCard = document.getElementById("weathercard");
var searchButton = document.getElementById("search_btn");
var searchHistoryContainer = document.getElementById("search_history");
var searchInput = document.getElementById("city");
var uvIndex = document.getElementById("uv_index");
var currentTemp = document.getElementById("current_temp");
var currentHumidity = document.getElementById("humidity");
var windSpeed = document.getElementById("wind_speed");

var iconUrl = `https://openweathermap.org/img/wn/`;
// todo add weather icons

// 7day Forecasts (days)
var day1 = document.getElementById("day1");

var day2 = document.getElementById("day2");
var day3 = document.getElementById("day3");
var day4 = document.getElementById("day4");
var day5 = document.getElementById("day5");
var day6 = document.getElementById("day6");
var day7 = document.getElementById("day7");

//* Remeber YOUR `Why?`...

//  create time variable and add to the page
var time = date.toLocaleTimeString();
document.getElementById("time").innerText = time;
// create date variable and add to the page
var localeDate = date.toLocaleDateString();
document.getElementById("date").innerText = localeDate;

// get the city location
function getCityLocation(newCity) {
  //make sure function is able to accept a variable.
  // variable initialized with the geoLocation API
  var lati;
  var long;
  var geoDataApi = `https://api.openweathermap.org/geo/1.0/direct?q=${newCity}&limit=7&appid=d9fd8247a7260c41e5441662fe670a6b`;

  fetch(geoDataApi).then(function (response) {
    //unformatted
    if (response.ok) {
      return response.json().then(function (data) {
        //json formated becomes the obj called data
        console.log(data);
        lati = data[0].lat;
        console.log(lati);
        long = data[0].lon;
        console.log(long);
        currentCity = data[0].name;

        get7DayWeather(lati, long, currentCity);
      });
    }
  });
}
getCityLocation("seattle");

function get7DayWeather(lati, long, currentCity) {
  var getWeather = `https://api.openweathermap.org/data/2.5/onecall?lat=${lati}&lon=${long}&cnt=7&units=imperial&appid=d9fd8247a7260c41e5441662fe670a6b`;

  fetch(getWeather)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      // variables declared without `var` within blocked scope of this function

      // variables for the 'Todays Weather'
      temp = data.current.temp;
      wind = data.current.wind_speed;
      humidity = data.current.humidity;
      uvI = data.current.uvi;
      forecast = data.daily;

      dailyIcon = data.current.weather[0].icon;

      console.log(temp, wind, humidity, uvI, dailyIcon);
      // call the showWeather function

      // run a for loop for forecast(data.daily) obj

      for (i = 0; i < forecast.length; i++) {
        // variables for the 7day Forecast

        var weeklyWeather = document.createElement("li");
        weeklyWeather.innerHTML = Math.round(forecast[i].feels_like.day);
        console.log(weeklyWeather);
        sevenDayForecast.appendChild(weeklyWeather);

        var weeklyIcon = document.createElement("img");
        weeklyIcon.setAttribute(
          "src",
          `${iconUrl}${forecast[i].weather[0].icon}.png`
        );
        weeklyWeather.appendChild(weeklyIcon);

        var weeklyHumidity = document.createElement("p");
        weeklyHumidity.textContent =
          "Humidity: " + Math.round(forecast[i].humidity);
        weeklyWeather.appendChild(weeklyHumidity);

        var weeklyWindSpeed = document.createElement("p");
        weeklyWindSpeed.textContent =
          "Wind Speed: " + Math.round(forecast[i].wind_speed);
        weeklyWeather.appendChild(weeklyWindSpeed);
        // todo add day of week to weekly
        var weeklyDow = document.createElement("p");
        var unixTime = forecast[i].dt * 1000;
        var unixToLocal = new Date(unixTime);
        // var dayOfWeek =unixToLocal.getDay
        // weeklyDow.textContent=
        console.log(unixTime);
        //   weeklyDow.textContent=date.getDay( forecast[i].dt)
        //   console.log(weeklyDow);
      }
      //creating elements for the weather icon

      showWeather(temp, wind, humidity, uvI, forecast, dailyIcon, currentCity);
    });
}

function showWeather(
  temp,
  wind,
  humidity,
  uvI,
  forecast,
  dailyIcon,
  currentCity
) {
  cityName.textContent = currentCity;
  // todo add weather icon
  // ;
  currentTemp.textContent = "It is currently " + Math.round(temp) + "º"; //round out the temp
  uvIndex.textContent = "UV Index: " + Math.round(uvI) + "  of 10";
  currentHumidity.textContent = "Humidity: " + humidity + "%";
  windSpeed.textContent = "Wind Speed: " + Math.round(wind) + " MPH";
  // styles for UVI
  if (uvI <= 3) {
    uvIndex.setAttribute(
      "style",
      "color: white; background-color:#92BFB1;padding: 5px; border-radius:5px;"
    );
  } else if (uvI <= 6) {
    uvIndex.setAttribute(
      "style",
      "background-color:#F5E960; padding: 3px 5px; border-radius:5px;"
    );
  } else if (uvI <= 8) {
    uvIndex.setAttribute(
      "style",
      "color: white; background-color:#cd6531; padding: 5px; border-radius:5px;"
    );
  } else {
    uvIndex.setAttribute(
      "style",
      "color: white; background-color:#D72638; padding: 5px; border-radius:5px;"
    );
  }
  var weatherIcon = document.getElementById("wIcon");
  weatherIcon = weatherIcon.setAttribute(
    "src",
    `${iconUrl}${dailyIcon}@2x.png`
  );
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

function submitSearch() {
  console.log("clicked"); //get value from the search input , save the value as a variable.

  // preventDefault to make sure form doesnt reset

  // call first fetch , and pass it the "searched variable"

  // once fetch request is made , reser search input value to an empty string.

  showCurrent();
  show7Day();
}
//   // fetch the cityName from the text input
//   // Call the getLocation and pass the city name

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
