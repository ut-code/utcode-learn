async function fetchWeather() {
  const response = await fetch("/weather");
  const weather = await response.json();
  document.getElementById("condition").textContent = weather.condition;
  document.getElementById("temperature").textContent = weather.temperature;
}

fetchWeather();
