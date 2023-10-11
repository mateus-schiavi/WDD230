
const apiKey = '3b024a287b26713af80a79e82a761e2e';
const city = 'Fortaleza';

// Function to fetch weather data
function fetchWeather() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        .then((response) => response.json())
        .then((data) => {
            const temperatureCelsius = data.main.temp - 273.15; // Convert from Kelvin to Celsius
            const temperatureFahrenheit = (temperatureCelsius * 9/5) + 32; // Convert from Celsius to Fahrenheit

            // Update the temperature values in the footer
            document.getElementById('celsius').textContent = temperatureCelsius.toFixed(2);
            document.getElementById('fahrenheit').textContent = temperatureFahrenheit.toFixed(2);
            document.getElementById('kelvin').textContent = data.main.temp.toFixed(2);
        })
        .catch((error) => {
            console.error('Error fetching weather data: ' + error);
        });
}

// Call the fetchWeather function when the page loads
window.addEventListener('load', fetchWeather);
