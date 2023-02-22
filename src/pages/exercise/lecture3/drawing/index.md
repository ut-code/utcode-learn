## 第３回問題

枠内でクリックしたら正方形を描画するツールを作成してみましょう。

## ヒント

`canvas`要素を用いることによって、ブラウザ上に図形や絵を描画することができます。
`canvas`要素を`getElementById`関数で呼び出し、`getContext`関数を用いることによって図形の描画を行うことができます。

```html
<canvas id="canvas">描画用キャンバス</canvas>
```

```javascript
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "green";
ctx.fillRect(10, 10, 100, 100);
```

## 解答

```html title="imageReader.html"
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
  </head>
  <body>
    <canvas id="canvas" style="border: solid" width="360px" height="360px"
      >描画用キャンバス</canvas
    >
    <div>
      <button id="small">小</button>
    </div>
    <div>
      <button id="big">大</button>
    </div>
    <script src="imageReader.js"></script>
  </body>
</html>
```

```javascript title="imageReader.js"
const canvas = document.getElementById("canvas");
const small = document.getElementById("small");
const big = document.getElementById("big");

const ctx = canvas.getContext("2d");
let isBig = false;

canvas.onclick = (e) => drawRect(e);

function drawRect(e) {
  const top = canvas.getBoundingClientRect().top;
  const left = canvas.getBoundingClientRect().left;
  ctx.fillStyle = "green";
  if (isBig) {
    ctx.fillRect(e.pageX - left - 10, e.pageY - top - 10, 20, 20);
  } else {
    ctx.fillRect(e.pageX - left - 5, e.pageY - top - 5, 10, 10);
  }
}

small.onclick = () => {
  isBig = false;
};

big.onclick = () => {
  isBig = true;
};
```
