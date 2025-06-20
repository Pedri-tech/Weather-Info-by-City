const apiKey = "e3d4724a0916f137af03830dd340ded3";

document.getElementById("weatherForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const city = document.getElementById("cityInput").value;
    const weatherResult = document.getElementById("weatherResult");

    if (!city) {
        weatherResult.innerHTML = "<p>Please enter a city name.</p>";
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => {
            if (!response.ok) {
                throw new Error("City not found or API error.");
            }
            return response.json();
        })
        .then(data => {
            const temp = data.main.temp;
            const description = data.weather[0].description;
            const icon = data.weather[0].icon;

            weatherResult.innerHTML = `
                <h2>Weather in ${data.name}</h2>
                <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${description}">
                <p><strong>${temp}°C</strong> - ${description}</p>
            `;
        })
        .catch(error => {
            weatherResult.innerHTML = `<p>Error: ${error.message}</p>`;
        });
});
