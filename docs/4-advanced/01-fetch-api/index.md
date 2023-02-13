---
title: Fetch API
---

import CodeBlock from '@theme/CodeBlock';
import Term from "@site/src/components/Term";
import ViewSource from "@site/src/components/ViewSource";
import ExternalVideoPlayer from "@site/src/components/ExternalVideoPlayer";
import chatAppVideo from "./chat-app.mp4";

## ブラウザで動く JavaScript から <Term type="httpRequestResponse">HTTP リクエスト</Term>を発行する

これまで、ブラウザが<Term type="serverClient">サーバー</Term>に対して<Term type="httpRequestResponse">リクエスト</Term>を送信するのは、リンクがクリックされたときや、フォームが送信されたときなど、ページの再読み込みが起こる場合のみでした。

しかしながら、ブラウザ上で動く JavaScript から利用できる **Fetch API** を用いると、任意のタイミングで<Term type="httpRequestResponse">リクエスト</Term>が発行できるようになります。<Term type="serverClient">サーバー</Term>と<Term type="serverClient">クライアント</Term>、どちらで動く JavaScript なのかに注意しながら、次のプログラムを実行してみましょう。

```html title="/static/index.html の body 内"
<button id="fetch-button">天気予報を見る</button>
```

```javascript title="/static/script.js (ブラウザ上で動く JavaScript)"
document.getElementById("fetch-button").onclick = async () => {
  const response = await fetch("/weather");
  const weather = await response.text();
  alert(weather);
};
```

<ViewSource url={import.meta.url} path="_samples/fetch-api" />

`async () => {}` は、<Term type="asynchronousProcess">非同期関数</Term>、つまり<Term type="asynchronousProcess">async キーワードのついた関数</Term>を生成するための<Term type="arrowFunction">アロー関数式</Term>です。

[`fetch` 関数](https://developer.mozilla.org/ja/docs/Web/API/fetch)は、<Term type="httpRequestResponse">リクエスト</Term>を発行するための関数です。標準では<Term type="httpMethod">GET リクエスト</Term>が発行されます。この関数の戻り値に <Term type="asynchronousProcess">`await 演算子`</Term>を適用すると、発行した<Term type="httpRequestResponse">リクエスト</Term>に対する [`Response` クラス](https://developer.mozilla.org/ja/docs/Web/API/Response)のインスタンスが得られます。

[`Response#text` メソッド](https://developer.mozilla.org/ja/docs/Web/API/Response/text)は、<Term type="httpHeaderBody">レスポンスボディ</Term>全体を文字列として読み込むための<Term type="asynchronousProcess">非同期関数</Term>です。

なお、<Term type="serverClient">サーバー</Term>では次のプログラムが動作しているものとします。

```javascript title="/server.js (サーバーとして動く JavaScript)"
const express = require("express");
const app = express();

app.use(express.static("static"));

app.get("/weather", (request, response) => {
  response.send("晴れ");
});

app.listen(3000);
```

## <Term type="httpMethod">POST リクエスト</Term>を送信する

何もオプションをつけずに呼び出された `fetch` 関数は、<Term type="httpMethod">GET リクエスト</Term>を送信します。しかしながら、`fetch` 関数の第 2 引数に指定したオブジェクトの `method` プロパティに `"post"` を指定することで、<Term type="httpMethod">POST リクエスト</Term>を送信できます。

このとき、<Term type="httpHeaderBody">リクエストボディ</Term>は、 `fetch` 関数の第 2 引数に指定したオブジェクトの `body` プロパティに指定します。

```javascript title="/static/script.js"
document.getElementById("send-button").onclick = async () => {
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const body = new URLSearchParams({ name: name, age: age });
  const response = await fetch("/send", { method: "post", body: body });
  const text = await response.text();
  alert(text);
};
```

```javascript title="/server.js"
const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("static"));

app.post("/send", (request, response) => {
  response.send(
    `あなたの名前は ${request.body.name}で、${request.body.age}歳ですね。`
  );
});

app.listen(3000);
```

<ViewSource url={import.meta.url} path="_samples/send-post-request" />

HTML のフォームで送ったものと同じ形式でデータを送信するには、[GET リクエストと POST リクエスト](../../3-web-servers/07-get-post/index.md)節で扱ったように、<Term type="httpHeaderBody">リクエストボディ</Term>が<Term type="queryString">クエリ文字列</Term>の形式になっている必要があります。[`URLSearchParams` クラス](https://developer.mozilla.org/ja/docs/Web/API/URLSearchParams)を用いると、<Term type="queryString">クエリ文字列</Term>を簡単に扱うことができます。この例では、<Term type="httpHeaderBody">リクエストボディ</Term>には `name=入力された名前&age=入力された年齢` といった文字列が格納されます。

## <Term type="httpHeaderBody">リクエストボディ</Term>に <Term type="json">JSON</Term> を使用する

前項では、<Term type="httpHeaderBody">リクエストボディ</Term>に<Term type="queryString">クエリ文字列</Term>の形式を用いましたが、<Term type="json">JSON</Term> を用いることで、より複雑なデータを扱えるようになります。

[`JSON.stringify` 関数](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)は、JavaScript オブジェクトを受け取って <Term type="json">JSON</Term> 文字列を返す関数です。この値を<Term type="httpHeaderBody">リクエストボディ</Term>に指定しています。

`fetch` 関数の第 2 引数の `headers` オプションでは、<Term type="httpHeaderBody">リクエストヘッダ</Term>を指定します。<Term type="httpHeaderBody">リクエストボディ</Term>に <Term type="json">JSON</Term> を指定する場合は、**`Content-Type` リクエストヘッダ**を `"application/json"` に指定します。

```javascript title="/static/script.js"
document.getElementById("send-button").onclick = async () => {
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const json = JSON.stringify({ name: name, age: age });
  const response = await fetch("/send", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: json,
  });
  const text = await response.text();
  alert(text);
};
```

サーバー側では、リクエストボディの JSON を解釈するため、[`express.urlencoded`](https://expressjs.com/ja/api.html#express.urlencoded) の代わりに [`express.json`](https://expressjs.com/ja/api.html#express.json) を用います。

```javascript title="/server.js"
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("static"));

app.post("/send", (request, response) => {
  response.send(
    `あなたの名前は ${request.body.name}で、${request.body.age}歳ですね。`
  );
});

app.listen(3000);
```

<ViewSource url={import.meta.url} path="_samples/json-request-body" />

:::tip `Content-Type` <Term type="httpHeaderBody">リクエスト・レスポンスヘッダ</Term>
`Content-Type` ヘッダは、<Term type="httpHeaderBody">リクエストボディやレスポンスボディ</Term>の種類を識別するために使用されます。ここで使用する種類は、[**MIME タイプ**](https://developer.mozilla.org/ja/docs/Glossary/MIME_type)と呼ばれます。

代表的な MIME タイプとして、次のような値が定義されています。

| MIME タイプ        | 種類       |
| ------------------ | ---------- |
| `text/html`        | HTML       |
| `text/css`         | CSS        |
| `text/javascript`  | JavaScript |
| `application/json` | JSON       |
| `image/jpg`        | JPEG       |
| `image/png`        | PNG        |
::: 

## 課題

`Fetch API` を用いてチャットアプリを作成してみましょう。

<video src={chatAppVideo} controls loop autoPlay muted />

### ヒント

[掲示板を作ったとき](../../3-web-servers/07-get-post/index.md) と同じく、`messages` という配列をサーバー側に用意し、メッセージが送信されたらその配列に要素を追加するようにしましょう。

```javascript title="/server.js"
const messages = [];
app.post("/send", (request, response) => {
  // メッセージを追加
});
```

`/messages` への <Term type="httpMethod">GET リクエスト</Term>に対し、メッセージの一覧を <Term type="json">JSON</Term> で応答するようにしてみましょう。

[`express.Response#json` メソッド](https://expressjs.com/ja/api.html#res.json)は、受け取ったオブジェクトを `JSON.stringify` によって <Term type="json">JSON</Term> としたうえで<Term type="httpRequestResponse">レスポンス</Term>するためのメソッドです。このとき、`Content-Type` レスポンスヘッダは自動的に `"application/json"` に設定されます。

```javascript title="/server.js"
app.get("/messages", (request, response) => {
  response.json(messages);
});
```

新着メッセージを確認するために、定期的に `/messages` に対して `fetch` 関数を用いて<Term type="httpRequestResponse">リクエスト</Term>しましょう。`setInterval` 関数が利用できます。

```javascript title="/static/script.js"
setInterval(async () => {
  const response = await fetch("/messages");
  // レスポンスを処理する
}, 1000);
```

`innerHTML` プロパティを空文字列とすることで要素の子要素を全て削除できます。`document.createElement` 関数を用いて再び生成し直しましょう。

```html title="/static/index.html"
<ul id="message-list"></ul>
```

```javascript title="/static/script.js"
const messageList = document.getElementById("message-list");
messageList.innerHTML = "";

for (const message of messages) {
  const li = document.createElement("li");
  li.textContent = message;
  messageList.appendChild(li);
}
```

### 解答

解答は次のリンクを参照してください。

<ViewSource url={import.meta.url} path="_samples/chat" />
