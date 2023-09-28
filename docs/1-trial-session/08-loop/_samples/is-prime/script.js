let integer = 57; // insert any natural number here

let isPrime = true;
if (integer <= 1) {
  // integerが1以下のときは素数でない
  isPrime = false;
}

for (let i = 2; i < integer; i++) {
  if (integer % i == 0) {
    isPrime = false; // 変数には最後に代入した値が保存される
  }
}

if (isPrime) {
  document.write(`${integer} は素数です`);
} else {
  document.write(`${integer} は素数ではありません`);
}
