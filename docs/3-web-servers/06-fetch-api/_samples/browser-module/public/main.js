import { add, multiply } from "./math.js";

const sum = add(3, 4);
const product = multiply(3, 4);

document.getElementById("result").textContent = `3 + 4 = ${sum}, 3 × 4 = ${product}`;