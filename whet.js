// Replace 'YOUR_API_KEY' with your actual API key from OpenWeatherMap
const apiKey = '66a6d9b8fc556dccd4511c10770ffb98';

// Function to fetch weather data from OpenWeatherMap API for each city
async function getWeather() {
    try {
        // Fetch weather data for Vasai
        const vasaiResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Vasai&appid=${apiKey}&units=metric`);
        if (!vasaiResponse.ok) {
            throw new Error('Failed to fetch weather data for Vasai');
        }
        const vasaiWeatherData = await vasaiResponse.json();
        updateWeatherInfo('vasai', vasaiWeatherData);

        // Fetch weather data for Virar
        const virarResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Virar&appid=${apiKey}&units=metric`);
        if (!virarResponse.ok) {
            throw new Error('Failed to fetch weather data for Virar');
        }
        const virarWeatherData = await virarResponse.json();
        updateWeatherInfo('virar', virarWeatherData);

        // Fetch weather data for Mumbai
        const mumbaiResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=${apiKey}&units=metric`);
        if (!mumbaiResponse.ok) {
            throw new Error('Failed to fetch weather data for Mumbai');
        }
        const mumbaiWeatherData = await mumbaiResponse.json();
        updateWeatherInfo('mumbai', mumbaiWeatherData);

    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// Function to update DOM elements with weather information
function updateWeatherInfo(city, weatherData) {
    try {
        // Check if the required properties exist in weatherData before accessing them
        if (!weatherData || !weatherData.main || !weatherData.weather || weatherData.weather.length === 0) {
            throw new Error(`Weather data structure is invalid for ${city}`);
        }

        // Update DOM elements with weather information for the specified city
        document.getElementById(`${city}-location`).textContent = weatherData.name;
        document.getElementById(`${city}-temperature`).textContent = `${weatherData.main.temp} °C`;
        document.getElementById(`${city}-description`).textContent = weatherData.weather[0].description;

        const iconCode = weatherData.weather[0].icon;
        const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;
        document.getElementById(`${city}-icon`).innerHTML = `<img src="${iconUrl}" alt="Weather Icon">`;

    } catch (error) {
        console.error(`Error updating weather information for ${city}:`, error);
    }
}

// Call the getWeather function when the page loads
window.onload = getWeather;
