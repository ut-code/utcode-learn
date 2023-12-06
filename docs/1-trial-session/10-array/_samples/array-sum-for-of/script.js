const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = 0;
for (const number of numbers) {
  sum += number;
}

document.write(`配列の合計値は ${sum} です。`);
