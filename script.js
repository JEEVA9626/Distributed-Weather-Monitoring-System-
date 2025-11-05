// API endpoint for weather data
const apiEndpoint = "https:                                           
const apiKey = "//api.openweathermap.org/data/2.5/weather";
const apiKey = "YOUR_OPENWEATHERMAP_API_KEY";

                               
const cities = [
    { name: "// Cities and their coordinates
const cities = [
    { name: "New York", lat: 40.7128, lon: -74.0060 },
    { name: "London", lat: 51.5074, lon: -0.1278 },
    { name: "Tokyo", lat: 35.6895, lon: 139.7670 }
];

// Function to get weather data for a city
async function getWeatherData(city) {
    const url = `${apiEndpoint}?lat=${city.lat}&lon=${city.lon}&appid=${apiKey}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

// Function to update weather data on the page
async function updateWeatherData() {
    for (let i = 0; i < cities.length; i++) {
        const city = cities[i];
        const weatherData = await getWeatherData(city);
        const tempElement = document.getElementById(`temp-${i + 1}`);
        const humElement = document.getElementById(`hum-${i + 1}`);
        tempElement.innerText = `Temperature: ${weatherData.main.temp}°C`;
        humElement.innerText = `Humidity: ${weatherData.main.humidity}%`;
    }
}

// Update weather data every 10 minutes
updateWeatherData();
setInterval(updateWeatherData, 600000);
