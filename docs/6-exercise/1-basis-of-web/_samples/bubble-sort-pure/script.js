function swapIndex(array, indexA, indexB) {
  const temp = array[indexA];
  array[indexA] = array[indexB];
  array[indexB] = temp;
}
function bubbleSort(inputArray) {
  const array = inputArray.slice();
  for (let i = array.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) swapIndex(array, j, j + 1);
    }
  }
  return array;
}

unsorted_array = [
  8, 2, 9, 14, 12, 1, 5, 13, 16, 3, 19, 17, 18, 10, 15, 7, 20, 11, 6, 4,
];
sorted_array = bubbleSort(unsorted_array);
document.write(`<p>sorted array: [${sorted_array}]</p>`);
document.write(`unsorted array(shouldn't be sorted): [${unsorted_array}]`);
