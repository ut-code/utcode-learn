---
title: CSS による配置
---

import CodeBlock from '@theme/CodeBlock';
import Term from "@site/src/components/Term";
import OpenInCodeSandbox from "@site/src/components/OpenInCodeSandbox";
import ExternalVideoPlayer from "@site/src/components/ExternalVideoPlayer";

## CSS のボックスモデル

- HTMLの要素はすべて、一定の高さと幅を持った四角形だと考えることができる
- その四角形は4重構造
    - content（中身）
    - padding（中身と境界線の間の幅）
    - border（境界線）
    - margin（境界線の外側の余白）


- 体験会の「ウェブサイトの見た目を整える」ページの課題を例に構造を見てみる
    - コード（再掲）

```html title=index.html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="utf-8" />
    <title>Title</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="box">Foo</div>
  </body>
</html>
```

```css title="style.css"
.box {
    margin: 30px;
    padding: 30px;
    border: 10px solid #AAA;
    border-radius: 10px;
    box-shadow: 0px 0px 2px 1px #AAA;
}
```
このページを開発者ツールを使って見てみましょう。
![開発者ツールでボックスモデルを眺める](./devtool-boxmodel.png)

- 4重に色分けされた構造が見えます。
- `content`は主に`width`や`height`などのプロパティを、
`padding`, `border`, `margin`はそれぞれ主に`padding`, `border`, `margin`などのプロパティを操作することで制御できます。
- `width`, `height`, `padding`, `border`, `margin`の値を変えると開発者ツールの表示がどう変わるか試してみましょう。

<!-- <OpenInCodeSandbox path="/docs/2-browser-apps/07-advanced-css/_samples/separate-css-files" /> -->

## ブロックレベル要素とインライン要素
- HTMLの要素は、ブロックレベル要素とインライン要素に分類されます。
- ブロックレベル要素は
    - 見出しや段落、表など、文章を構成する基本単位となる要素です。
    - 常に前後に改行が入り、可能なところまで（親要素いっぱいまで）左右に広がります。
    - そのため、ブロックレベル要素を複数並べて書くと、上から下へと配置されていきます。
    - `<div></div>`や`<p></p>`、`<table></table>`、`<ul></ul>`などがブロックレベル要素です。
    - 以下ではブロックレベル要素である`<div></div>`を3つ並べています。

```html title="index.html"
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="utf-8" />
    <title>Title</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="box1">box1</div>
    <div class="box2">box2</div>
    <div class="box3">box3</div>
  </body>
</html>
```

```css title="style.css"
.box1{
    background-color: lightcoral;
}

.box2{
    background-color: lightblue;
}

.box3{
    background-color: lightgreen;
}
```
![divタグを3つ並べる](./three-div.png)

- インライン要素は
    - 文章の一部や表の要素など、ブロックレベル要素の内容となる要素です。
    - 前後に改行は伴わず、必要な幅だけを占有します。
    - そのため、インライン要素を複数並べて書くと、左から右へと配置されていきます。
    - `<span></span>`や`<a></a>`、`<img>`や`<input>`がインライン要素です。
    - 以下ではインライン要素である`<span></span>`を3つ並べています。

```html title="index.html"
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="utf-8" />
    <title>Title</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
     <span class="box1">box1</span>
     <span class="box2">box2</span>
     <span class="box3">box3</span>
  </body>
</html>
```

```css title="style.css"
.box1{
    background-color: lightcoral;
}

.box2{
    background-color: lightblue;
}

.box3{
    background-color: lightgreen;
}
```

![spanタグを3つ並べる](./three-span.png)