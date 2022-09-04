// var apiKey =() ;
var apiKey = config.weather_key;
// var weatherApiUrl=`http://api.openweathermap.org/geo/1.0/direct?q=${city name},{state code},{country code}&{limit}=limit&appid={apiKey}`
var cityName = document.getElementById("city_name")
cityName = cityName.textContent

// submit the form to fetch weather information
var submiT =document.getElementById('search-btn');




// handle button click to fetch  weather information/////////////////////////////////////
function searcH(){
    getLocation(cityName)
    };


// fetch geolocation data (geocoding api)
// onclick event listener

console.log("are you attached");

//fetch Geolocation Data (geocoding API) 
function getLocation(cityName){

    var request = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName},&appid=${apiKey}`;

    fetch(request)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data)
            
        });
    
    
}
 getLocation();


// fetch weather data (onecall)






console.log("attached")





// Given a weather dashboard 
// with `FORM` inputs
//When I `Search`  for a city
// Then I am `presented` with `current` and `future` conditions for that city
// and that city is added to the `search history`
// 


// Weather Dashboard 
// with form inputs
// a search function 
// Show current and future weather for searched location
// searched locations added to search history 
// When cities are viewed 
// present the city name, date and an icon representing 
// the weather, conditions, temperature, the huimidity, the wind speed, and the UV index
// When viewing the UV index
// Present the color thay indicates whether the conditions are favorable, moderate or severe
// 

// when viewing future conditions for that city 
//  i am then presented with the 5day forcast that displays the date , an icon of the weather conditions, the temperature, the wind speed, and the humidty 
//  when i click on a city in the history 
// then i am again presented with the conditions, future and past conditions



