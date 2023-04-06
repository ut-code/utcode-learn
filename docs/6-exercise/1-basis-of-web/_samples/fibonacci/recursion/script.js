function fibonacci(n) {
  if (n <= 2) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

return fibonacci(10);
// このように、関数が自分自身を呼び出すときその関数を再帰関数と呼びます。
