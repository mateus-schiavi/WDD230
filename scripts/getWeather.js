const apiKey = '08cfe187e90ec9db6c2929365129bbc3';
const city = 'Suzano';
const weatherIconBaseURL = 'https://openweathermap.org/img/wn/';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

function getWeatherData() {
    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            const temperatureElement = document.getElementById('temperature-value');
            const weatherIconElement = document.getElementById('weather-icon');

            if (data.main && data.main.temp) {
                const temperature = data.main.temp;
                temperatureElement.textContent = temperature.toFixed(0) + '°C';
            } else {
                temperatureElement.textContent = 'N/A';
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

// Chama a função getWeatherData quando o conteúdo da página estiver carregado.
document.addEventListener('DOMContentLoaded', getWeatherData);
