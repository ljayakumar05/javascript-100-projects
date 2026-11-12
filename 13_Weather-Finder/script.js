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

searchBtn.addEventListener("click", getWeather);

// Search Using Enter Key
cityInput.addEventListener("keydown", (event) => {
    if(event.key === "Enter") {
        getWeather();
    }
});