const canvas = document.getElementById("canvas");
const smallButton = document.getElementById("small-button");
const bigButton = document.getElementById("big-button");

const context = canvas.getContext("2d");
let isBig = false;

canvas.onclick = drawRect;

function drawRect(e) {
  const top = canvas.getBoundingClientRect().top;
  const left = canvas.getBoundingClientRect().left;
  context.fillStyle = "green";
  if (isBig) {
    context.fillRect(e.pageX - left - 10, e.pageY - top - 10, 20, 20);
  } else {
    context.fillRect(e.pageX - left - 5, e.pageY - top - 5, 10, 10);
  }
}

function swapSize() {
  isBig = !isBig;
}

smallButton.onclick = swapSize;

bigButton.onclick = swapSize;
