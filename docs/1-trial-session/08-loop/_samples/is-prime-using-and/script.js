let integer = 89; //任意の整数

let isPrime = true;
if (integer <= 1) {
  // integerが1以下のときは素数でない
  isPrime = false;
}

for (let i=2; i < integer; i++){
  isPrime = isPrime && (integer % i == 0);
}

if (isPrime) {
  document.write(`${integer} は素数です`);
} else {
  document.write(`${integer} は素数ではありません`);
}