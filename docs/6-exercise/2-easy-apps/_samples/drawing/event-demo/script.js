let button = document.getElementById("button");
let tagNameDisplay = document.getElementById("tag-name-display");
let displayX = document.getElementById("display-x");
let displayY = document.getElementById("display-y");

function displayNameAndLocation(e){
    tagNameDisplay.textContent = e.target.tagName;
    displayX.textContent = e.pageX;
    displayY.textContent = e.pageY;
}

button.onclick = displayNameAndLocation;