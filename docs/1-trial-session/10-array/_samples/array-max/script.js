const array1 = [3, 6, 8, 5, 0];
const array2 = [-8, -7, -3, -1, -5];
const array3 = [5986, 7202, 9347, 3593, 8166, 662, 2235, 9323, 2240, 943];
const array4 = [-878, -40, -324, -410, -592, -610, -880, -65, -423, -32];

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
document.write(
  `<p>配列 [${array3}] の最大値は${findMaxNumber(array3)} です。</p>`,
);
document.write(
  `<p>配列 [${array4}] の最大値は${findMaxNumber(array4)} です。</p>`,
);
document.write(`<p>空の配列の最大値は ${findMaxNumber([])} です。</p>`);
