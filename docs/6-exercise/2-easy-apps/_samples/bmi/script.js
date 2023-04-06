let height = document.getElementById("height");
let weight = document.getElementById("weight");

let calcButton = document.getElementById("calc-button");

let answer = document.getElementById("answer");

function clicked() {
  answer.textContent = weight.value / (height.value / 100) ** 2;
}

calcButton.onclick = clicked;
