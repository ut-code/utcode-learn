---
title: ウェブサイトの見た目を整える
---

import Answer from "@site/src/components/Answer";
import Term from "@site/src/components/Term";
import ViewSource from "@site/src/components/ViewSource";

多くの<Term type="element">HTML 要素</Term>は、<Term type="css">CSS</Term>を用いることで、その見た目を細かくカスタマイズすることができます。
CSSの書き方を勉強して、`World`の文字を赤くしてみましょう。
![Hello World!](./red-hello-world.png)
## <Term type="css">CSS</Term>の書き方

### <Term type="css">CSS</Term>用のファイルを作成する

CSS ファイルの拡張子は通常 `.css` です。今回は `index.html` と併せて `style.css` を作成しました。
![CSSを書き始める](./begin-css.png)
先に完成コードを示しておきます。
```html title="index.html"
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="style.css" />
    <title>Title</title>
  </head>
  <body>
    Hello <strong id="world">World</strong>!
  </body>
</html>
```
```css title="style.css"
#world {
  color: red;
}
```



### link属性

```html title="index.html"
<link rel="stylesheet" href="style.css" />
```

まず注目すべきは `link` 要素です。HTMLファイルで、`link` 要素の `href` 属性を指定することにより、外部の CSS ファイルを読み込ませることができます。

### セレクタとID

```html title="index.html"
Hello <strong id="world">World</strong>!
```

```css title="style.css"
#world {
}
```

外部のファイルに記述された CSS では、その CSS を適用する要素を明示的に指定する必要があります。
![セレクタ](selector.png)
このために用いるのが **セレクタ**です。上の例では `#world` がセレクタで、「`id` 属性が `world` である要素」を示します。

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

### <Term strong type="cssProperty">プロパティ</Term>とプロパティ値

いよいよ仕上げです。

```css title="style.css"
#world {
  color: red;
}
```

CSSの波括弧{}内に、<Term strong type="cssProperty">プロパティ</Term>と呼ばれるスタイルの種類と、「プロパティ値」と呼ばれるプロパティに指定できる外観を、コロン記号で区切って記述します。

上の例では、`color` という<Term type="cssProperty">プロパティ</Term>に、`red` というプロパティ値を設定することで、文字色を赤色に設定するよう指示しています。

これで、`Hello World!`の`World`の文字が赤くなりました。


## 初級課題1

次のような条件を満たす要素を選択するセレクタは何でしょうか。

1. `id` 属性が `foo` の要素
2. `class` 属性に `bar` が含まれる要素の子孫の要素のうち、`button` 要素であるもの

<Answer>

1. `#foo`
2. `.bar button`

</Answer>

:::tip HTMLの<Term type="styleAttribute">`style` 属性</Term>
`style.css`を作らずとも、HTMLファイル内に直接CSSを書き込むこともできます。例えば、`p` <Term type="element">要素</Term>の <Term type="styleAttribute"><code>style</code> 属性</Term>に `color: red;` を指定します。

```html title="index.html"
<p style="color: red">Hello CSS!</p>
```

<ViewSource url={import.meta.url} path="_samples/first-css" />

「このプログラムを実行する」を押すと解るとおり、<Term type="styleAttribute">style 属性</Term>を指定した<Term type="element">要素</Term>内のテキストが赤色で表示されます。

しかし、この方法ではHTML要素に逐一CSSを書きこむ必要があるため、HTMLが大きくなると大変になります。さらに、社会の要求の高まりに応えて CSS のプロパティの種類は増え続け、現在では数えきれないほどのプロパティが定義されています。このため、CSS をすべて<Term type="styleAttribute">`style` 属性</Term>で記述するのは現実的ではありません。数が多すぎて、見通しが悪くなってしまうからです。このため、通常 CSS ファイルは HTML ファイルとは別に用意されます。
:::

## CSSのプロパティ

```css title="style.css"
#element {
  color: red;
  font-size: 30px;
}
```

複数の<Term type="cssProperty">プロパティ</Term>を指定する場合には、上のように `プロパティ: プロパティ値;` の組を並べて記述します。セミコロンの指定が必要であることに注意してください。

CSS の<Term type="cssProperty">プロパティ</Term>には `color` (文字色) や `font-size` (文字サイズ) だけでなく、`background-color` (背景色)、`text-decoration` (文字装飾)等、数えきれないほどの種類が定義されています。

## 初級課題2

下のような、文字色が緑、背景色が好きな色(この例では黒)の`Hello CSS!`をブラウザで表示してみましょう。
![Hello CSS!](green-hello-css.png)
使用するプロパティは`color` `background-color`です。

<Answer>

```html title="index.html"
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="style.css" />
    <title>Title</title>
  </head>
  <body>
    <div id="div">Hello CSS!</div>
  </body>
</html>
```

```css title="style.css"
#div {
  color: green;
  background-color: black;
}
```

</Answer>

:::tip どうやって調べたらいいの？

プログラミングを始めたての間は、分からないことがあったときにどのように調べたら良いのか戸惑うことが多いと思います。そんなときは、次のような手順で調べてみましょう。例として、「文字を赤くする方法」を調べてみます。

#### 1. タスクを細かく分割する

現在持ち合わせている知識をもとに、やりたいことを可能な限り細かく分割します。「文字を赤くする」であれば、見た目に関することなので CSS を使えばいいのだろうと想像がつきます。加えて、色の指定方法について調べてみるとよいでしょう。

#### 2. Google で検索してみる

「CSS 文字色」「CSS 色指定」などと調べてみましょう。課題が十分に細かく分割できていれば、これで直接的な回答が得られるはずです。うまく答えが見つからない場合は、慣れている人に聞いてみてください。Slackでどんどん質問しましょう。

#### 3. 周辺知識を信頼できる情報源で調べる

見つかったウェブサイトに掲載されているコードをもとに、信頼できる情報源を読みなおします。HTML、CSS、JavaScript の場合は、[MDN](https://developer.mozilla.org/ja/)が便利でしょう。例えば「CSS 文字色」と調べて紹介されるのは `color` <Term type="cssProperty">プロパティ</Term>なので、MDN でこの<Term type="cssProperty">プロパティ</Term>について調べておきましょう。

:::

## 中級課題

画像のようなシンプルなボックスを作ってみましょう。

![シンプルなボックス](./rounded-box-with-shadow.png)

シンプルで、よく見かけるデザインですが、様々な指定が必要であることが分かります。次のような点に注意してデザインしてみてください。

- グレーの枠線が付いています (border)
- 枠線は角丸になっています (border-radius)
- 枠線の外側に余白があります (margin)
- 枠線の内側にも余白があります (padding)
- ボックスに影がついています (box-shadow)

<Answer title="シンプルなボックス">

```html title="index.html"
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="style.css" />
    <title>Title</title>
  </head>
  <body>
    <div id="foo">Foo</div>
  </body>
</html>
```

```css title="style.css"
#foo {
  border: 1px solid #aaa;
  border-radius: 10px;
  margin: 30px;
  padding: 30px;
  box-shadow: 0px 0px 2px 1px #aaa;
}
```

<ViewSource url={import.meta.url} path="_samples/foo" />

</Answer>
