---
title: 関数
---

import Term from "@site/src/components/Term";

## 処理の共通化

数学における関数は、数と数の関係のようなものですが、<Term type="javascript">JavaScript</Term> をはじめとしたプログラミング言語の文脈における<Term strong type="javascriptFunction">関数</Term>は、基本的には<Term type="javascriptStatement">文</Term>のまとまりに名前を付けたものです。

```jsx
// 関数を定義しておけば
function greet() {
  document.write("Hello World!");
}

// 後から呼び出すことができる
greet();
greet();
```

上のプログラムにおいて、`function`キーワードから始まる部分は<Term type="javascriptFunction">関数</Term>を定義するための<Term type="javascriptControlFlow">制御構文</Term>です。<Term type="javascriptFunction">関数</Term>定義では、 `function` キーワードに続けて<Term type="javascriptFunction">関数</Term>名、かっこを記述します。この後、<Term type="javascriptFunction">関数</Term>内で実行したい処理を波かっこの中に記述していきます。

<p><Term type="javascriptFunction">関数</Term>を定義すると、<Term type="javascriptFunction">関数</Term>名に続けてかっこを記述することにより、その<Term type="javascriptFunction">関数</Term>を実行できるようになります。</p>

このプログラムでは、 `greet` <Term type="javascriptFunction">関数</Term>が 2 回呼び出されているので、ブラウザに `Hello World!` が 2 つ表示されます。

## <Term strong type="javascriptParameter">引数</Term>

<p><Term type="javascriptFunction">関数</Term>の振る舞いを呼び出し時に変更するため、<Term type="javascriptFunction">関数</Term>に<Term strong type="javascriptParameter">引数</Term>を与えることができます。<Term type="javascriptParameter">引数</Term>には任意の<Term type="javascriptValue">値</Term>が指定できます。</p>

```jsx
function greet(greetingType, myName) {
  document.write("Good " + greetingType + ", " + myName + "!");
}

greet("morning", "佐藤");
```

<p><Term type="javascriptFunction">関数</Term>定義では、<Term type="javascriptFunction">関数</Term>名直後のかっこ内に<Term type="javascriptParameter">引数</Term>名をコンマ区切りで設定できます。上のプログラムで <code>greet</code> <Term type="javascriptFunction">関数</Term>は、 <code>greetingType</code> や <code>myName</code> という名前の<Term type="javascriptParameter">引数</Term>をとります。<Term type="javascriptFunction">関数</Term>定義の中では、これらは<Term type="javascriptVariable">変数</Term>のように振舞います。</p>

呼び出し側では、括弧の中に<Term type="javascriptFunction">関数</Term>に<Term type="javascriptPass">渡す</Term><Term type="javascriptParameter">引数</Term>を指定します。このプログラムを実行すると、ブラウザに `Good morning, 佐藤!` が表示されるでしょう。

## <Term type="javascriptReturnValue">戻り値</Term>

<p><Term type="javascriptFunction">関数</Term>呼び出しは<Term type="javascriptExpression">式</Term>の一種です。<Term type="javascriptFunction">関数</Term>定義内で <strong>return 文</strong>を用いると、<Term type="javascriptFunction">関数</Term>の実行が停止され、<Term type="javascriptFunction">関数</Term>呼び出し<Term type="javascriptExpression">式</Term>の<Term type="javascriptEvaluation">評価</Term>結果が確定します。この値を<Term strong type="javascriptReturnValue">戻り値</Term>と呼びます。ある<Term type="javascriptValue">値</Term>を<Term type="javascriptReturnValue">戻り値</Term>として設定して関数の実行を終了することを、<Term type="javascriptFunction">関数</Term>がその<Term type="javascriptValue">値</Term>を<Term strong type="javascriptReturn">返す</Term>と表現します。</p>

```jsx
function add(a, b) {
  return a + b;
}

document.write(add(3, 4));
```

上の例の 4 行目で、<Term type="javascriptExpression">式</Term> `add(3, 4)` が<Term type="javascriptEvaluation">評価</Term>されると、 `a = 3, b = 4` として `add` <Term type="javascriptFunction">関数</Term>が実行されます。`add`<Term type="javascript">関数</Term>の中で<Term type="javascriptStatement">文</Term> `return a + b;` が実行されると、<Term type="javascriptExpression">式</Term> `a + b` が<Term type="javascriptEvaluation">評価</Term>され、`7` になります。これにより、 `add` <Term type="javascriptFunction">関数</Term>は `7` を<Term type="javascriptReturn">返し</Term>、<Term type="javascriptExpression">式</Term> `add(3, 4)` の<Term type="javascriptEvaluation">評価</Term>結果は `7` となります。

## <Term type="javascriptVariable">変数</Term>のスコープ

<p><Term type="javascriptFunction">関数</Term>内で<Term type="javascriptDeclaration">宣言</Term>された<Term type="javascriptVariable">変数</Term>は、<Term type="javascriptFunction">関数</Term>内でのみ有効です。しかしながら、<Term type="javascriptFunction">関数</Term>外で<Term type="javascriptDeclaration">宣言</Term>された<Term type="javascriptVariable">変数</Term>は<Term type="javascriptFunction">関数</Term>内でも利用できます。</p>

```javascript
let guestCount = 0;

function greet() {
  guestCount = guestCount + 1;
  document.write("あなたは" + guestCount + "人目のお客様です。");
}

greet();
greet();
```

この例における、`greet` <Term type="javascriptFunction">関数</Term>は、呼び出されるたびに `guestCount` に 1 を加えています。

## 演習

:::info
この課題への解答は任意です。時間が余った際に取り組んでみてください。
:::

携帯電話料金を計算する<Term type="javascriptFunction">関数</Term>を作ってみましょう。

```javascript
function calculateCost(monthlyBandwidth) {
  // ここに処理を書く
}

document.write(calculateCost(3.5));
```

`calculateCost` は、<Term type="javascriptParameter">引数</Term>に月間転送量 `monthlyBandwidth` を取り、その月の携帯電話料金を<Term type="javascriptReturnValue">戻り値</Term>として<Term type="javascriptReturn">返す</Term><Term type="javascriptFunction">関数</Term>です。携帯電話料金は、下のルールで決定されるとします。

> 月間転送量を _monthlyBandwidth_ (GB) とします。
>
> - _monthlyBandwidth_ < 5.0 のとき、携帯電話料金は _monthlyBandwidth_ × 600 (円)
> - _monthlyBandwidth_ >= 5.0 のとき、携帯電話料金は 3000 (円)
