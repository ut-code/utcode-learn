---
title: ウェブサイトの見た目を整える
---

多くの<Term type="element">HTML 要素</Term>は、<Term strong type="styleAttribute" strong>style 属性</Term>を用いることで、その見た目を細かくカスタマイズすることができます。

## <Term type="styleAttribute">style 属性</Term>

`p` <Term type="element">要素</Term>の <Term type="styleAttribute"><code>style</code> 属性</Term>に `color: red;` を指定します。

```html title="index.html"
<p style="color: red">Hello CSS!</p>
```

<ViewSource url={import.meta.url} path="_samples/first-css" />

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

:::tip どうやって調べたらいいの？

プログラミングを始めたての間は、分からないことがあったときにどのように調べたら良いのか戸惑うことが多いと思います。そんなときは、次のような手順で調べてみましょう。例として、「文字を赤くする方法」を調べてみます。

#### 1. タスクを細かく分割する

現在持ち合わせている知識をもとに、やりたいことを可能な限り細かく分割します。「文字を赤くする」であれば、見た目に関することなので CSS を使えばいいのだろうと想像がつきます。加えて、色の指定方法について調べてみるとよいでしょう。

#### 2. Google で検索してみる

「CSS 文字色」「CSS 色指定」などと調べてみましょう。課題が十分に細かく分割できていれば、これで直接的な回答が得られるはずです。うまく答えが見つからない場合は、慣れている人に聞いてみてください。Slack の `#質問ルーム` チャンネルの出番です。

#### 3. 周辺知識を信頼できる情報源で調べる

見つかったウェブサイトに掲載されているコードをもとに、信頼できる情報源を読みなおします。HTML、CSS、JavaScript の場合は、[MDN](https://developer.mozilla.org/ja/)が便利でしょう。例えば「CSS 文字色」と調べて紹介されるのは `color` <Term type="cssProperty">プロパティ</Term>なので、MDN でこの<Term type="cssProperty">プロパティ</Term>について調べておきましょう。

:::

## 課題 (時間が余った場合)

画像のようなシンプルなボックスを作ってみましょう。

![シンプルなボックス](./rounded-box-with-shadow.png)

シンプルで、よく見かけるデザインですが、様々な指定が必要であることが分かります。次のような点に注意してデザインしてみてください。

- グレーの枠線が付いています (border)
- 枠線は角丸になっています (border-radius)
- 枠線の外側に余白があります (margin)
- 枠線の内側にも余白があります (padding)
- ボックスに影がついています (box-shadow)

<Answer title="シンプルなボックス">

```html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="utf-8" />
    <title>Title</title>
  </head>
  <body>
    <div
      style="
        border: 1px solid #aaa;
        border-radius: 10px;
        margin: 30px;
        padding: 30px;
        box-shadow: 0px 0px 2px 1px #aaa;
      "
    >
      Foo
    </div>
  </body>
</html>
```

<ViewSource url={import.meta.url} path="_samples/foo" />

</Answer>
