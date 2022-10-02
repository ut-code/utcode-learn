---
title: 変数
---

import Term from "@site/src/components/Term";
import ViewSource from "@site/src/components/ViewSource";

## <Term type="javascriptVariable">変数</Term>とは

<p><Term type="javascriptVariable">変数</Term>を用いると、<Term type="javascriptValue">値</Term>を一時的に保存し、再利用することができます。数学における変数は通常数値を表すものですが、プログラムにおける<Term type="javascriptVariable">変数</Term>は、<Term type="javascriptString">文字列</Term>等を含め、全ての種類の「<Term type="javascriptValue">値</Term>」を格納することができます。</p>

## <Term type="javascriptVariable">変数</Term>の宣言と使用

<p><Term type="javascriptVariable">変数</Term>を使用するには、まず<Term type="javascriptVariable">変数</Term>を<Term strong type="javascriptDeclaration">宣言</Term>する必要があります。</p>

```javascript title="script.js"
let myGreatName;
myGreatName = "Becky Jones";
document.write(myGreatName);
```

1 行目の `let myGreatName;` で、`myGreatName` という名前の<Term type="javascriptVariable">変数</Term>を<Term type="javascriptDeclaration">宣言</Term>しています。`let` は、<Term type="javascriptVariable">変数</Term>を<Term type="javascriptDeclaration">宣言</Term>するためのキーワードです。

続いて 2 行目では、<Term type="javascriptVariable">変数</Term> `myGreatName` に文字列 `"Becky Jones"` を<Term strong type="javascriptAssignment">代入</Term>しています。`=` は<Term type="javascriptAssignment">代入</Term>を表し、左側に指定した<Term type="javascriptVariable">変数</Term>に対し、右側に指定された<Term type="javascriptValue">値</Term>を<Term type="javascriptAssignment">代入</Term>します。

3 行目では、<Term type="javascriptVariable">変数</Term> `myGreatName` が<Term type="javascriptVariable">評価</Term>され、<Term type="javascriptAssignment">代入</Term>されていた<Term type="javascriptString">文字列</Term><Term type="javascriptValue">値</Term> `"Becky Jones"` が画面に表示されます。

上の例では、`my great name` というフレーズを、`myGreatName` のように記述しています。

このように、複数の単語にわたるフレーズを、2 語目以降の先頭の文字を大文字にして結合する命名規則を、<Term strong type="camelCase">キャメルケース</Term>と呼びます。

:::note

<p><Term type="javascript">JavaScript</Term> の<Term type="javascriptVariable">変数</Term>名には、通常<Term type="camelCase">キャメルケース</Term>が用いられます。<Term type="snakeCase">スネークケース</Term>や<Term type="pascalCase">パスカルケース</Term>などの命名規則が利用される文法もあります。</p>
:::

<p><Term type="javascriptVariable">変数</Term>の<Term type="javascriptDeclaration">宣言</Term>と同時に初回の<Term type="javascriptAssignment">代入</Term>を行うこともできます。</p>

```javascript title="script.js"
let myGreatName = "Becky Jones";
document.write(myGreatName);
```

## <Term type="javascriptVariable">変数</Term>の性質

<p><Term type="javascriptVariable">変数</Term>には、最後に<Term type="javascriptAssignment">代入</Term>された<Term type="javascriptValue">値</Term>のみを保持する性質があります。</p>

```javascript title="script.js"
let mysteriousNumber = 0;
mysteriousNumber = 1;
mysteriousNumber = 2;
document.write(mysteriousNumber);
```

変数 `mysteriousNumber` は 3 回<Term type="javascriptAssignment">代入</Term>されていますが、最後に<Term type="javascriptAssignment">代入</Term>された `2` が表示されます。

それでは、以下の場合はどうでしょうか。

```javascript title="script.js"
let price = 100;
price = price / 2;
document.write(price);
```

<ViewSource path="/docs/1-trial-session/05-variables/_samples/compound-assignment" />


<p><Term type="javascriptAssignment">代入</Term><Term type="javascriptOperator">演算子</Term>は、まず右辺の<Term type="javascriptExpression">式</Term>を<Term type="javascriptEvaluation">評価</Term>します。これにより、右辺は <code>100 / 2</code> となります。よって、最終的に<Term type="javascriptVariable">変数</Term> <code>price</code> の<Term type="javascriptValue">値</Term>は <code>50</code> となり、これは <code>price</code> を半分にする操作に対応します。</p>

![変数の再代入](./reassignment-evaluation.png)
