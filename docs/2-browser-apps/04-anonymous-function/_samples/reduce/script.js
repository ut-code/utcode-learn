const scores = [90, 65, 70, 55, 80];
const minScore = scores.reduce((previousValue, currentValue) => {
  if (previousValue > currentValue) {
    return currentValue;
  }
  return previousValue;
});
document.write(minScore); // 55
