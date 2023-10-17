const apiKey = '3b024a287b26713af80a79e82a761e2e';

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Suzano&appid=${apiKey}&units=metric`;
const weatherIconBaseURL = 'https://openweathermap.org/img/w/';

function getWeatherData() {
    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            const temperatureElement = document.getElementById('temperature');
            const weatherIconElement = document.getElementById('weather-icon');

            if (data.main && data.main.temp) {
                const temperature = data.main.temp;
                temperatureElement.textContent = temperature.toFixed(1);

                const celsiusSymbol = document.createElement('span');
                celsiusSymbol.textContent = '°C';
                temperatureElement.appendChild(celsiusSymbol);
            } else {
                temperatureElement.textContent = 'N/A';
            }

            if (data.weather && data.weather[0] && data.weather[0].icon) {
                const weatherIconUrl = `${weatherIconBaseURL}${data.weather[0].icon}.png`;
                weatherIconElement.src = weatherIconUrl;
            } else {
                weatherIconElement.src = 'placeholder-icon.png';
            }
        })
        .catch((error) => {
            console.error('An Error Has Occurred', error);
        });
}

getWeatherData();
