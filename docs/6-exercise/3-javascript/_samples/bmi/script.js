const height = document.getElementById("height");
const weight = document.getElementById("weight");

const calcButton = document.getElementById("calc-button");

const answer = document.getElementById("answer");

calcButton.onclick = () => {
  answer.textContent = weight.value / (height.value / 100) ** 2;
};
