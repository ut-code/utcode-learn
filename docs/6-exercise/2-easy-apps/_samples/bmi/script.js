let height = document.getElementById("height");
let weight = document.getElementById("weight");

let calcButton = document.getElementById("calc-button");

let answer = document.getElementById("answer");

calcButton.onclick = () => {
  answer.textContent = weight.value / (height.value / 100) ** 2;
};
