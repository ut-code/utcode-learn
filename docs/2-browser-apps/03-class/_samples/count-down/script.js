const countdownBox = document.getElementById("countdown-box");

function getRemainingTime() {
  const now = new Date();
  const endOfDay = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    23,
    59,
    59,
    999,
  );
  const remainingTime = endOfDay.getTime() - now.getTime();

  const hours = Math.floor(remainingTime / (1000 * 60 * 60));
  const minutes = Math.floor(remainingTime / (1000 * 60)) % 60;
  const seconds = Math.floor(remainingTime / 1000) % 60;

  return `今日の残り時間： ${hours}時間 ${minutes}分 ${seconds}秒です。`;
}

countdownBox.textContent = getRemainingTime();
