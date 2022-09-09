---
title: 高度な CSS
---

import CodeBlock from '@theme/CodeBlock';
import Term from "@site/src/components/Term";
import OpenInCodeSandbox from "@site/src/components/OpenInCodeSandbox";
import ExternalVideoPlayer from "@site/src/components/ExternalVideoPlayer";

## CSS を別ファイルに分離する

社会の要求の高まりに応えて CSS のプロパティの種類は増え続け、現在では数えきれないほどのプロパティが定義されています。

このため、CSS をすべて`style`属性で記述するのは現実的ではありません。数が多すぎて、見通しが悪くなってしまうからです。このため、通常 CSS ファイルは HTML ファイルとは別に用意されます。

![CSSを別ファイルに分離する](./separate-html-css.png)

CSS ファイルの拡張子は通常 `.css` です。今回は `index.html` と併せて `style.css` を作成しました。

```html title=index.html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="utf-8" />
    <title>Document</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div id="element">Hello World!</div>
  </body>
</html>
```

```css title="style.css"
#element {
  color: red;
  font-size: 40px;
}
```

<OpenInCodeSandbox path="/docs/2-browser-apps/07-advanced-css/_samples/separate-css-files" />

まず注目すべきは `link` 要素です。`link` 要素の `href` 属性を指定することにより、外部の CSS ファイルを読み込ませることができます。

このようにして読み込ませた CSS は、`style` 属性による指定とは決定的に異なる部分があります。それは、`style` 属性では、そのスタイルを適用する要素が `style` 属性が指定された要素であるのが自明であるのに対し、外部のファイルに記述された CSS では、その CSS を適用する要素を明示的に指定する必要がある点です。

このために用いるのが **セレクタ**です。上の例では `#element` がセレクタで、「`id` 属性が `element` である要素」を示します。

![セレクタ](selector.png)

`id` 属性は、全ての HTML 要素に対して開発者が自由に設定できますが、ひとつの HTML 内に同じ `id` 属性を持つ要素が複数存在してはならない、というルールがあります。

また、`id` 属性と似た使い方ができる属性として、`class` 属性があります。この属性は、開発者が好きな値を設定できるのは同じですが、同じ値を複数の要素が持つことを許されています。また、スペース区切りで複数の値を設定することもできます。

| セレクタ   | 意味                                    |
| ---------- | --------------------------------------- |
| `#element` | `id` 属性が `element` である要素        |
| `.element` | `class` 属性に `element` が含まれる要素 |
| `element`  | タグ名が `element` である要素           |

また、セレクタをスペースで区切ると子孫要素、`>`で区切ると直属の子要素を表すことができます。そのまま繋げば and 条件とみなされます。

| セレクタ         | 意味                                                                           |
| ---------------- | ------------------------------------------------------------------------------ |
| `div.element`    | `class` 属性に `element` が含まれる `div` 要素                                 |
| `#parent .child` | `id` 属性が `parent` である要素の子孫の、`class` 属性に `child` が含まれる要素 |
| `#parent > div`  | `id` 属性が `parent` である要素の直属の子の `div` 要素                         |

セレクタを上手に活用すると、HTML を最小限必要なものに抑えながら、変更に強くて柔軟な CSS を作成することができます。

## 課題

次のような条件を満たす要素を選択するセレクタは何でしょうか。

- `id` 属性が `foo` の要素
- `class` 属性に `bar` が含まれる要素の子孫の要素のうち、`button` 要素であるもの

<details>
  <summary>解答</summary>
  <div>
    <CodeBlock language="css">{`
<!-- id 属性が foo の要素 -->
#foo {
  <!-- 処理 -->
}
<!-- class 属性に bar が含まれる要素の子孫の要素のうち、button 要素であるもの -->
.bar button {
  <!-- 処理 -->
}
    `.trim()}</CodeBlock>
  </div>
</details>
