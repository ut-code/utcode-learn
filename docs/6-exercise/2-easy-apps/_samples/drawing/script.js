let canvas = document.getElementById("canvas");
let smallButton = document.getElementById("small-button");
let bigButton = document.getElementById("big-button");

let ctx = canvas.getContext("2d");
let isBig = false;

canvas.onclick = drawRect;

function drawRect(e) {
  let top = canvas.getBoundingClientRect().top;
  let left = canvas.getBoundingClientRect().left;
  ctx.fillStyle = "green";
  if (isBig) {
    ctx.fillRect(e.pageX - left - 10, e.pageY - top - 10, 20, 20);
  } else {
    ctx.fillRect(e.pageX - left - 5, e.pageY - top - 5, 10, 10);
  }
}

function clicked() {
  if (isBig) {
    isBig = false;
  } else {
    isBig = true;
  }
}

smallButton.onclick = clicked;

bigButton.onclick = clicked;
