---
title: イベント
---

import handleClickVideo from "./handle-click.mp4";
import projectMovieForDom from "./project-movie-for-dom.mp4";

## <Term type="javascriptValue">値</Term>としての<Term type="javascriptFunction">関数</Term>

<p><Term type="javascript">JavaScript</Term> では、<Term type="javascriptFunction">関数</Term>も<Term type="javascriptValue">値</Term>の一種です。したがって、他の<Term type="javascriptValue">値</Term>と同じように、<Term type="javascriptVariable">変数</Term>に<Term type="javascriptAssignment">代入</Term>したり、<Term type="javascriptFunction">関数</Term>の<Term type="javascriptParameter">引数</Term>や<Term type="javascriptReturnValue">戻り値</Term>として使用したりすることができます。</p>

```javascript
function greet() {
  document.write("Hello World");
}

const func = greet;
func();
```

上の例では、 `const func = greet;` の行で<Term type="javascriptVariable">変数</Term> `func` に<Term type="javascriptFunction">関数</Term> `greet` を<Term type="javascriptAssignment">代入</Term>しています。<Term type="javascriptFunction">関数</Term>を<Term type="javascriptValue">値</Term>として扱うときは、<Term type="javascriptFunction">関数</Term>呼び出し<Term type="javascriptExpression">式</Term>の括弧は使用しません。これにより、<Term type="javascriptFunction">関数</Term>が<Term type="javascriptAssignment">代入</Term>された<Term type="javascriptVariable">変数</Term>を経由してその<Term type="javascriptFunction">関数</Term>を実行できます。

## <Term type="eventHandler">イベントハンドラ</Term>

<p><Term type="javascriptObject">オブジェクト</Term>の<Term type="javascriptProperty">プロパティ</Term>として<Term type="javascriptFunction">関数</Term>を利用することもできます。 <code>document.getElementById</code> が返す<Term type="javascriptObject">オブジェクト</Term>の <code>onclick</code> <Term type="javascriptProperty">プロパティ</Term>には、<Term type="element">要素</Term>がクリックされたときに実行される<Term type="javascriptFunction">関数</Term>を指定できます。</p>
ボタンのクリック、フォームへの入力、ページの読み込みなど、Web ページ上で発生するあらゆるアクションを総称して<Term type="events">イベント</Term>と呼びます。このような<Term type="events">イベント</Term>の処理を行うのが<Term type="eventHandler">イベントハンドラ</Term>で、<code>onclick</code> 関数はその一例です。

```html title="index.html"
<button id="greet-button" type="button">クリック</button>
```

```javascript title="script.js"
function clicked() {
  document.write("Hello World");
}

const greetButton = document.getElementById("greet-button");
greetButton.onclick = clicked;
```

この例では、<Term type="element">HTML 要素</Term>の `id` <Term type="attribute">属性</Term>に `greet-button` が指定されている <Term type="element">HTML 要素</Term>を表す<Term type="javascriptObject">オブジェクト</Term>の `onclick` <Term type="javascriptProperty">プロパティ</Term>に対し、<Term type="javascriptFunction">関数</Term> `clicked` を<Term type="javascriptAssignment">代入</Term>しています。これにより、ボタンがクリックされたとき、`clicked` <Term type="javascriptFunction">関数</Term>が実行されるようになります。

<video src={handleClickVideo} autoPlay muted loop controls />

:::info

下のコードは意図したとおりに動作しません。何が間違っているのでしょうか。

```javascript
function clicked() {
  document.write("Hello World");
}

const greetButton = document.getElementById("greet-button");
greetButton.onclick = clicked();
```

答えは、最後の行が `clicked` から `clicked()` に変わってしまっていることです。<Term type="javascriptFunction">関数</Term>は、カッコをつけた<Term type="javascriptExpression">式</Term>が<Term type="javascriptEvaluation">評価</Term>されるタイミングで実行されます。このため、

```javascript
greetButton.onclick = clicked();
```

では<Term type="javascriptAssignment">代入</Term>より前、<Term type="javascriptExpression">式</Term> `clicked()` が<Term type="javascriptEvaluation">評価</Term>されたタイミングで `clicked` <Term type="javascriptFunction">関数</Term>が実行されてしまいます。

:::

:::caution

上の例では、画面上にはじめから表示されていたボタンが、ボタンをクリックしたときに削除されています。これは、 `document.write` をすべての<Term type="element">要素</Term>の表示が終わった後に実行すると、画面上のすべての<Term type="element">要素</Term>を一度削除するという挙動をとるためです。このため、現代の <Term type="javascript">JavaScript</Term> において、 `document.write` <Term type="javascriptFunction">関数</Term>が使用されることはほとんどありません。

:::

## 課題

押すと大きく赤文字が表示される「びっくり箱」のようなボタンを作ってみましょう。

<video src={projectMovieForDom} autoPlay muted loop controls />

<Details summary={<summary>ヒント1：文字列の表示</summary>}>

さっきは文字列の表示に`document.write()` を使いましたが、これでは文字色やサイズが変えられません。
こんな書き方ならそれもできますが、あまりに乱暴ですよ。

```javascript
document.write("<div style='color:red; font-size:40px'>Hello world!</div>");
```

HTML 要素をJavaScriptで操作する方法は前回の「DOM」の章で扱っています。

</Details>

<Details summary={<summary>ヒント2：HTMLファイルに…</summary>}>

`<button>` タグのHTML属性を書き換えるとボタンの中に`Hello world!` を表示してしまいます。

HTMLファイルに一工夫が必要です。空の`<div>` タグを用意してあげましょう。

```html
<div id="greeting"></div>
```

</Details>

<ViewSource url={import.meta.url} path="_samples/project-jack-in-a-box/" />
