---
title: プロジェクトの実装例
---

import Term from "@site/src/components/Term";

このページでは、[プロジェクト](../13-project/index.md)に掲載されているふたつのアプリケーションの実装例を掲載します。

## おみくじ

```html title="index.html"
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="utf-8" />
    <title>おみくじ</title>
  </head>
  <body>
    <div id="result"></div>
    <button id="draw-omikuji-button" type="button">おみくじをひく</button>
    <script src="./script.js"></script>
  </body>
</html>
```

```javascript title="script.js"
let drawOmikujiButton = document.getElementById("draw-omikuji-button");
let result = document.getElementById("result");

function drawOmikuji() {
  let r = Math.random();
  if (r < 0.2) {
    result.textContent = "大吉";
    result.style.color = "red";
  } else if (r < 0.7) {
    result.textContent = "吉";
    result.style.color = "black";
  } else {
    result.textContent = "凶";
    result.style.color = "blue";
  }
}
drawOmikujiButton.onclick = drawOmikuji;
```

if ～ else if ～ else 構文を用いて、得られた乱数の大きさに応じた処理を実行しています。

## ストップウォッチ

```html title="index.html"
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="utf-8" />
    <title>ストップウォッチ</title>
  </head>
  <body>
    <div id="indicator">0</div>
    <button id="start-button" type="button">スタート</button>
    <button id="stop-button" type="button" disabled>ストップ</button>
    <script src="./script.js"></script>
  </body>
</html>
```

```javascript title="script.js"
let startButton = document.getElementById("start-button");
let stopButton = document.getElementById("stop-button");
let indicator = document.getElementById("indicator");

let timerId;
let time = 0;

function tick() {
  time = time + 1;
  indicator.textContent = time;
}

function startStopWatch() {
  timerId = setInterval(tick, 1000);
  startButton.disabled = true;
  stopButton.disabled = false;
}

function stopStopWatch() {
  clearInterval(timerId);
  startButton.disabled = false;
  stopButton.disabled = true;
}

startButton.onclick = startStopWatch;
stopButton.onclick = stopStopWatch;
```

スタートボタンが押されたときに実行される<Term type="javascriptFunction">関数</Term>とは別に、`setInterval` によって呼ばれる<Term type="javascriptFunction">関数</Term>の定義が必要です。この<Term type="javascriptFunction">関数</Term>の中では、`setInterval` <Term type="javascriptFunction">関数</Term>を用いて `tick` の定期的な実行を開始するのと同時に、後でタイマーの実行を停止できるよう、`setInterval` の<Term type="javascriptReturnValue">戻り値</Term>を<Term type="javascriptFunction">関数</Term>外で定義された<Term type="javascriptVariable">変数</Term>に<Term type="javascriptAssignment">代入</Term>しています。

このサンプルでは、発展的な例として、スタートボタンとストップボタンのうち、不必要なボタンを無効化する処理を行っています。`document.getElementById` で取得した `button` <Term type="element">要素</Term>に対応する<Term type="javascriptObject">オブジェクト</Term>の `disabled` プロパティが果たす役割に注目してみてください。
