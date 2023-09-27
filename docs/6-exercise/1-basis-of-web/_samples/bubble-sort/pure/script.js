//第一引数の配列の第二引数、第三引数のインデックスの要素を入れ替える関数
function swapIndex(inputArray, indexA, indexB) {
  const newArray = inputArray.slice(); //配列の各値をコピー
  const temp = newArray[indexA];
  newArray[indexA] = newArray[indexB];
  newArray[indexB] = temp;
  return newArray;
}

//本関数
function bubbleSort(inputArray) {
  let array = inputArray.slice(); // 配列の値をコピー
  for (let i = array.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) swapIndex(array, j, j + 1);
    }
  }
  return array;
}

let unsortedArray = [9, 3, 1, 5, 8, 2, 4, 7, 6, 10];
document.write(`Sorted array: [${bubbleSort(unsortedArray).join(", ")}] <br>`);
document.write(
  `Input Array(should not be sorted): [${unsortedArray.join(", ")}]`,
);
