document.getElementById("withdraw-button").onclick = async () => {
  const response = await fetch("/transaction", {
    // POSTリクエストを送信
    method: "POST",
    // リクエストヘッダーにContent-Typeを指定
    headers: { "Content-Type": "application/json" },
    // リクエストボディにJSON形式のデータを指定
    body: JSON.stringify({ amount: -10000 }),
  });
  const account = await response.json();
  document.getElementById("balance").textContent = account.balance;
};
