async function fetchNikkei() {
  const response = await fetch("/nikkei");
  const price = await response.text();
  const now = new Date();
  const timeString = now.toLocaleTimeString("ja-JP");
  
  // 現在の株価を更新
  document.getElementById("current-price").textContent = price;
  document.getElementById("update-time").textContent = timeString;
  
  // 履歴に追加
  const historyList = document.getElementById("history");
  const listItem = document.createElement("li");
  listItem.textContent = `${timeString} - ${price}円`;
  historyList.insertBefore(listItem, historyList.firstChild);
  
  // 履歴を最新10件に制限
  while (historyList.children.length > 10) {
    historyList.removeChild(historyList.lastChild);
  }
}

// 初回実行
fetchNikkei();

// 10秒ごとに実行
setInterval(fetchNikkei, 10000);