---
title: JavaScriptことはじめ
---

import Term from "@site/src/components/Term";
import helloWorldByJavascriptVideo from "./hello-world-by-javascript.mp4"

## <Term type="javascript">JavaScript</Term>

<p><Term type="html">HTML</Term> がウェブサイトの構造を、<Term type="css">CSS</Term> がデザインを司る言語であるとすれば、<Term strong type="javascript">JavaScript</Term> はウェブサイトに振る舞いを与える言語といえます。ブラウザさえあれば環境に関係なく同じように実行可能な、強力なプログラミング言語です。</p>

## <Term type="javascript">JavaScript</Term> で Hello World!

プログラミングの世界では、まず画面に `Hello World!` と表示させることが慣例になっています。<Term type="javascript">JavaScript</Term> を用いて画面に `Hello World!` を表示してみましょう。

まずは、`index.html` を次のように書き換えます。

```html title="index.html"
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="utf-8" />
    <title>Title</title>
  </head>
  <body>
    <script src="./script.js"></script>
  </body>
</html>
```

続いて、`script.js`を作成し、内容として次の通りに保存します。

```javascript title="script.js"
document.write("Hello World!");
```

ブラウザじ実行してみましょう。`Hello World!` と表示されましたか？

<video src={helloWorldByJavascriptVideo} controls />

## <Term type="javascript">JavaScript</Term> が動く仕組み

<p><Term type="html">HTML</Term> ファイルの中に、以下のような記述があります。</p>

```html title="index.html"
<script src="./script.js"></script>
```

まず、この記述によって、 `script.js` ファイルがブラウザによって読み込まれます。この `script.js` に記述されているのが <Term type="javascript">JavaScript</Term> です。

:::note
この講座の中では、`script` <Term type="element">要素</Term>を常に **`body` <Term type="element">要素</Term>の末尾**に記述するようにします。これは、<Term type="javascript">JavaScript</Term> が読み込まれるタイミングで他のすべての <Term type="element">HTML 要素</Term>がすでに表示されていることを保証するためです。
:::

## <Term type="javascript">JavaScript</Term> の基本文法

<p><Term type="javascript">JavaScript</Term> のプログラムで、セミコロンで区切られた部分を<Term type="javascriptStatement">文</Term>と呼びます。<Term type="javascript">JavaScript</Term> の実行環境は、プログラム中に含まれる<Term type="javascriptStatement">文</Term>を上から下に向けて順番に実行していきます。<code>document.write</code>はブラウザの画面に出力するための命令です。</p>

```javascript title="script.js"
document.write("Hello World1");
document.write("Hello World2");
document.write("Hello World3");
```

## コメント

`//` から行末までは**コメント**とみなされ、プログラムの実行に影響を与えません。この講座内でもプログラムの意味を説明するのに利用していきます。

```javascript title="script.js"
// この部分はコメントです
document.write("Hello World"); // この部分もコメントです
```
