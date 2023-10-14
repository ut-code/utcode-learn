---
title: 配列
---

import CodeBlock from '@theme/CodeBlock';
import Term from "@site/src/components/Term";
import ViewSource from "@site/src/components/ViewSource";
import Answer from "@site/src/components/Answer";

## 配列

JavaScript における配列は、複数の値を並べて一つにまとめたオブジェクトです。`[` から `]` で囲まれた部分は配列を生成する式になります。

```javascript
const studentNames = ["田中", "佐藤", "鈴木"];
```

これで、3 つの文字列値 `"田中"`, `"佐藤"`, `"鈴木"` が順番に並んで格納された配列が作成され、変数 `studentNames` に格納されました。

配列を使用するには、配列を生成する際と同じく `[`, `]` 記号を用います。この括弧に囲まれた部分に数値（**インデックス**）を指定すると、配列の要素にアクセスできます。

```javascript
document.write(studentNames[0]); // 田中
document.write(studentNames[2]); // 鈴木
studentNames[1] = "内藤";
```

:::caution 配列のインデックス

配列のインデックスは `0` から始まります。このため、`2` 番目の要素のインデックスは `1` で、`n` 番目の要素のインデックスは `n - 1` になります。

また、長さが `N` の配列の最後の要素のインデックスは `N - 1` になります。

:::

`[` 〜 `]` の中には非負整数値になる任意の式を記述できます。変数や関数呼び出しも式なので使用することが可能です。

```javascript
const six = 6;
document.write(studentNames[six / 2 - 1]); // 鈴木
```

### 課題

次のプログラムを実行すると何と表示されるでしょうか。

```javascript
document.write([3, 2, 1][0]);
```

<Answer>

`[3, 2, 1]` で配列が生成され、`[0]` で 0 番目の要素が指定されているので、`3` と表示されます。

<ViewSource url={import.meta.url} path="_samples/array" />

</Answer>

## for 〜 of 文

`for 〜 of` 文を用いると、配列の要素を順番に取り出す処理を簡単に記述できます。

```javascript
const studentNames = ["田中", "佐藤", "鈴木"];
for (const studentName of studentNames) {
  document.write(studentName);
}
```

このプログラムを実行すると、 `田中佐藤鈴木` と表示されます。

`for 〜 of` 文の構造は次の通りです。

```javascript
for (変数の宣言/変数名 of 配列) {
  処理;
}
```

配列の要素を順番に取り出し、 `of` の左側に指定された変数に設定してから、内部の処理を実行していきます。

## 配列のプリセット変数/関数

JavaScript の配列には、便利な変数や関数が定義されています。正確にはオブジェクトとクラスの回でそれぞれ扱う`プロパティ`、`メソッド`というものですが、今のところは特殊な書き方をする変数や関数であると考えればよいでしょう。

### `配列.length` 変数

[`配列.length`](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/length) という変数には、指定した配列の長さが自動的に反映されます。

```javascript
const studentNames = ["田中", "佐藤", "鈴木"];
document.write(studentNames.length); // 3
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
document.write(numbers.length); // 10
```

### `配列.push` 関数

[`関数.push`関数](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/push) は、指定した配列の末尾に新しい値を追加する関数です。

```javascript
const studentNames = ["田中", "佐藤", "鈴木"];
studentNames.push("内藤");
document.write(studentNames); // 田中,佐藤,鈴木,内藤
```

---

## 基礎演習

### 要素の和

- 配列があります。その配列の要素の和を求めてみましょう。

:::tip
`for of` 文を使って、配列のそれぞれの要素に対して操作を実行します。
:::

:::note
次の配列をテスト用に使ってください。

```javascript
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
```

```javascript
const array = [-3, -1, 9, -10, 3, 7, 6, 1, 0, 5];
```

:::

<Answer>

```javascript
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = 0;
for (const elem of array) {
  sum += elem;
}

document.write("sum of array is: " + sum);
```

<ViewSource url={import.meta.url} path="_samples/array-sum-for-of" />

### 別解

`for of` 文を使わず、次のように書くこともできます。

```javascript
const array = [-3, -1, 9, -10, 3, 7, 6, 1, 0, 5];

let sum = 0;
for (let i = 0; i < array.length; i += 1) {
  sum += array[i];
}

document.write();
```

<ViewSource url={import.meta.url} path="_samples/array-sum-simple-for" />

</Answer>

## 中級演習

### 配列の最大値

引数にひとつの配列が与えられたとき、その配列の最大値を求める関数 `findMax` を作成しましょう。

:::note

テスト用に、ランダムに生成された次の配列を使ってください。

```javascript
const array1 = [3, 6, 8, 5, 0];
const array2 = [-8, -7, -3, -1, -5];
const array3 = [5986, 7202, 9347, 3593, 8166, 662, 2235, 9323, 2240, 943];
const array4 = [-878, -40, -324, -410, -592, -610, -880, -65, -423, -32];
```

:::

:::tip

今までのように仮の初期値を置く方法では、配列の各値が非常に大きな負の値であった場合に仮の初期値が返ってきてしまいます。

どうすればいいでしょうか？

:::

<Answer>

配列の最初の値を初期値に設定することで解消します。

```javascript
const array1 = [3, 6, 8, 5, 0];
const array2 = [-8, -7, -3, -1, -5];
const array3 = [5986, 7202, 9347, 3593, 8166, 662, 2235, 9323, 2240, 943];
const array4 = [-878, -40, -324, -410, -592, -610, -880, -65, -423, -32];

function arrayMax(array) {
  if (array.length == 0) return; //空配列を除外
  let maxValue = array[0];
  for (const value of array) {
    if (maxValue < value) {
      maxValue = value;
    }
  }
  return maxValue;
}

document.write(`<p>配列 [${array1}] の最大値は${arrayMax(array1)} です。</p>`);
document.write(`<p>配列 [${array2}] の最大値は${arrayMax(array2)} です。</p/>`);
document.write(`<p>配列 [${array3}] の最大値は${arrayMax(array3)} です。</p>`);
document.write(`<p>配列 [${array4}] の最大値は${arrayMax(array4)} です。</p>`);
document.write(`<p>空の配列の最大値は ${arrayMax([])} です。</p/>`);
```

:::danger
配列の長さにかかわらず配列の最初の値を使うような処理をする場合は、長さが0である空の配列を除外することを忘れないでください！
:::

<ViewSource url={import.meta.url} path="_samples/array-max" />

</Answer>

<!-- オブジェクトはまだ扱っていないためコメントアウト
## 配列とオブジェクト

配列はオブジェクトの一種です。しかしながら、JavaScript のオブジェクトとは、[オブジェクトの節](../../1-trial-session/11-object/index.md)で扱ったように、プロパティ名とプロパティ値の組み合わせでした。

配列もこの原則に従って動作しています。次の図に示すように、配列とは、各要素のインデックスがプロパティ名になっているオブジェクトだと考えることができるのです。

![配列のプロパティ](./array-properties.png)

逆に、その他のオブジェクトも配列と同じように使用することができます。この記法を**ブラケット記法**と呼び、プログラムの動作に応じて使用したいプロパティを切り替えるのに役立ちます。

```javascript
const subject = "math"; // ここを変えると表示される教科が変わる
const scores = { math: 90, science: 80 };
document.write(`${subject} の点数は ${scores[subject]} です。`); // math の点数は 90 です。
```

:::tip オブジェクトのプロパティ

オブジェクトのプロパティに数値は使用できません。それではなぜ、配列の場合は `studentNames[2]` のように記述できるのでしょうか。

答えは単純で、文字列に変換されているからです。このため、次のプログラムは全く問題なく動作します。

```javascript
const studentNames = ["田中", "佐藤", "鈴木"];
document.write(studentNames["0"]); // 田中
```

:::
-->

```

```
