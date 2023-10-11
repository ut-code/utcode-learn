let integralNumber = 57; // 任意の整数

let isPrime = true;
if (integralNumber <= 1) {
  // integralNumberが1以下のときは素数でない
  isPrime = false;
}

for (let i = 2; i < integralNumber; i += 1) {
  if (integralNumber % i == 0) {
    isPrime = false; // 変数には最後に代入した値のみを保持する
  }
}

if (isPrime) {
  document.write(`${integralNumber} は素数です`);
} else {
  document.write(`${integralNumber} は素数ではありません`);
}
