// Serch elements
const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

// Weather elements
const weatherIcon = document.getElementById("weatherIcon");
const temperature = document.getElementById("temperature");
const cityName = document.getElementById("cityName");
const condition = document.getElementById("condition");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");

console.log("Weather App Connected!")

async function getWeather(){
    try{
        // Featch API
        const weather = await fetch("https://geocoding-api.open-meteo.com/v1/search?name=Chennai&count=1&language=en&format=json&");
        // Convert response in json
        const weatherDetail = await weather.json();    
        console.log(weatherDetail);    
        console.log(weatherDetail.results[0].name);
        console.log(weatherDetail.results[0].country);
    } catch (error) {
        console.log(error);
    }
}
getWeather();