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

console.log("Weather App API Connected!")

function getWeatherCondition(code) {
    switch(code) {
        case 0: return "clear sky";
        case 1: return "Mainly Clear";
        case 2: return "Partly Cloudy";
        case 3: return "Overcast";

        case 45:
        case 48: return "Fog";

        case 51:
        case 53:
        case 55: return "Drizzle";

        case 56:
        case 57: return "Freezing Drizzle";

        case 61:
        case 63:
        case 65: return "Rain";

        case 66:
        case 67: return "Freezing Rain";

        case 71:
        case 73:
        case 75:
        case 77: return "Snow";

        case 80:
        case 81:
        case 82: return "Rain Showers";

        case 85:
        case 86: return "Snow Showers";

        case 95:
        case 96:
        case 99: return "Thunderstorm";

        default: return "Unknown Weather";
    }
}

async function getWeather(){
    try{

        // Get city name from input
        const searchCity = cityInput.value.trim();
        
        if(searchCity === ""){
            alert("Please enter a city name");
            return;
        }

        // Fetch Geocoding API
        const geoURL = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(searchCity)}&count=1&language=en&format=json`;
        
        const weather = await fetch(geoURL);
        
        if(!weather.ok) {
            throw new Error("City search failded");
        }

        // Convert response in json
        const weatherData  = await weather.json(); 
        
        if(!weatherData.results || weatherData.results.length === 0){
            throw new Error("City not found");
        }

        // Get City details
        const city = weatherData.results[0].name;
        const latitude = weatherData.results[0].latitude;
        const longitude = weatherData.results[0].longitude;

        console.log(city,latitude,longitude);

        // Build Weather API URL
        const weatherURL = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m`;

        // Fetch Weather API
        const weatherResponse = await fetch(weatherURL);

        if(!weatherResponse.ok) {
            throw new Error("Weather request failde")
        }

        // Convert response into JSON
        const liveweatherData = await weatherResponse.json();

        // Get Current Weather
        const current = liveweatherData.current;

        // Get Weather condition
        const weatherCondition = getWeatherCondition(current.weather_code);

        // Get weather icon
        const icon = getWeatherIcon(current.weather_code);

        // Display condition and icon
        condition.textContent = weatherCondition;
        weatherIcon.src = icon;

        // Display Weather data
        temperature.textContent = `${current.temperature_2m}°C`;
        cityName.textContent = city;
        humidity.textContent = `${current.relative_humidity_2m}%`;
        windSpeed.textContent = `${current.wind_speed_10m} Km/h`;

        console.log(liveweatherData);

    } catch (error) {
        console.log("Error:", error.message);
        alert(error.message);
    }
}

function getWeatherIcon(code) {

    if(code === 0 || code === 1){
        return "img/clear.png";
    }
    else if (code === 2 || code === 3){
        return "img/clouds.png";
    }
    else if (code === 45 || code === 48){
        return "img/mist.png";
    }
    else if(code >= 51 && code <= 57){
        return "img/drizzle.png";
    }
    else if(code >= 61 && code <= 67){
        return "img/rain.png";
    }
    else if(code >= 71 && code <= 77){
        return "img/snow.png";
    }
    else if(code >= 80 && code <= 82){
        return "img/rain.png";
    }
    else if(code >= 95 && code <= 99){
        return "img/rain.png";
    }
    else{
        return "img/clouds.png";
    }
}
getWeatherIcon();

searchBtn.addEventListener("click", getWeather);

// Search Using Enter Key
cityInput.addEventListener("keydown", (event) => {
    if(event.key === "Enter") {
        getWeather();
    }
});