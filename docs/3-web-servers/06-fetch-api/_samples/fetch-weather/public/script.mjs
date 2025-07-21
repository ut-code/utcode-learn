// http://localhost:3000/weather に HTTP リクエストを送信
// fetch 関数は非同期処理を行うため、await を演算子を適用して完了を待機する
const response = await fetch("/weather");

// レスポンスをテキストとして取得
const weather = await response.text();

const weatherElement = document.getElementById("weather");
weatherElement.textContent = weather;
