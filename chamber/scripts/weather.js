const apiKey = '08cfe187e90ec9db6c2929365129bbc3';
const city = 'Fortaleza';

// Function to fetch weather data
function fetchWeather() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        .then((response) => response.json())
        .then((data) => {
            const temperatureCelsius = data.main.temp - 273.15; // Convert from Kelvin to Celsius
            const temperatureFahrenheit = (temperatureCelsius * 9/5) + 32; // Convert from Celsius to Fahrenheit

            // Get wind speed in meters per second from the API
            const windSpeed = data.wind.speed;

            // Calculate wind chill in Celsius
            const windChillCelsius = calculateWindChill(temperatureCelsius, windSpeed);
            // Convert wind chill to Fahrenheit
            const windChillFahrenheit = (windChillCelsius * 9/5) + 32;

            const windChillKelvin = windChillCelsius + 273.15;

            // Update the temperature and wind chill values in the footer
            document.getElementById('celsius').textContent = temperatureCelsius.toFixed(2);
            document.getElementById('fahrenheit').textContent = temperatureFahrenheit.toFixed(2);
            document.getElementById('kelvin').textContent = data.main.temp.toFixed(2);
            document.getElementById('windchill-celsius').textContent = windChillCelsius.toFixed(2);
            document.getElementById('windchill-fahrenheit').textContent = windChillFahrenheit.toFixed(2);
            document.getElementById('windchill-kelvin').textContent = windChillKelvin.toFixed(2);
        })
        .catch((error) => {
            console.error('Error fetching weather data: ' + error);
        });
}

// Function to calculate wind chill in Celsius
function calculateWindChill(temperatureCelsius, windSpeed) {
    const windChillCelsius = 13.12 + 0.6215 * temperatureCelsius - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperatureCelsius * Math.pow(windSpeed, 0.16);
    return windChillCelsius;
}

// Call the fetchWeather function when the page loads
window.addEventListener('load', fetchWeather);
