const numbers = [3, 6, 8, 5, 0];

let maxNumber = numbers[0];
for (let i = 1; i < numbers.length; i += 1) {
  if (maxNumber < numbers[i]) {
    maxNumber = numbers[i];
  }
}

document.write(`配列[${numbers}]の最大値は${maxNumber}です。`);
