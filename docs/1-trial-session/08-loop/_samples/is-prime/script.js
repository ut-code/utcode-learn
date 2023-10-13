const n = 57; // 任意の整数

let isPrime = true;
if (n <= 1) {
  // nが1以下のときは素数でない
  isPrime = false;
}

for (let i = 2; i < n; i += 1) {
  if (n % i == 0) {
    isPrime = false; // 変数には最後に代入した値のみを保持する
  }
}

if (isPrime) {
  document.write(`${n} は素数です`);
} else {
  document.write(`${n} は素数ではありません`);
}
