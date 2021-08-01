var today = new Date();
var cityFormEl = document.querySelector("#city-form");
var cityNameInputEl = document.querySelector("#cityname");
var currentWeatherEl = document.querySelector('#current-weather');
var currentWeatherCardEl = document.querySelector("#current-weather-card");
var fiveDayCardEl = document.querySelector("#five-day-card");
var fiveDayEl = document.querySelector("#five-day-body");
var weatherStatusEl = document.querySelector('#weather-status');
var searchEl = document.querySelector('#search');
var historyButtonsEl = document.querySelector("#history-buttons");
var historyCardEl = document.querySelector("#history");
var trashEl = document.querySelector("#trash");
var searchHistoryArray = []

var formSubmitHandler = function (event) {
    event.preventDefalt();
    // get city name value from input element
    var cityname = cityNameInputEl.nodeValue.trim();

    // set city name in local storage and generate history buttons

    if (cityname) {
        searchHistoryArray.push(cityname);
        localStorage.setItem("weatherSearch", JSON.stringify(searchHistoryArray));
        var searchHistoryEl = document.createElement('button');
        searchHistoryEl.className = "btn";
        searchHistoryEl.setAttribute("data-city", cityname);
        searchHistoryEl.innerHTML = cityname;
        historyButtonsEl.appendChild(searchHistoryEl);
        historyCardEl.removeAttribute("style");
        getWeatherInfo(cityname);
        cityNameInputEl.value = "";
    }
    else {
        alert("Please enter a City name");
    }
    
}