let integralNumber = 89; //任意の整数

let isPrime = true;
if (integralNumber <= 1) {
  isPrime = false;
}

for (let i = 2; i < integralNumber; i += 1) {
  // integralNumberが1以下のときは素数でない
  isPrime = isPrime && integralNumber % i != 0;
}

if (isPrime) {
  document.write(`${integralNumber} は素数です。`);
} else {
  document.write(`${integralNumber} は素数ではありません。`);
}
