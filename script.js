const apiKey = 'e3d4724a0916f137af03830dd340ded3'; // your key

    async function getWeather() {
      const city = document.getElementById('cityInput').value.trim();
      const resultDiv = document.getElementById('weatherResult');

      if (!city) {
        resultDiv.innerHTML = 'Please enter a city name.';
        return;
      }

      try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod !== 200) {
          resultDiv.innerHTML = `❌ ${data.message}`;
          return;
        }

        const { name, sys, main, weather } = data;

        resultDiv.innerHTML = `
          <div class="temp">${main.temp}°C</div>
          <div>${weather[0].description}</div>
          <div>${name}, ${sys.country}</div>
        `;
      } catch (error) {
        resultDiv.innerHTML = '⚠️ Error fetching weather data.';
      }
    }
