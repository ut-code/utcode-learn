const countdownBox = document.getElementById("current-time");

function getCurrentTime() {
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth() + 1;
  const currentDate = now.getDate();
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();
  const currentSecond = now.getSeconds();

  return `今日は${currentYear}年${currentMonth}月${currentDate}日${currentHour}時${currentMinute}分${currentSecond}秒です。`;
}

countdownBox.textContent = getCurrentTime();
