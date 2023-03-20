let n = 27;
const answer = document.getElementById("answer");
while (n !== 1) {
  answer.textContent += n + " → ";
  if (n % 2 === 0) {
    n /= 2;
  } else {
    n *= 3;
    n += 1;
  }
}
answer.textContent += 1;
