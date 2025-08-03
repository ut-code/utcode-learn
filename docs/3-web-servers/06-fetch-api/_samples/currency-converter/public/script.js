// await演算子を使用するため、asyncキーワードが必要
document.getElementById("convert-button").onclick = async () => {
  // 入力された円の金額を取得
  const jpyInput = document.getElementById("jpy-input");
  const jpy = parseFloat(jpyInput.value);

  // 為替レートを取得
  const response = await fetch("/exchange-rates");
  const rates = await response.json();

  // ドルに換算
  const usd = jpy / rates.usdJpy;

  // ユーロに換算
  const eur = jpy / rates.eurJpy;

  // 結果を表示
  document.getElementById("usd-result").textContent = usd;
  document.getElementById("eur-result").textContent = eur;
};
