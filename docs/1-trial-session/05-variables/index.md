---
title: 変数
---

import Term from "@site/src/components/Term";
import ViewSource from "@site/src/components/ViewSource";

## <Term type="javascriptVariable">変数</Term>とは

<p><Term type="javascriptVariable">変数</Term>を用いると、<Term type="javascriptValue">値</Term>を一時的に保存し、再利用することができます。数学における変数は通常数値を表すものですが、プログラムにおける<Term type="javascriptVariable">変数</Term>は、<Term type="javascriptString">文字列</Term>等を含め、全ての種類の「<Term type="javascriptValue">値</Term>」を格納することができます。</p>

## <Term type="javascriptVariable">変数</Term>の<Term type="javascriptDeclaration">宣言</Term>と使用

<p><Term type="javascriptVariable">変数</Term>を使用するには、まず<Term type="javascriptVariable">変数</Term>を<Term strong type="javascriptDeclaration">宣言</Term>する必要があります。</p>

```javascript title="script.js"
let myGreatName = "Becky Jones";
document.write(myGreatName);
```

`let` は、<Term type="javascriptVariable">変数</Term>を<Term type="javascriptDeclaration">宣言</Term>するためのキーワードです。1 行目では、`myGreatName` という名前の<Term type="javascriptVariable">変数</Term>を<Term type="javascriptDeclaration">宣言</Term>し、そこに文字列 `"Becky Jones"` を<Term strong type="javascriptAssignment">代入</Term>しています。`=` は<Term type="javascriptAssignment">代入</Term>を表し、左側に指定した<Term type="javascriptVariable">変数</Term>に対し、右側に指定された<Term type="javascriptValue">値</Term>を<Term type="javascriptAssignment">代入</Term>します。

2 行目では、<Term type="javascriptVariable">変数</Term> `myGreatName` が<Term type="javascriptEvaluation">評価</Term>され、<Term type="javascriptAssignment">代入</Term>されていた<Term type="javascriptString">文字列</Term><Term type="javascriptValue">値</Term> `"Becky Jones"` が画面に表示されます。

<p><Term type="javascriptVariable">変数</Term>を<Term type="javascriptDeclaration">宣言</Term>するキーワードには、<code>let</code> 以外にも <code>const</code> があります。記法自体は<code>let</code> と同様ですが、少し違いがあります。違いについては、次の節で説明します。</p>

```javascript title="script.js"
const myGreatName = "Becky Jones";
document.write(myGreatName);
```

ここまでの例では、`my great name` というフレーズを、`myGreatName` のように記述しています。

このように、複数の単語にわたるフレーズを、2 語目以降の先頭の文字を大文字にして結合する命名規則を、<Term strong type="camelCase">キャメルケース</Term>と呼びます。

:::info

<p><Term type="javascript">JavaScript</Term> の<Term type="javascriptVariable">変数</Term>名には、通常<Term type="camelCase">キャメルケース</Term>が用いられます。<Term type="snakeCase">スネークケース</Term>や<Term type="pascalCase">パスカルケース</Term>などの命名規則が利用される文法もあります。</p>

:::

:::tip

<Term type="javascriptVariable">変数</Term>に適切な命名をすることは非常に重要です。以下の例を見てみましょう。

```javascript
const a = 500;
const b = 3;
const c = a * b;
document.write(c);
```

```javascript
const itemPrice = 500;
const itemCount = 3;
const totalPrice = itemPrice * itemCount;
document.write(totalPrice);
```

前者と後者のコードは、同じ計算を行っています。しかし、前者のコードでは `a` や `b`、`c` という変数名が何を表しているのかがわかりません。一方、後者のコードでは、`itemPrice` や `itemCount`、`totalPrice` という変数名から、どのような計算を行っているのかがすぐに分かります。共同で開発を行うときや、後からコードを読み返すときに、変数名が適切に付けられていると、コードの理解が容易になります。

:::

## <Term type="javascriptVariable">変数</Term>への再<Term type="javascriptAssignment">代入</Term>

`let` と `const` の大きな違いは、再<Term type="javascriptAssignment">代入</Term>が可能かどうかです。`let` で<Term type="javascriptDeclaration">宣言</Term>された<Term type="javascriptVariable">変数</Term>には再<Term type="javascriptAssignment">代入</Term>が可能ですが、`const` で<Term type="javascriptDeclaration">宣言</Term>された<Term type="javascriptVariable">変数</Term>にはできません。次の例を見てみましょう。

```javascript title="script.js"
let mysteriousNumber = 0;
mysteriousNumber = 1;
mysteriousNumber = 2;
document.write(mysteriousNumber); // 2
```

<p><Term type="javascriptVariable">変数</Term>には、最後に<Term type="javascriptAssignment">代入</Term>された<Term type="javascriptValue">値</Term>のみを保持する性質があります。そのため、<Term type="javascriptVariable">変数</Term> <code>mysteriousNumber</code> は 3 回<Term type="javascriptAssignment">代入</Term>が行われていますが、最後に<Term type="javascriptAssignment">代入</Term>された <code> 2</code> が表示されます。</p>

一方、`const` で<Term type="javascriptDeclaration">宣言</Term>された<Term type="javascriptVariable">変数</Term>には、再<Term type="javascriptAssignment">代入</Term>ができません。そのため、上記のコードの `let` を `const` に置き換えることはできません。

さらに、再<Term type="javascriptAssignment">代入</Term>について詳しく見てみましょう。それでは、以下の場合はどうでしょうか。

```javascript title="script.js"
let price = 100;
price = price / 2;
document.write(price);
```

<ViewSource url={import.meta.url} path="_samples/compound-assignment" />

<p><Term type="javascriptAssignment">代入</Term><Term type="javascriptOperator">演算子</Term>は、まず右辺の<Term type="javascriptExpression">式</Term>を<Term type="javascriptEvaluation">評価</Term>します。これにより、右辺は <code>100 / 2</code> となります。よって、最終的に<Term type="javascriptVariable">変数</Term> <code>price</code> の<Term type="javascriptValue">値</Term>は <code>50</code> となり、これは <code>price</code> を半分にする操作に対応します。</p>

![変数の再代入](./reassignment-evaluation.png)
