---
title: 簡単な Web アプリケーションの作成
sidebar_position: 2
---

import Answer from "@site/src/components/Answer";
import ViewSource from "@site/src/components/ViewSource";
import bmiVideo from "./bmi.mp4";
import calculatorVideo from "./calculator.mp4";
import objectEventVideo from "./object-event.mp4";
import drawingVideo from "./drawing.mp4";

---

## 1. BMI 計算アプリ

身長と体重を入力すると BMI を計算するアプリを作ってみましょう。

<video src={bmiVideo} controls muted autoPlay loop />

### 解答例

<Answer>

```html title=index.html
<h1>BMI計算アプリ</h1>
<p><input id="height" /> cm</p>
<p><input id="weight" /> kg</p>
<button id="calc-button">BMIを計算する</button>
<p>BMIは……</p>
<p id="answer">？？</p>
<p>です！</p>
```

```javascript title=script.js
let height = document.getElementById("height");
let weight = document.getElementById("weight");

let calcButton = document.getElementById("calc-button");

let answer = document.getElementById("answer");

calcButton.onclick = () => {
  answer.textContent = weight.value / (height.value / 100) ** 2;
};
```

<ViewSource url={import.meta.url} path="_samples/bmi" />

</Answer>

---

## 2. 電卓アプリ

入力した 2 つの値の四則演算ができる、簡易的な計算アプリを作ってみましょう。

### ルール

- 2 つの数値と、演算子 `+`、`-`、`*`、`/` のうちいずれか 1 つを選択できます
- `計算` ボタンをクリックすると、計算結果が表示されます

<video src={calculatorVideo} controls muted autoPlay loop />

### STEP 1

まずは、数値の入力欄を作り、入力された値を取得してみましょう。

- 入力欄は `input` タグで作成できます。`type` 属性に `number` を指定することで、入力を数値のみに限定することができます。

  ```html title=index.html
  <input id="number1" type="number" />
  ```

- 入力された数値は、`document.getElementById` 関数が返すオブジェクトの `value` プロパティに格納されています。
- ただし、文字列として格納されているので、四則演算を行うには数値に変換する必要があります。文字列を数値に変換するには、`Number()` を使います。

  ```javascript
  let number = Number("1"); // 1
  ```

- 2 つの入力欄とボタンを配置し、ボタンを押すと入力された 2 つの数の和が表示されるようにしてみましょう。

  ```html title=index.html
  <input id="number1" type="number" />
  <input id="number2" type="number" />
  <button id="calculate-button" type="button">計算</button>
  <div id="result"></div>
  ```

  ```javascript title=script.js
  let calculateButton = document.getElementById("calculate-button");
  let number1 = document.getElementById("number1");
  let number2 = document.getElementById("number2");
  let result = document.getElementById("result");

  function calculate() {
    let inputNumber1 = Number(number1.value);
    let inputNumber2 = Number(number2.value);
    result.textContent = inputNumber1 + inputNumber2;
  }
  calculateButton.onclick = calculate;
  ```

### STEP 2

次に、演算子を選択できるプルダウンメニューを作りましょう。

- プルダウンメニューは、`select` タグと `option` タグを使って実現できます。1 つ 1 つの選択肢を `option` タグで作成し、全体を `select` タグで囲みます。

  ```html title=index.html
  <select id="fruit-select">
    <option value="strawberry">イチゴ</option>
    <option value="apple">リンゴ</option>
    <option value="banana">バナナ</option>
  </select>
  ```

- `select` 要素を `document.getElementById` 関数で取得します。返されたオブジェクトの `value` プロパティには、プルダウンメニューで選択されている選択肢の `value` 属性に指定されている文字列が格納されています。

  ```javascript title=script.js
  let fruitSelect = document.getElementById("fruit-select");

  // "strawberry", "apple", "banana" のいずれか
  document.write(fruitSelect.value);
  ```

- 演算子 `+`、`-`、`*`、`/` の中から 1 つ選択できるプルダウンメニューを作り、選ばれた演算子に応じた計算結果が表示されるようにしましょう。
- 余裕がある人は、0 で割ろうとした時に計算結果の代わりにエラーメッセージが表示されるようにしてみましょう。

### 解答例

<Answer>

```html title=index.html
<input id="number1" type="number" />
<select id="operator">
  <option value="+">+</option>
  <option value="-">-</option>
  <option value="*">*</option>
  <option value="/">/</option>
</select>
<input id="number2" type="number" />
<button id="calculate-button" type="button">計算</button>
<div id="result"></div>
```

```javascript title=script.js
let calculateButton = document.getElementById("calculate-button");
let number1 = document.getElementById("number1");
let number2 = document.getElementById("number2");
let operator = document.getElementById("operator");
let result = document.getElementById("result");

function calculate() {
  let inputNumber1 = Number(number1.value);
  let inputNumber2 = Number(number2.value);
  if (operator.value === "/" && inputNumber2 === 0) {
    result.textContent = "0で割ることはできません。";
    result.style.color = "red";
  } else {
    if (operator.value === "+")
      result.textContent = inputNumber1 + inputNumber2;
    if (operator.value === "-")
      result.textContent = inputNumber1 - inputNumber2;
    if (operator.value === "*")
      result.textContent = inputNumber1 * inputNumber2;
    if (operator.value === "/")
      result.textContent = inputNumber1 / inputNumber2;
    result.style.color = "black";
  }
}
calculateButton.onclick = calculate;
```

<ViewSource url={import.meta.url} path="_samples/calculator" />

</Answer>

---

## 3. 成績改竄

田中君の成績を格納したオブジェクトがあります。

```javascript
let tanaka = {
  name: "田中",
  scores: {
    math: 80,
    science: 90,
  },
};
```

しかしながら田中君は、親に数学、理科の成績を高く見せたいと考えました。
下を満たすプログラムを作成して下さい。

- HTML を読み込むと、`成績:数学...80点、理科...90点` と表示される
- ボタンを押すと、`成績:数学...100点、理科...100点` と表示される
- ただし、JavaScript は `tanaka` オブジェクトのみを参照する。新しい成績格納オブジェクトを作ってはならない。

すなわち、

```javascript
HTML要素.textContent =
  "成績:数学..." +
  tanaka.scores.math +
  "点、理科..." +
  tanaka.scores.science +
  "点";
```

というコードを含めることを条件とします。

<video src={objectEventVideo} controls muted autoPlay loop />

### 解答例

<Answer>

```html title=index.html
<div id="academic-performance">成績:数学...80点、理科...90点</div>
<button id="button" type="button">クリック</button>
```

```javascript title=script.js
let tanaka = {
  name: "田中",
  scores: {
    math: 80,
    science: 90,
  },
};

function falsifyTanakaData() {
  tanaka.scores.math = 100;
  tanaka.scores.science = 100;
  let academicPerformance = document.getElementById("academic-performance");
  academicPerformance.textContent =
    "成績:数学..." +
    tanaka.scores.math +
    "点、理科..." +
    tanaka.scores.science +
    "点";
}

let trickbutton = document.getElementById("button");
trickbutton.onclick = falsifyTanakaData;
```

<ViewSource url={import.meta.url} path="_samples/object-event" />

</Answer>

---

## 4. 正方形の描画

枠内でクリックしたら正方形を描画するツールを作成してみましょう。

<video src={drawingVideo} controls muted autoPlay loop />

### ヒント

`canvas` 要素を用いることによって、ブラウザ上に図形や絵を描画することができます。
`canvas` 要素を `getElementById` 関数で呼び出し、`getContext` 関数を用いることによって図形の描画を行うことができます。

```html
<canvas id="canvas">描画用キャンバス</canvas>
```

```javascript
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
ctx.fillStyle = "green";
ctx.fillRect(10, 10, 100, 100);
```

<ViewSource url={import.meta.url} path="_samples/drawing/canvas-demo" />

また、DOM の onclick プロパティに格納された関数は、引数として [`MouseEvent` オブジェクト](https://developer.mozilla.org/ja/docs/Web/API/MouseEvent) を受け取ります。また、 [`MouseEvent#target` プロパティ](https://developer.mozilla.org/ja/docs/Web/API/Event/target)にアクセスすることで、ユーザーがクリックしたオブジェクトの情報などを取得することができます。

```html
<button id="button">押してください</button>
<div id="display"></div>
```

```javascript
let button = document.getElementById("button");
let tagNameDisplay = document.getElementById("tag-name-display");
let displayX = document.getElementById("display-x");
let displayY = document.getElementById("display-y");

function displayNameAndLocation(e) {
  // e は event の略
  tagNameDisplay.textContent = e.target.tagName;
  displayX.textContent = e.pageX;
  displayY.textContent = e.pageY;
}

button.onclick = displayNameAndLocation;
```

<ViewSource url={import.meta.url} path="_samples/drawing/event-demo" />

### 解答例

<Answer>

```html title=index.html
<canvas id="canvas" style="border: solid" width="360px" height="360px"
  >描画用キャンバス</canvas
>
<div>
  <button id="small-button">小</button>
</div>
<div>
  <button id="big-button">大</button>
</div>
```

```javascript title=script.js
let canvas = document.getElementById("canvas");
let smallButton = document.getElementById("small-button");
let bigButton = document.getElementById("big-button");

let context = canvas.getContext("2d");
let isBig = false;

canvas.onclick = drawRect;

function drawRect(e) {
  let top = canvas.getBoundingClientRect().top;
  let left = canvas.getBoundingClientRect().left;
  context.fillStyle = "green";
  if (isBig) {
    context.fillRect(e.pageX - left - 10, e.pageY - top - 10, 20, 20);
  } else {
    context.fillRect(e.pageX - left - 5, e.pageY - top - 5, 10, 10);
  }
}

function swapSize() {
  isBig = !isBig;
}

smallButton.onclick = swapSize;

bigButton.onclick = swapSize;
```

<ViewSource url={import.meta.url} path="_samples/drawing/answer" />

</Answer>
