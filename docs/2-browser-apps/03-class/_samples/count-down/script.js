function count() {
  const now = new Date();
  const remainingHours = 24 - now.getHours();
  const remainingsMinutes = 60 - now.getMinutes();
  const remainingSeconds = 60 - now.getSeconds();
  return `今日は残り${remainingHours}時間、${remainingsMinutes}分、${remainingSeconds}秒`;
}
const box = document.getElementById("box");

setInterval(() => {
  box.textContent = count();
}, 1000);