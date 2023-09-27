//第一引数の配列の第二引数、第三引数のインデックスの要素を入れ替える関数
function swapIndex(array, indexA, indexB) {
  const temp = array[indexA];
  array[indexA] = array[indexB];
  array[indexB] = temp;
}

//本関数
function bubbleSort(array) {
  for (let i = array.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) swapIndex(array, j, j + 1);
    }
  }
}

unsortedArray = [9, 3, 1, 5, 8, 2, 4, 7, 6, 10];
bubbleSort(unsortedArray);
document.write(`Sorted array: [${unsortedArray.join(", ")}]`);
