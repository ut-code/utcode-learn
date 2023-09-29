let integer = 57; // 任意の整数

let isPrime = true;
if (integer <= 1) {
  // integerが1以下のときは素数でない
  isPrime = false;
}

for (let i = 2; i < integer; i++) {
  if (integer % i == 0) {
    isPrime = false; // 変数には最後に代入した値のみを保持する
  }
}

if (isPrime) {
  document.write(`${integer} は素数です`);
} else {
  document.write(`${integer} は素数ではありません`);
}
