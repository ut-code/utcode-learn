let calculateButton = document.getElementById("calculate-button");
let number1 = document.getElementById("number1");
let number2 = document.getElementById("number2");
let operator = document.getElementById("operator");
let result = document.getElementById("result");

function calculate() {
  let inputNumber1 = Number(number1.value);
  let inputNumber2 = Number(number2.value);
  if (operator.value === "/" && inputNumber2 === 0) {
    result.textContent = "0で割ることはできません。";
    result.style.color = "red";
  } else {
    if (operator.value === "+")
      result.textContent = inputNumber1 + inputNumber2;
    if (operator.value === "-")
      result.textContent = inputNumber1 - inputNumber2;
    if (operator.value === "*")
      result.textContent = inputNumber1 * inputNumber2;
    if (operator.value === "/")
      result.textContent = inputNumber1 / inputNumber2;
    result.style.color = "black";
  }
}
calculateButton.onclick = calculate;
