// await 演算子を使用するため、async キーワードが必要
document.getElementById("convert-button").onclick = async () => {
  // 為替レートを取得
  const response = await fetch("/exchange-rate");
  const rate = parseFloat(await response.text());

  // 入力された円の金額を取得
  const yenInput = document.getElementById("yen-input");
  const yen = parseFloat(yenInput.value);

  // ドルに換算
  const dollar = yen / rate;

  // 結果を表示
  document.getElementById("result").textContent = dollar;
};
