setInterval(async () => {
  const response = await fetch("/exchange-rates");
  const rates = await response.json();

  document.getElementById("usd-jpy").textContent = rates.usdJpy;
  document.getElementById("eur-jpy").textContent = rates.eurJpy;
}, 1000);
