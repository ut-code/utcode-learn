---
title: 変数
---

## <Term type="javascriptVariable">変数</Term>とは

<p><Term type="javascriptVariable">変数</Term>を用いると、<Term type="javascriptValue">値</Term>を一時的に保存し、再利用することができます。数学における変数は通常数値を表すものですが、プログラムにおける<Term type="javascriptVariable">変数</Term>は、<Term type="javascriptString">文字列</Term>等を含め、全ての種類の「<Term type="javascriptValue">値</Term>」を格納することができます。</p>

## <Term type="javascriptVariable">変数</Term>の<Term type="javascriptDeclaration">宣言</Term>と使用

<p><Term type="javascriptVariable">変数</Term>を使用するには、まず<Term type="javascriptVariable">変数</Term>を<Term strong type="javascriptDeclaration">宣言</Term>する必要があります。</p>

```javascript title="script.js"
let myGreatName = "Becky Jones";
document.write(myGreatName);
```

`let` は、<Term type="javascriptVariable">変数</Term>を<Term type="javascriptDeclaration">宣言</Term>するためのキーワードです。 1 行目では、`myGreatName` という名前の<Term type="javascriptVariable">変数</Term>を<Term type="javascriptDeclaration">宣言</Term>し、そこに`"Becky Jones"` という文字列を保存しています。

<p><Term type="javascriptVariable">変数</Term>に値を保存する操作を<Term strong type="javascriptAssignment">代入</Term>と呼びます。<Term type="javascriptAssignment">代入</Term>をするときには<code>=</code> の記号を用います。左側に<Term type="javascriptVariable">変数</Term>、右側に保存する<Term type="javascriptValue">値</Term>を指定することで<Term type="javascriptAssignment">代入</Term>を行います。</p>

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

上の例では、<Term type="javascriptVariable">変数</Term>が`let` で<Term type="javascriptDeclaration">宣言</Term>され、<Term type="javascriptVariable">変数</Term>の<Term type="javascriptValue">値</Term>が次々と変化しています。このように、<Term type="javascriptVariable">変数</Term>に新たな<Term type="javascriptValue">値</Term>を<Term type="javascriptAssignment">代入</Term>することを再<Term type="javascriptAssignment">代入</Term>と呼びます。

`const` で<Term type="javascriptDeclaration">宣言</Term>された<Term type="javascriptVariable">変数</Term>には、再<Term type="javascriptAssignment">代入</Term>ができません。すなわち、<Term type="javascriptValue">値</Term>の書き換えができません。上記のコードの`let` を`const` に置き換えると、エラーが発生します。

<Term type="javascriptVariable">変数</Term>には最後に<Term type="javascriptAssignment">代入</Term>された<Term type="javascriptValue">値</Term>のみを保存する性質があるので、上のコードの例では<Term type="javascriptVariable">変数</Term> <code>mysteriousNumber</code> に最後に<Term type="javascriptAssignment">代入</Term>された<code>2</code> が表示されます。

`let` を使った<Term type="javascriptVariable">変数</Term>の<Term type="javascriptDeclaration">宣言</Term>について、もう少し見てみましょう。


```javascript title="script.js"
let price = 100;
price = price / 2;
document.write(price);
```

<ViewSource url={import.meta.url} path="_samples/compound-assignment" />

<p><Term type="javascriptAssignment">代入</Term><Term type="javascriptOperator">演算子</Term>は、まず右辺の<Term type="javascriptExpression">式</Term>を<Term type="javascriptEvaluation">評価</Term>します。これにより、右辺は <code>100 / 2</code> となります。よって、最終的に<Term type="javascriptVariable">変数</Term> <code>price</code> の<Term type="javascriptValue">値</Term>は <code>50</code> となり、これは <code>price</code> を半分にする操作に対応します。</p>

![変数の再代入](./reassignment-evaluation.png)

## constとletの用途

`const` と`let` は用途によって使い分けがあります。基本的には、意図せず<Term type="javascriptValue">値</Term>を書き換えてしまうことを防ぐために`const` が使われます。

```javascript
const mysteriousNumber = 1;
/* めちゃめちゃ長いコード
--------------
--------------
めちゃめちゃ長いコード
--------------
--------------
めちゃめちゃ長いコード */
document.write(mysteriousNumber);
```

このコードで何が出力されるのか読み取る場合を考えましょう。もし `mysteriousNumber` を `let` で<Term type="javascriptDeclaration">宣言</Term>した場合、`mysteriousNumber` は `/* めちゃめちゃ長いコード */` の中で書き換えられているかもしれません。そのため、変数の<Term type="javascriptValue">値</Term>を読み取るためにはコード全体を読み返す必要があります。しかし、このように`const` を用いることで`mysteriousNumber` の<Term type="javascriptValue">値</Term>は一意に決まります。 `const` を使用できる場面では `const` を使用しましょう。

:::info

実際に開発をする場面では、`const` を使う場面がかなり多いです。この教材内でも基本的には`const` が用いられています。

:::
