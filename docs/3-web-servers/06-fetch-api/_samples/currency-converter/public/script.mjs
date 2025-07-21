// ボタンクリックイベントに非同期関数を設定
// async キーワードが必要
document.getElementById("convert-button").onclick = async () => {
  const yenInput = document.getElementById("yen-input");
  const yenAmount = parseFloat(yenInput.value);
  
  if (isNaN(yenAmount) || yenAmount <= 0) {
    alert("正しい金額を入力してください");
    return;
  }
  
  // 為替レートを取得
  const response = await fetch("/exchange-rate");
  const rate = parseFloat(await response.text());
  
  // ドルに換算
  const dollarAmount = (yenAmount / rate).toFixed(2);
  
  // 結果を表示
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `
    <p>為替レート: 1ドル = ${rate}円</p>
    <p>${yenAmount}円 = <strong>${dollarAmount}ドル</strong></p>
  `;
};