"use strict"

searchButton.addEventListener('click', searchWeather);

function searchWeather(){
    var cityName = searchCity.value;
    if (cityName.trim() == 0) {
        return alert('Enter a valid city');
    }
    var http = new XMLHttpRequest();
    var apiKey = '';
    var url = 'http://api.openweathermap.org/data/2.5/weather?q='+cityName;
    var method = 'GET';

    http.open(method, url);
    http,onreadystatechange = function() {
        if (http.readyState == XMLHttpRequest.DONE && http.status == 200){

        } else if (http.readyState = XMLHttpRequest.DONE) {
            alert("Errou");
        }
    }

}