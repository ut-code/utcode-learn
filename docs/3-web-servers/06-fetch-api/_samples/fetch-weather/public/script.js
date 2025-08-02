// await演算子を使用するため、asyncキーワードが必要
async function fetchWeather() {
  // http://localhost:3000/weather にHTTPリクエストを送信
  // fetch関数は非同期処理を行うため、awaitを演算子を適用して完了を待機する
  const response = await fetch("/weather");
  // レスポンスをテキストとして取得
  const weather = await response.text();
  document.getElementById("weather").textContent = weather;
}
fetchWeather();
