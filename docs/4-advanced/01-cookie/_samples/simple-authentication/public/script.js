const usernameDisplay = document.getElementById("username-display");

async function initialize() {
  const response = await fetch("/profile", { credentials: "include" });
  if (!response.ok) {
    window.location.href = "/login";
    return;
  }
  const profile = await response.json();
  usernameDisplay.textContent = profile.username;
}

initialize();
