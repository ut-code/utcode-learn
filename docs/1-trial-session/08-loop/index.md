---
title: 繰り返し
---

import CodeBlock from '@theme/CodeBlock';
import Term from "@site/src/components/Term";
import ViewSource from "@site/src/components/ViewSource";
import Answer from "@site/src/components/Answer";
import whileLoopVideo from "./while-loop.mp4";

## while 文

while 文を用いると、ある条件が満たされている間実行され続けるプログラムを記述することができます。次のプログラムを実行すると、画面には `01234` のように表示されます。

```javascript
let i = 0;
while (i < 5) {
  document.write(i);
  i = i + 1;
}
document.write("終了");
```

プログラムの実行の流れを確認してみましょう。

<video src={whileLoopVideo} controls muted autoPlay loop />

while 文は、次のように記述します。

```javascript
while (条件式) {
  処理;
}
```

`while` 文の実行に差し掛かると、まずは条件式が評価されます。この結果が `true` であれば、波括弧内の処理が実行され、`false` であれば終了します。波括弧内の処理が終わると、再び条件式が評価されます。以上の繰り返しです。

これをフローチャートの形式で表すと、次のようになります。

![while文の構造](./while-statement.drawio.svg)

### 課題

1 から 10 までの整数の合計を計算するプログラムを作ってみましょう。

:::info ヒント

`1` から `10` まで順番に増えていく変数 `i` と、合計値を保存しておく変数 `sum` を用意しましょう。

:::

<Answer>

```javascript
let i = 1;
let sum = 0;
while (i <= 10) {
  sum = sum + i;
  i = i + 1;
}
document.write(sum);
```

<ViewSource url={import.meta.url} path="_samples/answer-while" />

</Answer>

:::tip 複合代入演算子、インクリメント演算子

[**複合代入演算子**](https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Expressions_and_Operators#%E4%BB%A3%E5%85%A5%E6%BC%94%E7%AE%97%E5%AD%90) は、計算と代入を同時に行うことができる演算子です。

`x += y` は、`x = x + y` という意味になります。他にも `-=` や `*=` などの演算子が定義されています。`x -= y` は`x = x - y`、`x *= y` は`x = x * y` という意味になります。

複合代入演算子を用いると、

```javascript
i = i + 1;
```

は以下のように書き換えることができます。

```javascript
i += 1;
```

[**インクリメント演算子**](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Increment) は、与えられた変数に1を足します。
一方、[**デクリメント演算子**](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Decrement) は、与えられた変数から1を引きます。

`x++` は `x = x + 1`（＝`x += 1`）、 `y--` は `y = y - 1` （＝`y -= 1`） という意味になります。
インクリメント演算子を使うと、

```javascript
i = i + 1;
```

は以下のように書き換えることができます。

```javascript
i++;
```

:::

## for 文

`for` 文は、`while` 文にほんの少しだけ機能を追加したものになります。

先ほどのプログラムは、 `for` 文によって次のように書き換えられます。

```javascript
for (let i = 0; i < 5; i++) {
  document.write(i);
}
document.write("終了");
```

`for` 文の文法は次の通りです。

```javascript
for (初期化; 条件式; 更新式) {
  処理;
}
```

`while` と構造が似ていますが、`条件式`のほかに`初期化`と`更新式`が加えられています。通常、繰り返しを扱うプログラムでは、`while` の例における変数 `i` のように、一番はじめに現在の繰り返し回数を表す変数を用意し、ループの終わりでその変数を更新します。

これらをより便利に記述できるのが `for` 文、というわけです。

![for文の構造](./for-statement.drawio.svg)

### 課題

前項で書いた 1 から 10 までの整数の合計を計算するプログラムを for 文を用いて書き換えてみましょう。

<Answer>

```javascript
let sum = 0;
for (let i = 1; i <= 10; i += 1) {
  sum += i;
}
document.write(sum);
```

<ViewSource url={import.meta.url} path="_samples/answer-for" />

</Answer>

## ネストされたループ

`for` 文や `while` 文は、ネストして使用することができます。次のプログラムは、`(x, y) = (0, 0)` から始まって `(x, y) = (4, 4)` まで画面に表示します。

```javascript
for (let x = 0; x < 5; x++) {
  for (let y = 0; y < 5; y++) {
    document.write(`(x, y) = (${x}, ${y})<br>`);
  }
}
```

<ViewSource url={import.meta.url} path="_samples/nested-loop" />

:::tip テンプレートリテラル

テンプレートリテラルは、文字列をプログラム中に記述する方法の一種です。ただ、文字列中に別の式を埋め込めるという特徴があります。

```javascript
const string1 = "10から2を引くと" + (10 - 2) + "です。";
const string2 = `10から2を引くと${10 - 2}です。`;
```

通常の文字列は `"` (ダブルクォーテーション) で囲って記述するのに対し、テンプレートリテラルでは <code>`</code> (バッククォーテーション) を用います。

![バッククォーテーション](./backquote.drawio.svg)

:::

### 課題

HTML の `table`, `tr`, `td` タグを用いて、九九の表を画面に表示させてみましょう。

<Answer>

開きタグと閉じタグをどのタイミングで出力すべきかに注意しましょう。

```javascript
document.write("<table>");
for (let x = 1; x <= 9; x += 1) {
  document.write("<tr>");
  for (let y = 1; y <= 9; y += 1) {
    document.write(`<td>${x * y}</td>`);
  }
  document.write("</tr>");
}
document.write("</table>");
```

<ViewSource url={import.meta.url} path="_samples/times-table" />

</Answer>
