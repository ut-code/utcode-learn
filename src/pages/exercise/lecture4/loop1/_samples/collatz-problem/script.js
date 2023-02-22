let n = 27;
while (n !== 1) {
  document.write(n + " → ");
  if (n % 2 === 0) {
    n /= 2;
  } else {
    n *= 3;
    n += 1;
  }
}
document.write(1);
