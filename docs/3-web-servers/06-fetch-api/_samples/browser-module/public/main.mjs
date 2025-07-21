import { add, multiply } from "./math.mjs";

const sum = add(3, 4);
const product = multiply(3, 4);

const resultElement = document.getElementById("result");
resultElement.textContent = `3 + 4 = ${sum}, 3 × 4 = ${product}`;
