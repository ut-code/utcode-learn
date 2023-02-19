---
title: 課題(プロジェクト)
---

import ViewSource from "@site/src/components/ViewSource";

## 課題 3-X(仮)

入力した 2 つの値の四則演算ができる、簡易的な計算アプリを作ってみましょう。

### ルール

- 2 つの数値と、演算子 `+`、`-`、`*`、`/` のうちいずれか 1 つを選択できます
- `計算` ボタンをクリックすると、計算結果が表示されます

### STEP 1

まずは、数値の入力欄を作り、入力された値を取得してみましょう。

- 入力欄は `input` タグで作成できます。`type` 属性に `number` を指定することで、入力を数値のみに限定することができます。

```html title="index.html"
  <input id="number1" type="number" />
  ```

- 入力された数値は、`document.getElementById` 関数が返すオブジェクトの `value` プロパティに格納されています。
- ただし、文字列として格納されているので、四則演算を行うには数値に変換する必要があります。文字列を数値に変換するには、`Number()` を使います。

```javascript
let number = Number("1"); // 1
```

- 2 つの入力欄とボタンを配置し、ボタンを押すと入力された 2 つの数の和が表示されるようにしてみましょう。

```html title="index.html"
<input id="number1" type="number" />
<input id="number2" type="number" />
<button id="calculate-button" type="button">計算</button>
<div id="result"></div>
```

```javascript title="script.js"
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

```html title="index.html"
<select id="fruit-select">
  <option value="strawberry">イチゴ</option>
  <option value="apple">リンゴ</option>
  <option value="banana">バナナ</option>
</select>
```

- `select` 要素を `document.getElementById` 関数で取得します。返されたオブジェクトの `value` プロパティには、プルダウンメニューで選択されている選択肢の `value` 属性に指定されている文字列が格納されています。

```javascript title="script.js"
let fruitSelect = document.getElementById("fruit-select");

// "strawberry", "apple", "banana" のいずれか
document.write(fruitSelect.value);
```

- 演算子 `+`、`-`、`*`、`/` の中から 1 つ選択できるプルダウンメニューを作り、選ばれた演算子に応じた計算結果が表示されるようにしましょう。
- 余裕がある人は、0 で割ろうとした時に計算結果の代わりにエラーメッセージが表示されるようにしてみましょう。

### 解答例

<ViewSource path="/src/pages/exercise/lecture3/calculator/_samples" />
