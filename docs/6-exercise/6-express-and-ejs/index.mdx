---
title: Express とテンプレートエンジン
sidebar_position: 6
---

import Answer from "@site/src/components/Answer";
import ViewSource from "@site/src/components/ViewSource";
import Details from "@theme/Details";

この章では教材の「[はじめての Node.js](/docs/web-servers/node-js/)」から「[Express によるサーバー構築](/docs/web-servers/server/)」までの内容を扱っています。

---

## 準備

このページの演習問題を解く前に、以下の準備を行ってください。

1. 新しいフォルダを Visual Studio Code で開き、`faculties.js` という名前のファイルを作成してください。
2. 以下のコードを `faculties.js` にコピー&ペーストしてください。

<Details summary={<summary>faculties.js</summary>}>

```javascript title="faculties.js"
exports.faculties = [
  "law",
  "medicine",
  "engineering",
  "letters",
  "science",
  "agriculture",
  "economics",
  "artsAndSciences",
  "education",
  "pharmaceuticalSciences",
];

exports.facultyData = {
  law: {
    name: "法学部",
    departments: [
      "第一類（法学総合コース）",
      "第二類（法律プロフェッション・コース）",
      "第三類（政治コース）",
    ],
  },
  medicine: {
    name: "医学部",
    departments: ["医学科", "健康総合科学科"],
  },
  engineering: {
    name: "工学部",
    departments: [
      "社会基盤学科",
      "建築学科",
      "都市工学科",
      "機械工学科",
      "機械情報工学科",
      "航空宇宙工学科",
      "精密工学科",
      "電子情報工学科",
      "電気電子工学科",
      "物理工学科",
      "計数工学科",
      "マテリアル工学科",
      "応用化学科",
      "化学システム工学科",
      "化学生命工学科",
      "システム創成学科",
    ],
  },
  letters: {
    name: "文学部",
    departments: ["人文学科"],
  },
  science: {
    name: "理学部",
    departments: [
      "数学科",
      "情報科学科",
      "物理学科",
      "天文学科",
      "地球惑星物理学科",
      "地球惑星環境学科",
      "化学科",
      "生物化学科",
      "生物学科",
      "生物情報科学科",
    ],
  },
  agriculture: {
    name: "農学部",
    departments: ["応用生命科学課程", "環境資源科学課程", "獣医学課程"],
  },
  economics: {
    name: "経済学部",
    departments: ["経済学科", "経営学科", "金融学科"],
  },
  artsAndSciences: {
    name: "教養学部",
    departments: ["教養学科", "学際科学科", "統合自然科学科"],
  },
  education: {
    name: "教育学部",
    departments: ["総合教育科学科"],
  },
  pharmaceuticalSciences: {
    name: "薬学部",
    departments: ["薬科学科", "薬学科"],
  },
};
```

</Details>

これ以降、`faculties.js` の中身を書き換えたり、コピーして他のファイルに貼り付けたりしてはいけません。

`faculties.js` ファイルでは、東京大学の学部に関するデータが入った `faculties`, `facultyData` がエクスポートされています。

- `faculties` は学部の英語名の配列です。
- `facultyData` は学部の英語名をプロパティ名とするオブジェクトです。さらに、各プロパティは `name` と `departments` プロパティを持つオブジェクトであり、`name` は学部の日本語名、`departments` はその学部に属する学科の日本語名の配列です。

---

## 1. モジュール

工学部の学科数をコンソールに出力するプログラムを `main.js` ファイルに作成し、Node.js で実行してください。
ただし、工学部の学科数は自分で数えるのではなく、`faculties.js` ファイルから `facultyData` を取得して計算してください。

### 解答例

<Answer>

ターミナルで `node main.js` コマンドを実行すると、コンソールに `16` と表示されるはずです。

```javascript title="main.js"
const { facultyData } = require("./faculties");
console.log(facultyData.engineering.departments.length);
```

<ViewSource url={import.meta.url} path="_samples/module" noCodeSandbox />

</Answer>

---

## 2. Express

Express を用いて、工学部の学科を箇条書きで表示するウェブページを作成してください。EJS は用いても用いなくても構いません。

### 解答例 1(EJS を用いない)

<Answer>

```javascript title="main.js"
const { facultyData } = require("./faculties");
const express = require("express");
const app = express();

const departments = facultyData.engineering.departments;
app.get("/", (request, response) => {
  response.send(
    departments.map((department) => `<li>${department}</li>`).join(""),
  );
});

app.listen(3000);
```

<ViewSource url={import.meta.url} path="_samples/express-no-ejs" noCodeSandbox />

</Answer>

### 解答例 2(EJS を用いる)

<Answer>

```javascript title="main.js"
const { facultyData } = require("./faculties");
const fs = require("fs");
const express = require("express");
const ejs = require("ejs");
const app = express();

app.get("/", (request, response) => {
  const template = fs.readFileSync("template.ejs", "utf-8");
  const html = ejs.render(template, {
    departments: facultyData.engineering.departments,
  });
  response.send(html);
});

app.listen(3000);
```

```html title="template.ejs"
<!doctype html>
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

---

## 3. 総合問題

http モジュール(あるいは Express)と EJS を用いて、以下の要件を満たすウェブサービスを作成してください。

- `http://localhost:3000/` にアクセスすると東京大学の学部一覧が表示される。それぞれの学部名は `/[学部の英語名]` へのリンクになっている。
- リンクがクリックされると `http://localhost:3000/[学部の英語名]` にページが移動し、その学部の学科一覧が表示される。例えば、工学部がクリックされると `http://localhost:3000/engineering` に移動し、工学部の学科一覧が表示される。

:::tip

Express を用いる場合は、[Route paramater](https://expressjs.com/en/guide/routing.html#route-parameters) を用いると簡潔に実装することができます。

```javascript title="main.js"
// 使用例
const express = require("express");
const app = express();

app.get("/:faculty", (request, response) => {
  response.send(request.params.faculty);
});

app.listen(3000);
```

:::

![課題の例1](sample1.png)
![課題の例2](sample2.png)

### 解答例 1 (`http` 標準モジュール)

<ViewSource url={import.meta.url} path="_samples/faculty-list-html" noCodeSandbox />

### 解答例 2 (Express)

<ViewSource url={import.meta.url} path="_samples/faculty-list-express" noCodeSandbox />
