const countdownBox = document.getElementById("countdown-box");

const now = new Date();
let remainingHours = 23 - now.getHours();
let remainingMinutes = 59 - now.getMinutes();
let remainingSeconds = 60 - now.getSeconds();
// remainingSeconds が 60 の時は繰り上げる
if (remainingSeconds === 60) {
  remainingMinutes += 1;
  remainingSeconds = 0;
}
// remainingMinutes が 60 の時は繰り上げる
if (remainingMinutes === 60) {
  remainingHours += 1;
  remainingMinutes = 0;
}
countdownBox.textContent = `今日は残り${remainingHours}時間${remainingMinutes}分${remainingSeconds}秒です。`;
