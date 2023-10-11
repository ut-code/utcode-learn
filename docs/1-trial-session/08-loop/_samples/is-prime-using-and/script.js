let n = 89; //任意の整数

let isPrime = true;
if (n <= 1) {
  isPrime = false;
}

for (let i = 2; i < n; i += 1) {
  // nが1以下のときは素数でない
  isPrime = isPrime && n % i != 0;
}

if (isPrime) {
  document.write(`${n} は素数です。`);
} else {
  document.write(`${n} は素数ではありません。`);
}
