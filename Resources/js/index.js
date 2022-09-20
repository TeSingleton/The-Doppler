// new date obj
var date = new Date();

// variable for time
var currentTime = date.toLocaleTimeString();
console.log(currentTime);
document.getElementById("time").textContent = currentTime;

// variable for date
var currentDate = date.toLocaleDateString();
console.log(currentDate);
document.getElementById("date").innerText = currentDate;

// variables for the dom

// cityInput = cityInput.value;
// console.log(cityInput);

// getlocation
// get the city +(lat and long)
function getLocation(cityInput) {
  var cityInput = document.getElementById("cityInput");
  var cityName = document.getElementById("cityName");
  cityName.innerHTML = `${cityInput.value}`;

  saveSearch(cityInput.value); // pass cityInput value to the saveSearch Function

  var lati; // variable for the latitude
  var long; // variable for the longitude

  // fetch geoLocation
  var geoData = `https://api.openweathermap.org/geo/1.0/direct?q=${cityInput.value}&appid=d22455c31574a84b22d1c94f4c33f19c`;

  //   fetch call for location
  fetch(geoData).then(function (response) {
    if (response.ok) {
      console.log(response);
      return response.json().then(function (data) {
        console.log(data);
        //initialize variables with data from API
        lati = data[0].lat;
        console.log(lati);
        long = data[0].lon;
        console.log(long);
        cityInput = data[0].name;
        console.log(cityInput);
        // pass data thru to next function
        getForecast(lati, long, cityInput);
        saveSearch(cityInput);
      });
    }
  });
}
// getLocation("seattle");

function getForecast(lati, long, cityInput) {
  var getWeather = `https://api.openweathermap.org/data/2.5/onecall?lat=${lati}&lon=${long}&exclude=hourly,minutely&units=imperial&appid=d22455c31574a84b22d1c94f4c33f19c`;
  console.log(getWeather);

  fetch(getWeather).then(function (response) {
    if (response.ok) {
      console.log(response);
      return response.json().then(function (data) {
        console.log(data);

        // variable for current temp
        var currentTemp = data.current.temp;
        console.log(currentTemp);
        //variable for current humidity
        var curHumidity = data.current.humidity;
        console.log(curHumidity);
        //variable for current windspeed
        var curWindSpeed = data.current.wind_speed;
        console.log(curWindSpeed);
        // variable for current uvi
        var currentUvi = data.current.uvi;
        console.log(currentUvi);
        // variable for current icon
        var currentIcon = data.current.weather[0].icon;
        console.log(currentIcon);
        // variable for forecast
        var forecast = data.daily;
        console.log(forecast);
        //pass each variable into the next function
        showWeather(
          currentTemp,
          curHumidity,
          curWindSpeed,
          currentUvi,
          currentIcon
        );
        showForecast(forecast);
      });
    }
  });
}

// getForecast();

function showWeather(
  currentTemp,
  curHumidity,
  curWindSpeed,
  currentUvi,
  currentIcon
) {
  // get elements for current weather, add data
  document.getElementById("current_temp").innerText =
    "Current : \n" + Math.round(currentTemp) + "º";

  // document.getElementById("icon").innerHTML = currentIcon;

  document.getElementById("humidity").innerHTML = `Humidity:</br>
   ${Math.round(curHumidity)} %`;

  document.getElementById("windspeed").innerText = `Wind Speed:
  ${Math.round(curWindSpeed)} mph`;

  // setting and appending icon for current weather
  var curIconUrl = ` http://openweathermap.org/img/wn/${currentIcon}.png`;
  var curImage = new Image();
  curImage.src = curIconUrl;
  var curIconContainer = document.getElementById("icon");
  curIconContainer.appendChild(curImage);

  // created variable for UV container
  var dailyUV = document.getElementById("uvi");
  dailyUV.textContent = "UVI: " + currentUvi;

  // UV Styling
  if (currentUvi < 3) {
    dailyUV.setAttribute(
      "style",
      "color: white; background-color:#92BFB1; padding: 5px;border-radius:5px; "
    );
  } else if (currentUvi <= 5.99) {
    dailyUV.setAttribute(
      "style",
      "background-color:#F5E960; padding: 3px 5px; border-radius:5px;"
    );
  } else if (currentUvi <= 7.99) {
    dailyUV.setAttribute(
      "style",
      "color: white; background-color:#cd6531; padding: 5px; border-radius:5px;"
    );
  } else {
    dailyUV.setAttribute(
      "style",
      "color: white; background-color:#D72638; padding: 5px; border-radius:5px;"
    );
  }
}

// showWeather();

function showForecast(forecast) {
  // day 1
  // day 1 elements
  var day1 = document.getElementById("day1");
  var day1Render = document.createElement("p");
  var d1HumCon = document.createElement("p");
  var d1WindCon = document.createElement("p");
  var d1UviCon = document.createElement("p");

  // day 1 weather data

  var day1Temp = `${Math.round(forecast[0].temp.day)} º`;
  var day1Humidity = `${forecast[0].humidity} %`;
  console.log(day1Humidity);
  var day1WindSpeed = `${Math.round(forecast[0].wind_speed)} mph`;
  console.log(day1WindSpeed);
  var day1Uvi = `uvi: ${Math.round(forecast[0].uvi)}`;
  console.log(day1Uvi);

  // render to page/append

  day1Render.textContent = day1Temp;
  day1.appendChild(day1Render);

  d1HumCon.textContent = day1Humidity;
  day1Render.appendChild(d1HumCon);

  d1WindCon.textContent = day1WindSpeed;
  d1HumCon.appendChild(d1WindCon);

  d1UviCon.textContent = day1Uvi;
  d1WindCon.appendChild(d1UviCon);

  // adding icon
  var d1IconUrl = ` http://openweathermap.org/img/wn/${forecast[0].weather[0].icon}.png`;
  var d1Image = new Image();
  d1Image.src = d1IconUrl;
  day1Render.prepend(d1Image);
  //   todo finish rendering the data to the page.

  // day 2
  // day 2 elements

  var day2 = document.getElementById("day2");
  var day2Render = document.createElement("p");
  var d2HumCon = document.createElement("p");
  var d2WindCon = document.createElement("p");
  var d2UviCon = document.createElement("p");
  // // day 2 weather data

  var day2Temp = `${Math.round(forecast[1].temp.day)} º`;
  var day2Humidity = `${forecast[1].humidity} %`;
  console.log(day2Humidity);
  var day2WindSpeed = `${Math.round(forecast[1].wind_speed)} mph`;
  console.log(day2WindSpeed);
  var day2Uvi = `uvi: ${Math.round(forecast[1].uvi)}`;
  console.log(day2Uvi);

  // // render to page/append

  day2Render.textContent = day2Temp;
  day2.appendChild(day2Render);

  d2HumCon.textContent = day2Humidity;
  day2Render.appendChild(d2HumCon);

  d2WindCon.textContent = day2WindSpeed;
  d2HumCon.appendChild(d2WindCon);

  d2UviCon.textContent = day2Uvi;
  d2WindCon.appendChild(d2UviCon);

  // adding icon
  var d2IconUrl = ` http://openweathermap.org/img/wn/${forecast[1].weather[0].icon}.png`;
  var d2Image = new Image();
  d2Image.src = d2IconUrl;
  day2Render.prepend(d2Image);

  // day 3
  // day 3 elements

  var day3 = document.getElementById("day3");
  var day3Render = document.createElement("p");
  var d3HumCon = document.createElement("p");
  var d3WindCon = document.createElement("p");
  var d3UviCon = document.createElement("p");
  // // day 2 weather data

  var day3Temp = `${Math.round(forecast[2].temp.day)} º`;
  var day3Humidity = `${forecast[2].humidity} %`;
  console.log(day3Humidity);
  var day3WindSpeed = `${Math.round(forecast[2].wind_speed)} mph`;
  console.log(day3WindSpeed);
  var day3Uvi = `uvi: ${Math.round(forecast[2].uvi)}`;
  console.log(day3Uvi);

  // // render to page/append

  day3Render.textContent = day3Temp;
  day3.appendChild(day3Render);

  d3HumCon.textContent = day3Humidity;
  day3Render.appendChild(d3HumCon);

  d3WindCon.textContent = day3WindSpeed;
  d3HumCon.appendChild(d3WindCon);

  d3UviCon.textContent = day3Uvi;
  d3WindCon.appendChild(d3UviCon);
  // adding icon
  var d3IconUrl = ` http://openweathermap.org/img/wn/${forecast[2].weather[0].icon}.png`;
  var d3Image = new Image();
  d3Image.src = d3IconUrl;
  day3Render.prepend(d3Image);

  // day 4
  // day 4 elements

  var day4 = document.getElementById("day4");
  var day4Render = document.createElement("p");
  var d4HumCon = document.createElement("p");
  var d4WindCon = document.createElement("p");
  var d4UviCon = document.createElement("p");
  // // day 2 weather data

  var day4Temp = `${Math.round(forecast[3].temp.day)} º`;
  var day4Humidity = `${forecast[3].humidity} %`;
  console.log(day4Humidity);
  var day4WindSpeed = `${Math.round(forecast[3].wind_speed)} mph`;
  console.log(day4WindSpeed);
  var day4Uvi = `uvi: ${Math.round(forecast[3].uvi)}`;
  console.log(day4Uvi);

  // // render to page/append

  day4Render.textContent = day4Temp;
  day4.appendChild(day4Render);

  d4HumCon.textContent = day4Humidity;
  day4Render.appendChild(d4HumCon);

  d4WindCon.textContent = day4WindSpeed;
  d4HumCon.appendChild(d4WindCon);

  d4UviCon.textContent = day4Uvi;
  d4WindCon.appendChild(d4UviCon);

  //  add icon
  var d4IconUrl = ` http://openweathermap.org/img/wn/${forecast[3].weather[0].icon}.png`;
  var d4Image = new Image();
  d4Image.src = d4IconUrl;
  day4Render.prepend(d4Image);

  // day 5
  // day 5 elements

  var day5 = document.getElementById("day5");
  var day5Render = document.createElement("p");
  var d5HumCon = document.createElement("p");
  var d5WindCon = document.createElement("p");
  var d5UviCon = document.createElement("p");
  // // day 2 weather data

  var day5Temp = `${Math.round(forecast[4].temp.day)} º`;
  var day5Humidity = `${forecast[4].humidity} %`;
  console.log(day5Humidity);
  var day5WindSpeed = `${Math.round(forecast[4].wind_speed)} mph`;
  console.log(day5WindSpeed);
  var day5Uvi = `uvi: ${Math.round(forecast[4].uvi)}`;
  console.log(day5Uvi);

  // // render to page/append

  day5Render.textContent = day4Temp;
  day5.appendChild(day5Render);

  d5HumCon.textContent = day5Humidity;
  day5Render.appendChild(d5HumCon);

  d5WindCon.textContent = day5WindSpeed;
  d5HumCon.appendChild(d5WindCon);

  d5UviCon.textContent = day5Uvi;
  d5WindCon.appendChild(d5UviCon);

  var d5IconUrl = ` http://openweathermap.org/img/wn/${forecast[4].weather[0].icon}.png`;
  var d5Image = new Image();
  d5Image.src = d5IconUrl;
  day5Render.prepend(d5Image);
  //   todo finish rendering the data to the page.
}

// showForecast();

function saveSearch(cityInput) {
  var locationArray = JSON.parse(localStorage.getItem("citySearched")) || [];
  // set conditional with an array method to not push duplicate searches to the array
  locationArray.push(cityInput);
  console.log(locationArray);

  localStorage.setItem("citySearched", JSON.stringify(locationArray));
  // searchedCities("citySearched");
}
saveSearch();

function searchedCities() {
  var searchedButtons = document.getElementsByClassName(
    "previous_search_container"
  );
  var previousCities = JSON.parse(localStorage.getItem("citySearched"));
  document.createElement("button").innerHTML =searchedBtn
  
  

    
    previousCities.forEach(addBtn);
    
    function addBtn(value){
searchedBtn + value;
    }
  
}
searchedCities();

// search button event listner
var clickedBtn = document.getElementById("click");
clickedBtn.addEventListener("click", getLocation);

// clear button getElement
var clearBtn = document.getElementById("clear");
// relaod function set to `true` to reload page from server.
function reload() {
  reload = location.reload();
}
// clear button Event Listner
clearBtn.addEventListener("click", reload, true);

// store searches
// localStorage.setItem

// function hide5Day(clickedBtn) {
//   var weatherContainer = document.getElementById("weather_container");
//   if (clickedBtn) {
//     weatherContainer.style.visibility === "visible";
//   } else {
//     weatherContainer.style.visibility === "hidden";
//   }
// }
// hide5Day();
