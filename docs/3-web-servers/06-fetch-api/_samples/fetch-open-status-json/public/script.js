async function fetchOpenStatus() {
  const response = await fetch("/open-status");
  const openStatus = await response.json();
  if (openStatus.isOpen) {
    document.getElementById("open-status").textContent = "営業中";
  } else {
    document.getElementById("open-status").textContent = "営業時間外";
  }
  document.getElementById("open-time").textContent = openStatus.openTime;
  document.getElementById("close-time").textContent = openStatus.closeTime;
}

fetchOpenStatus();
