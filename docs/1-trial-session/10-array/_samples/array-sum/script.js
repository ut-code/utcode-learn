const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const array2 = [-3, -1, 9, -10, 3, 7, 6, 1, 0, 5];

function sumArray(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i += 1) {
    sum += array[i];
  }
  return sum;
}

document.write(`sum of array1: ${sumArray(array1)} <br>`);
document.write(`sum of array2: ${sumArray(array2)} <br>`);
