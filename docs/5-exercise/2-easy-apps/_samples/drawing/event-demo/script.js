const button = document.getElementById("button");
const tagNameDisplay = document.getElementById("tag-name-display");
const displayX = document.getElementById("display-x");
const displayY = document.getElementById("display-y");

function displayNameAndLocation(e) {
  tagNameDisplay.textContent = e.target.tagName;
  displayX.textContent = e.pageX;
  displayY.textContent = e.pageY;
}

button.onclick = displayNameAndLocation;
