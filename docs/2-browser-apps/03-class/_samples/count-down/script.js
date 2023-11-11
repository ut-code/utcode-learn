const countdownBox = document.getElementById("countdown-box");

const now = new Date();
const remainingHours = 23 - now.getHours();
const remainingMinutes = 59 - now.getMinutes();
const remainingSeconds = 60 - now.getSeconds();
countdownBox.textContent = `今日は残り${remainingHours}時間 ${remainingMinutes}分 ${remainingSeconds}秒です。`;
