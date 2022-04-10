---
title: ウェブサイトの見た目を整える
---

import Term from "@site/src/components/Term";

多くの<Term type="element">HTML 要素</Term>は、<Term strong type="styleAttribute" strong>style 属性</Term>を用いることで、その見た目を細かくカスタマイズすることができます。

## <Term type="styleAttribute">style 属性</Term>

`p` <Term type="element">要素</Term>の <Term type="styleAttribute"><code>style</code> 属性</Term>に `color: red;` を指定します。

```html title="index.html"
<p style="color: red;">Hello CSS!</p>
```

次のように、<Term type="styleAttribute">style 属性</Term>を指定した<Term type="element">要素</Term>内のテキストが赤色で表示されます。

![CSSを書き始める](./write-css.png)

## <Term type="styleAttribute">style 属性</Term>に指定できる値

前項で <Term type="styleAttribute">`style` 属性</Term>に指定した値を詳しく見ていきましょう。

```css
color: red;
```

この<Term type="attribute">属性</Term>に指定される値は、<Term strong type="css">CSS</Term> と呼ばれる言語により記述されます。<Term type="styleAttribute">`style` 属性</Term>では、<Term strong type="cssProperty">プロパティ</Term>と呼ばれるスタイルの種類と、**プロパティ値**と呼ばれるプロパティに指定できる外観を、コロン記号で区切って記述します。

上の例では、`color` という<Term type="cssProperty">プロパティ</Term>に、`red` というプロパティ値を設定することで、文字色を赤色に設定するよう指示しています。

複数の<Term type="cssProperty">プロパティ</Term>を指定する場合には、下のように `プロパティ: プロパティ値;` の組を並べて記述します。セミコロンの指定が必要であることに注意してください。

```html title="index.html"
<p style="color: red; font-size: 30px;">Hello CSS!</p>
```

CSS の<Term type="cssProperty">プロパティ</Term>には `color` (文字色) や `font-size` (文字サイズ) だけでなく、`background-color` (背景色)、`text-decoration` (文字装飾)等、数えきれないほどの種類が定義されています。

[MDN](https://developer.mozilla.org/ja/)は、信頼できるオンラインの情報源です。[MDN の CSS リファレンス](https://developer.mozilla.org/ja/docs/Web/CSS/Reference)には、たくさんの<Term type="cssProperty">プロパティ</Term>が掲載されています。ざっくりと眺めて、その可能性を感じてみてください。

## 課題 (時間が余った場合)

画像のようなシンプルなボックスを作ってみましょう。

![シンプルなボックス](./rounded-box-with-shadow.png)

シンプルで、よく見かけるデザインですが、様々な指定が必要であることが分かります。次のような点に注意してデザインしてみてください。

- グレーの枠線が付いています (border)
- 枠線は角丸になっています (border-radius)
- 枠線の外側に余白があります (margin)
- 枠線の内側にも余白があります (padding)
- ボックスに影がついています (box-shadow)
