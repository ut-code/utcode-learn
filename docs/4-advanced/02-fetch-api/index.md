---
title: Fetch API
---

import CodeBlock from '@theme/CodeBlock';
import Term from "@site/src/components/Term";
import OpenInCodeSandbox from "@site/src/components/OpenInCodeSandbox";
import ExternalVideoPlayer from "@site/src/components/ExternalVideoPlayer";

## ブラウザで動く JavaScript から HTTP リクエストを発行する

これまで、ブラウザがサーバーに対してリクエストを送信するのは、リンクがクリックされたときや、フォームが送信されたときなど、ページの再読み込みが起こる場合のみでした。

しかしながら、ブラウザ上で動く JavaScript から利用できる **Fetch API** を用いると、任意のタイミングでリクエストが発行できるようになります。サーバーとクライアント、どちらで動く JavaScript なのかに注意しながら、次のプログラムを実行してみましょう。

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

<OpenInCodeSandbox path="/docs/4-advanced/02-fetch-api/_samples/fetch-api" />

`async () => {}` は、<Term type="asynchronousProcess">非同期関数</Term>、つまり<Term type="asynchronousProcess">async キーワードのついた関数</Term>を生成するための<Term type="arrowFunction">アロー関数式</Term>です。

`fetch` 関数は、HTTP リクエストを発行するための関数です。標準では<Term type="httpMethod">GET リクエスト</Term>が発行されます。この関数の戻り値に <Term type="asynchronousProcess">`await 演算子`</Term>を適用すると、発行したリクエストに対する [`Response` クラス](https://developer.mozilla.org/ja/docs/Web/API/Response)のインスタンスが得られます。

[`Response#text` メソッド](https://developer.mozilla.org/ja/docs/Web/API/Response/text)は、レスポンスボディ全体を文字列として読み込むための非同期関数です。

なお、サーバーでは次のプログラムが動作しているものとします。

```javascript title="/server.js (サーバーとして動く JavaScript)"
const express = require("express");
const app = express();

app.use(express.static("static"));

app.get("/weather", (request, response) => {
  response.send("晴れ");
});

app.listen(3000);
```
