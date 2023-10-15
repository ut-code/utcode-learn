const numbers = [-3, -1, 9, -10, 3, 7, 6, 1, 0, 5];

let sum = 0;
for (let i = 0; i < numbers.length; i += 1) {
  sum += numbers[i];
}

document.write(`sum of numbers is: ${sum}`);
