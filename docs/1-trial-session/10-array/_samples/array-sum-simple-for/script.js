const array = [-3, -1, 9, -10, 3, 7, 6, 1, 0, 5];

let sum = 0;
for (let i = 0; i < array.length; i += 1) {
  sum += array[i];
}

document.write(`sum of array is: ${sum}`);
