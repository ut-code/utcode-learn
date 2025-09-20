const usernameDisplay = document.getElementById("username-display");

async function initialize() {
  const response = await fetch("/profile", { credentials: "include" });
  if (!response.ok) {
    location.replace("/login");
    return;
  }
  const profile = await response.json();
  usernameDisplay.textContent = profile.username;
}

initialize();
