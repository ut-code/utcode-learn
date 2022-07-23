document.getElementById("fetch-button").onclick = async () => {
  const response = await fetch("/weather");
  const weather = await response.text();
  alert(weather);
};
