function fibonacci(n) {
  let sequence = [0, 1];
  for (let i = 2; i < n + 1; i += 1) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence[n];
}

document.write(fibonacci(10));
