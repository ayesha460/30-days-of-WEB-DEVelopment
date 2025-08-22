function showWeather() {
  let city = document.getElementById("cityInput").value;

  // Static mock data (always shows same weather)
  document.getElementById("weatherInfo").innerHTML = `
    <p>📍 ${city || "Delhi"}</p>
    <p>☀ Clear Sky</p>
    <p>🌡 30°C</p>
  `;
}