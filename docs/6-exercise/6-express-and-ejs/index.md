---
title: Express とテンプレートエンジン
sidebar_position: 6
---

import Answer from "@site/src/components/Answer";
import ViewSource from "@site/src/components/ViewSource";

この章では「はじめての Node.js」から「Express とテンプレートエンジン」までの内容を扱っています。

## 準備

このページの演習問題を解く前に、以下の準備を行ってください。

1. 新しいフォルダを Visual Studio Code で開き、`faculties.js` という名前のファイルを作成してください。
2. 右下の「github で表示」ボタンをクリックし、表示されるファイルの中身を `faculties.js` にコピー&ペーストしてください。

<ViewSource url={import.meta.url} path="faculties.js" noCodeSandbox />

これ以降、`faculties.js` の中身を書き換えたり、コピーして他のファイルに貼り付けたりしてはいけません。

`faculties.js` ファイルでは、東京大学の学部に関するデータが入った `faculties`, `facultyDatas` がエクスポートされています。

- `faculties` は学部の英語名の配列です。
- `facultyDatas` は学部の英語名をプロパティ名とするオブジェクトです。さらに、各プロパティは `name` と `departments` プロパティを持つオブジェクトであり、`name` は学部の日本語名、`departments` はその学部に属する学科の日本語名の配列です。

## モジュール

工学部の学科数をコンソールに出力するプログラムを `main.js` ファイルに作成し、Node.js で実行してください。
ただし、工学部の学科数は自分で数えるのではなく、`faculties.js` ファイルから `facultyDatas` を取得して計算してください。

### 解答例

<Answer>

ターミナルで `node main.js` コマンドを実行すると、コンソールに `16` と表示されるはずです。

```javascript title="main.js"
const { facultyDatas } = require("./faculties");
console.log(facultyDatas.engineering.departments.length);
```

<ViewSource url={import.meta.url} path="_samples/module" noCodeSandbox />

</Answer>

## Express

Express を用いて、工学部の学科を箇条書きで表示するウェブページを作成してください。EJS は用いても用いなくても構いません。

### 解答例 1(EJS を用いない)

<Answer>

```javascript title="main.js"
const { facultyDatas } = require("./faculties");
const express = require("express");
const app = express();

const departments = facultyDatas.engineering.departments;
app.get("/", (request, response) => {
  response.send(
    departments.map((department) => `<li>${department}</li>`).join("")
  );
});

app.listen(3000);
```

<ViewSource url={import.meta.url} path="_samples/express-no-ejs" noCodeSandbox />

</Answer>

### 解答例 2(EJS を用いる)

<Answer>

```javascript title="main.js"
const { facultyDatas } = require("./faculties");
const fs = require("fs");
const express = require("express");
const ejs = require("ejs");
const app = express();

app.get("/", (request, response) => {
  const template = fs.readFileSync("template.ejs", "utf-8");
  const html = ejs.render(template, {
    departments: facultyDatas.engineering.departments,
  });
  response.send(html);
});

app.listen(3000);
```

```html title="template.ejs"
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="utf-8" />
    <title>Title</title>
  </head>
  <body>
    <ul>
      <% for (const department of departments) { %>
      <li><%= department %></li>
      <% } %>
    </ul>
  </body>
</html>
```

<ViewSource url={import.meta.url} path="_samples/express-ejs" noCodeSandbox />

</Answer>

## 総合問題

http モジュール(あるいは Express)と EJS を用いて、以下の要件を満たすウェブサービスを作成してください。

- `http://localhost:3000/` にアクセスすると東京大学の学部一覧が表示される。それぞれの学部名は `/[学部の英語名]` へのリンクになっている。
- リンクがクリックされると `http://localhost:3000/[学部の英語名]` にページが移動し、その学部の学科一覧が表示される。例えば、工学部がクリックされると `http://localhost:3000/engineering` に移動し、工学部の学科一覧が表示される。

![課題の例1](sample1.png)
![課題の例2](sample2.png)

:::tip

Express を用いる場合は、`app.get` の代わりに `app.use` を用いることで、http 標準モジュールにおける `server.addListener` と同様の処理が実現可能です。

```javascript title="main.js"
const express = require("express");
const app = express();

app.use((request, response) => {
  response.send("Hello Express");
});

app.listen(3000);
```

:::

### 解答例 1(http 標準モジュール)

<ViewSource url={import.meta.url} path="_samples/faculty-list-html" noCodeSandbox />

### 解答例 2(Express)

<ViewSource url={import.meta.url} path="_samples/faculty-list-express" noCodeSandbox />
