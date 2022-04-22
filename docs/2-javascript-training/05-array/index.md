---
title: 配列
---

import CodeBlock from '@theme/CodeBlock';
import Term from "@site/src/components/Term";
import OpenInCodeSandbox from "@site/src/components/OpenInCodeSandbox";

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

`[` 〜 `]` の中には任意の式を記述できます。変数を使用することも可能です。

```javascript
const six = 6;
document.write(studentNames[six / 2 - 1]); // 鈴木
```

### 課題

次のプログラムを実行すると何と表示されるでしょうか。

```javascript
document.write([3, 2, 1][0]);
```

## for 〜 of 文

`for 〜 of` 文を用いると、配列の要素を順番に取り出す処理を簡単に記述できます。

```javascript
const studentNames = ["田中", "佐藤", "鈴木"];
for (const studentName of studentNames) {
  document.write(studentName);
}
```

このプログラムの実行すると、 `田中佐藤鈴木` と表示されます。

`for 〜 of` 文の構造は次の通りです。

```javascript
for (変数の宣言/変数名 of 配列) {
  処理;
}
```

配列の要素を順番に取り出し、 `of` の左側に指定された変数に設定してから、内部の処理を実行していきます。

## `Array` クラス

JavaScript の配列は、[`Array` クラス](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array)のインスタンスであるオブジェクトです。`Array` クラスには、便利なメソッドやプロパティが定義されています。

### `Array#push` メソッド

[`Array#push` メソッド](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/push)は、配列の末尾に新しい値を追加するメソッドです。

```javascript
const studentNames = ["田中", "佐藤", "鈴木"];
studentNames.push("内藤");
document.write(studentNames[3]); // 内藤
```

### `Array.length` プロパティ

[`Array#length` プロパティ](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/length)は、配列の長さを自動的に反映するプロパティです。

```javascript
const studentNames = ["田中", "佐藤", "鈴木"];
document.write(studentNames.length); // 3
studentNames.push("内藤");
document.write(studentNames.length); // 4
```

## 配列とオブジェクト

配列はオブジェクトの一種です。しかしながら、JavaScriptのオブジェクトとは、[オブジェクトの節](../../1-trial-session/10-object/index.md)で扱ったように、プロパティ名とプロパティ値の組み合わせでした。

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
