const n = 89; // 任意の整数

let isPrime = true;
if (n <= 1) {
  // n が 1 以下のときは素数でない
  isPrime = false;
}

for (let i = 2; i < n; i += 1) {
  isPrime = isPrime && n % i != 0;
}

if (isPrime) {
  document.write(`${n} は素数です`);
} else {
  document.write(`${n} は素数ではありません`);
}
