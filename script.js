async function getWeather() {
  const city = document.getElementById("city").value;
  const apiKey = "e3d4724a0916f137af03830dd340ded3";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${Kariba}&appid=${e3d4724a0916f137af03830dd340ded3}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");
    const data = await response.json();

    document.getElementById("result").innerHTML = `
      <strong>${data.name}</strong><br>
      ${data.weather[0].main} - ${data.main.temp}°C
    `;
  } catch (error) {
    document.getElementById("result").innerHTML = "Error: " + error.message;
  }
}
