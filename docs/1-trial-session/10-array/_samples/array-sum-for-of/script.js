const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = 0;
for (const elem of array) {
  sum += elem;
}

document.write(`sum of array is: ${sum}`);
