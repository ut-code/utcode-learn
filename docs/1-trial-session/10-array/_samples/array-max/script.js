const array1 = [3, 6, 8, 5, 0];
const array2 = [-8, -7, -3, -1, -5];

function findMaxNumber(numbers) {
  if (numbers.length === 0) return; // 空配列を除外
  let maxNumber = numbers[0];
  for (const number of numbers) {
    if (maxNumber < number) {
      maxNumber = number;
    }
  }
  return maxNumber;
}

document.write(
  `<p>配列 [${array1}] の最大値は${findMaxNumber(array1)} です。</p>`,
);
document.write(
  `<p>配列 [${array2}] の最大値は${findMaxNumber(array2)} です。</p>`,
);
