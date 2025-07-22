const response = await fetch("/exchange-rate");
const rate = await response.text();
document.getElementById("rate").textContent = rate;
