function checkPrime(n) {
  if (n <= 1) {
    // nが1以下のときは素数ではない
    return false;
  }
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) {
      // nはiで割り切れる
      return false;
    }
  }
  // 2..n-1 までのすべてのiで割り切れなかった時のみ到達する
  return true;
}

document.write(checkPrime(7)); // true
document.write(checkPrime(57)); // false
document.write(checkPrime(-1)); // false
