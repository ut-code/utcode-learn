const canvas = document.getElementById("canvas");
const small = document.getElementById("small");
const big = document.getElementById("big");

const ctx = canvas.getContext("2d");
let isBig = false;

canvas.onclick = (e) => drawRect(e);

function drawRect(e) {
  const top = canvas.getBoundingClientRect().top;
  const left = canvas.getBoundingClientRect().left;
  ctx.fillStyle = "green";
  if (isBig) {
    ctx.fillRect(e.pageX - left - 10, e.pageY - top - 10, 20, 20);
  } else {
    ctx.fillRect(e.pageX - left - 5, e.pageY - top - 5, 10, 10);
  }
}

small.onclick = () => {
  isBig = false;
};

big.onclick = () => {
  isBig = true;
};
