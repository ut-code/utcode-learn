---
title: Express とテンプレートエンジン
---

import CodeBlock from '@theme/CodeBlock';
import Term from "@site/src/components/Term";
import ViewSource from "@site/src/components/ViewSource";

## Express パッケージを用いて HTTP サーバーを構築する

[Express パッケージ](https://www.npmjs.com/package/express) を用いると、Node.js 標準の `http` モジュールよりも簡単に Web サーバーを構築できます。

まずは `express` パッケージを npm でインストールします。

```shell
npm install express
```

続いて、次のような `main.js` を作成しましょう。

```javascript title=main.js
const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.send("Hello Express");
});

app.listen(3000);
```

`main.js` を起動することにより、 `http://localhost:3000/` で `Hello Express` が表示されます。

[前頁](../04-http-server/index.md) の `http` 標準モジュールを用いた例とほとんど同じことを行うプログラムになっていますが、`express` を使う場合は少々異なる部分があります。まず、`require("express")` の戻り値は関数となっており、この関数を呼び出すことにより、[`express.Application`](https://expressjs.com/ja/api.html#app) クラスのインスタンスが作成されます。

[`express.Application#get` メソッド](https://expressjs.com/ja/api.html#app.get.method)は、`http` 標準モジュールにおける `request` イベントハンドラの登録に相当する操作を行うためのメソッドです。イベントハンドラの引数に `request` と `response` が存在する点では一致していますが、Express では [`express.Response#send` メソッド](https://expressjs.com/ja/api.html#res.send)が利用できます。これは、[`http.ServerResponse#write`](https://nodejs.org/api/http.html#responsewritechunk-encoding-callback) メソッドと、[`http.ServerResponse#end`](https://nodejs.org/api/http.html#responseenddata-encoding-callback) メソッドを順番に呼ぶ操作に対応します。

## 静的ホスティング

次の例では、`/`、`/script.js`、`/sub/`、`/sub/script.js` へのリクエストについて、それぞれファイルから読み込んでレスポンスを送信しています。

```javascript
const express = require("express");
const fs = require("fs");
const app = express();

app.get("/", (request, response) => {
  response.send(fs.readFileSync("static/index.html", "utf-8"));
});
app.get("/script.js", (request, response) => {
  response.send(fs.readFileSync("static/script.js", "utf-8"));
});
app.get("/sub/", (request, response) => {
  response.send(fs.readFileSync("static/sub/index.html", "utf-8"));
});
app.get("/sub/script.js", (request, response) => {
  response.send(fs.readFileSync("static/sub/script.js", "utf-8"));
});

app.listen(3000);
```

<ViewSource path="/docs/3-web-servers/05-template-engine/_samples/static-hosting-naive" />

`express.static` 関数を用いると、このような「リクエストを受け取ったら、そのパスに応じて適切なファイルを読み込んでレスポンスとして返す」という一連の動作を簡単に記述できます。

```javascript
const express = require("express");

const app = express();
app.use(express.static("static"));
app.listen(3000);
```

<ViewSource path="/docs/3-web-servers/05-template-engine/_samples/static-hosting-smart" />

これにより、リクエストのパスをもとに、`static` フォルダ内の適切なファイルが自動的に配信されます。

:::tip `index.html` の省略
`express.static` を用いる場合、`index.html` は省略可能になります。つまり、`/` へのリクエストで `static/index.html` が、`/sub` へのリクエストで `static/sub/index.html` にアクセスできるようになります。これは、Express や JavaScript に限ったことではなく、多くの Web サーバーの実装において、こういったルールが成り立ちます。
:::

## EJS テンプレートエンジン

前項のプログラムを書き換えて、複雑な HTML を出力できるようにしてみましょう。

```javascript
const express = require("express");
const app = express();

const names = ["田中", "鈴木", "佐藤"];
app.get("/", (request, response) => {
  response.send(`
    <!DOCTYPE html>
      <html lang="ja">
      <head>
        <meta charset="utf-8" />
        <title>Title</title>
      </head>
      <body>
        <ul>
          ${names.map((name) => `<li>${name}</li>`).join("")}
        </ul>
      </body>
    </html>
  `);
});

app.listen(3000);
```

:::note `Array#join`
[`Array#join` メソッド](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/join)は、配列を指定した区切り文字で結合した文字列を返すメソッドです。

```javascript
console.log(["Apple", "Banana", "Orange"].join("/")); // Apple/Banana/Orange
```

:::

なかなか大変なことになっています。これから HTML がもっと長くなったり、さらに複雑なプログラムが必要になってきたらこのまま続けていくのは難しそうです。

[EJS](https://ejs.co/) をはじめとした**テンプレートエンジン**は、プログラミング言語から HTML などを作成する作業を簡単にしてくれます。先ほどのプログラムを、EJS を用いて書き換えると、次のようになります。

```javascript title=main.js
const fs = require("fs");
const express = require("express");
const ejs = require("ejs");
const app = express();

const names = ["田中", "鈴木", "佐藤"];
app.get("/", (request, response) => {
  const template = fs.readFileSync("template.ejs", "utf-8");
  const html = ejs.render(template, {
    listItems: names,
  });
  response.send(html);
});

app.listen(3000);
```

```html title=template.ejs
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="utf-8" />
    <title>Title</title>
  </head>
  <body>
    <ul>
      <% for (const listItem of listItems) { %>
      <li><%= listItem %></li>
      <% } %>
    </ul>
  </body>
</html>
```

<ViewSource path="/docs/3-web-servers/05-template-engine/_samples/ejs-template-engine" />

イベントハンドラの中で、プログラムではまず `fs.readFileSync` 関数を用いて `template.ejs` ファイルの内容を読み込んでいます。その次の行の [`ejs.render` 関数](https://ejs.co/#docs) がポイントです。この関数は、第 1 引数にテンプレートを文字列として受け取り、諸々の変換を行った後の文字列を返します。第 2 引数には、変換の際に埋め込みたいデータをオブジェクトの形式で指定します。

このオブジェクトのキーと同じ名前の変数が、テンプレート内で利用できます。上の例の `template.ejs` における `listItems` は、`main.js` で指定した `{ listItems: names }` により `["田中", "鈴木", "佐藤"]` になります。

テンプレート内の `<%` から `%>` で囲まれた部分は、JavaScript のプログラムとして実行されます。また、`<%=` から `%>` で囲まれた部分は JavaScript の式として評価され、最終的な結果に埋め込まれます。

## 課題

- Express を用いて、`あなたは n 人目のお客様です。` とレスポンスする Web サーバーを作成してください。`n` はアクセスされるたびに 1 ずつ増えるようにしてください。
- 上記プログラムに EJS を追加してみてください。
- (重要) アクセスされた時刻をウェブサーバー側で求めて表示するウェブサーバーと、ブラウザに求めさせるウェブサーバーをそれぞれ作成してください。
  - この 2 つの違いは何でしょうか。どういった場合にどちらの手法を使うのが適切でしょうか。

解答例 1:

<ViewSource path="/docs/3-web-servers/05-template-engine/_samples/nth" />

解答例 2:

<ViewSource path="/docs/3-web-servers/05-template-engine/_samples/nth-ejs" />

解答例 3:

<ViewSource path="/docs/3-web-servers/05-template-engine/_samples/server-or-client" />
