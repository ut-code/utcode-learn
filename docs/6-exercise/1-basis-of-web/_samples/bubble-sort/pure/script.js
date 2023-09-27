//第一引数の配列の第二引数、第三引数のインデックスの要素を入れ替える関数
function swapIndex(array, indexA, indexB) {
  const arrayToChange = array.slice(); //配列の各値をコピー
  const temp = arrayToChange[indexA];
  arrayToChange[indexA] = arrayToChange[indexB];
  arrayToChange[indexB] = temp;
  return arrayToChange;
}

//本関数
function bubbleSort(array) {
  let willResult = array.slice(); // 配列の各値をコピー
  for (let i = array.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (willResult[j] > willResult[j + 1])
        willResult = swapIndex(willResult, j, j + 1);
    }
  }
  return willResult;
}

let unsortedArray = [9, 3, 1, 5, 8, 2, 4, 7, 6, 10];
document.write(`Sorted array: [${bubbleSort(unsortedArray).join(", ")}] <br>`);
document.write(
  `Input Array(should not be sorted): [${unsortedArray.join(", ")}]`,
);
