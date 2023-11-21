const calculateButton = document.getElementById("calculate-button");
const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const operator = document.getElementById("operator");
const result = document.getElementById("result");

function calculate() {
  const inputNumber1 = Number(number1.value);
  const inputNumber2 = Number(number2.value);
  if (operator.value === "/" && inputNumber2 === 0) {
    result.textContent = "0 で割ることはできません。";
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
