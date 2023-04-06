let canvas = document.getElementById("canvas");
let smallButton = document.getElementById("small-button");
let bigButton = document.getElementById("big-button");

let context = canvas.getContext("2d");
let isBig = false;

canvas.onclick = drawRect;

function drawRect(e) {
  let top = canvas.getBoundingClientRect().top;
  let left = canvas.getBoundingClientRect().left;
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
