"use strict"

searchButton.addEventListener('click', searchWeather);

function searchWeather(){
    loadingText.style.display = 'block';
    weatherBox.style.display = 'none';
    var cityName = searchCity.value;
    if (cityName.trim() == 0) {
        return alert('Enter a valid city');
    }
    var http = new XMLHttpRequest();
    var apiKey = 'c89d4cf302d986e582b63ff0e723910c';
    var url = 'http://api.openweathermap.org/data/2.5/weather?q='+ cityName + '&units=metric&appid=' + apiKey;
    var method = 'GET';
    http.open(method, url);
    http.onreadystatechange = function() {
        if (http.readyState == XMLHttpRequest.DONE && http.status == 200){
            var data = JSON.parse(http.responseText);
            var weatherData = new Weather(cityName, data.weather[0].description.toUpperCase());
            weatherData.temperature = data.main.temp;
            updateWeather(weatherData);

        } else if (http.readyState == XMLHttpRequest.DONE) {
            alert("Errou");
        }
    };
    http.send()

}

function updateWeather(weatherData) {
    weatherCity.textContent = weatherData.cityName;
    weatherDescription.textContent = weatherData.description;
    weatherTemperature.textContent = weatherData.temperature;

    loadingText.style.display='none';
    weatherBox.style.display = 'block';
}