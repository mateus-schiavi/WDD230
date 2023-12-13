const apiKey = '08cfe187e90ec9db6c2929365129bbc3';
const city = 'Cozumel';
const weatherIconBaseURL = 'https://openweathermap.org/img/wn/';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

function getWeatherData() {
    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            const temperatureElement = document.getElementById('temperature-value');
            const windChillElement = document.getElementById('wind-chill-value');
            const weatherIconElement = document.getElementById('weather-icon');

            if (data.main && data.main.temp && data.wind && data.wind.speed) {
                const temperature = data.main.temp;
                const windSpeed = data.wind.speed;

                // Calculate wind chill
                const windChill = calculateWindChill(temperature, windSpeed);

                // Display temperature and wind chill
                temperatureElement.textContent = temperature.toFixed(0) + '°C';
                windChillElement.textContent = 'Wind Chill: ' + windChill.toFixed(0) + '°C';
            } else {
                temperatureElement.textContent = 'N/A';
                windChillElement.textContent = 'N/A';
            }

            if (data.weather && data.weather[0] && data.weather[0].icon) {
                const iconCode = data.weather[0].icon;
                const weatherIconUrl = `${weatherIconBaseURL}${iconCode}@2x.png`;
                weatherIconElement.src = weatherIconUrl;
            } else {
                weatherIconElement.src = 'https://openweathermap.org/img/wn/10d@2x.png';
            }
        })
        .catch((error) => {
            console.error('Ocorreu um erro:', error.message);
        });
}

// Function to calculate wind chill (for metric units)
function calculateWindChill(temperature, windSpeed) {
    return 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
}

// Chama a função getWeatherData quando o conteúdo da página estiver carregado.
document.addEventListener('DOMContentLoaded', getWeatherData);


