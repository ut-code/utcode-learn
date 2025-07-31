const response = await fetch("/open-status");
const openStatus = await response.text();

document.getElementById("open-status").textContent = openStatus;
