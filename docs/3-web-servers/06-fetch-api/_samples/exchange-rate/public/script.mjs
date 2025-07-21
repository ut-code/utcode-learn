// ページ読み込み時に自動的に実行される（トップレベルのawait）
const response = await fetch("/exchange-rate");
const rate = await response.text();
document.getElementById("rate").textContent = rate;