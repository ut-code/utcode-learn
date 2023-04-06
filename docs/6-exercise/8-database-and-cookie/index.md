---
title: データベースと Cookie
sidebar_position: 7
---

import trackingVideo from "./tracking.mp4"
import ViewSource from "@site/src/components/ViewSource";
import Answer from "@site/src/components/Answer";

## データベース

ある学校のアプリで、データベースから先生たちのデータを取得して表示し、先生を１人選択するとその先生が持っている講義一覧が表示されるアプリを作ってみましょう。また、新たに先生の追加と講義の追加ができるようにしましょう。

### 解答例

<Answer>

データモデルを用意します。

```javascript title=schema.prisma

model Teacher {
  id     Int      @id @unique @default(autoincrement())
  name   String
  Courses Course[]
}

model Course {
  id        Int     @id @default(autoincrement())
  name      String
  description String
  hasTest   String
  teacher   Teacher @relation(fields: [teacherId], references: [id])
  teacherId Int
}
```

まず講師一覧表示用の画面を用意します

```html title=index.ejs
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
  </head>
  <body>
    <table>
      <thead>
        <tr>
          <th>講師ID</th>
          <th>氏名</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <% for (const teacher of teachers) {%>
        <tr>
          <td><%= teacher.id %></td>
          <td><%= teacher.name %></td>
          <td>
            <form action="/courses">
              <button
                type="submit"
                name="teacherId"
                value="<%= teacher.id
       %>"
              >
                講義を見る
              </button>
            </form>
          </td>
        </tr>
        <% } %>
      </tbody>
    </table>
    <form action="/add-teacher" method="post">
      <input name="teacherName" placeholder="講師名" />
      <button type="submit">追加</button>
    </form>
  </body>
</html>
```

講義一覧のページを用紙します。

```html title=courses.ejs
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
  </head>
  <body>
    <table>
      <thead>
        <tr>
          <th>講義名</th>
          <th>テストの有無</th>
          <th>説明</th>
        </tr>
      </thead>
      <tbody>
        <% for (const course of courses) {%>
        <tr>
          <td><%= course.name %></td>
          <td><%= course.hasTest %></td>
          <td><%= course.description %></td>
        </tr>
        <% } %>
      </tbody>
    </table>
    <form action="/add-course" method="post">
      <div>
        <input name="newCourse" placeholder="講義名" />
      </div>
      <div>
        <input name="hasTest" placeholder="テストの有無" />
      </div>
      <div>
        <textarea name="description" placeholder="授業説明"></textarea>
      </div>
      <button name="teacherId" type="submit" value="<%= teacherId %>">
        追加
      </button>
    </form>
  </body>
</html>
```

最後にサーバー処理を追加します。

```javascript title=main.js
const fs = require("fs");
const express = require("express");
const ejs = require("ejs");
const { PrismaClient } = require("@prisma/client");

const app = express();
const client = new PrismaClient();

app.use(express.urlencoded({ extended: true }));

app.get("/", async (request, response) => {
  const teachers = await client.teacher.findMany();
  const template = fs.readFileSync("./index.ejs", { encoding: "utf-8" });
  const html = ejs.render(template, { teachers: teachers });
  response.send(html);
});

app.get("/courses", async (request, response) => {
  const teacherId = request.query.teacherId;
  const courses = await client.course.findMany({
    where: { teacherId: parseInt(teacherId) },
  });
  const template = fs.readFileSync("./courses.ejs", { encoding: "utf-8" });
  const html = ejs.render(template, { courses: courses, teacherId: teacherId });
  response.send(html);
});

app.post("/add-course", async (request, response) => {
  const newCourse = request.body.newCourse;
  const teacherId = parseInt(request.body.teacherId);
  if (!teacherId) throw new Error();
  const hasTest = request.body.hasTest;
  const description = request.body.description;
  await client.course.create({
    data: {
      name: newCourse,
      hasTest: hasTest,
      description: description,
      teacherId: teacherId,
    },
  });
  response.send("送信しました");
});

app.post("/add-teacher", async (request, response) => {
  const teacherName = request.body.teacherName;
  await client.teacher.create({
    data: {
      name: teacherName,
    },
  });
  response.send("送信しました");
});

app.listen(3000);
```

<ViewSource url={import.meta.url} path="_samples/database/query-parameter" noCodeSandbox />

</Answer>

<details>

<summary> 別解　</summary>

解答例ではクエリパラメーターを用いましたが、**パスパラメータ **を使用することもできます。
パスパラメータとは、特定のリソースを参照するために URL に付加される変数のことです。

例えば
`https://exapmle.com/users/:id` という URL の場合（:id は適当な数字）、id はそのサイト内で特定のユーザを参照するための変数となります。`https://exapmle.com/users/34` ならば、id が 34 のユーザを参照することになります。

express でパスパラメータを使用する場合、`app.get` ([`express.Application#get` メソッド](https://expressjs.com/ja/api.html#app.get.method)) の第一引数のパスに `:` を組み込むことによって、パスパラメータ名を決めることができます。また、[`express.Request#params` プロパティ](https://expressjs.com/en/4x/api.html#req.params) にパスパラメータが格納されます。

```javascript
const app = express();

app.get("/users/:id", (request, response) => {
  response.send("user " + request.params.id);
});
```

このパスパラメータを用いた解答を作ることもできます。

以下解答例となります。

<ViewSource url={import.meta.url} path="_samples/database/path-parameter" noCodeSandbox />

</details>

## cookie

ショッピングサイトのトラッキングシステムを作ってみましょう。購入した回数が一番多い商品のおすすめが表示されるようにしてみましょう。
<video src={trackingVideo} controls muted autoPlay loop />

- 購入ボタンを押した回数がクッキーに保存されるようにしてみましょう。
- 購入した回数が一番多い商品をお勧めするようにしてみましょう。

### 解答例

<Answer>

```html title=index.ejs
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>ut商会</title>
  </head>
  <body>
    <table>
      <thead>
        <tr>
          <th>車</th>
          <th>指輪</th>
          <th>エビ</th>
        </tr>
      </thead>
      <tbody>
          <tr>
            <% for ( const item of items ){%>
            <td><form action=<%= `/${item}` %>><button>購入</button></form></td>
            <% } %>
          </tr>
      </tbody>
    </table>
    <% if(recommended){ %>
      <div>あなたへのおすすめは<%= recommended %>です</div>
      <% } %>
  </body>
</html>

```

```javascript title=main.js
const fs = require("fs");
const ejs = require("ejs");
const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
app.use(cookieParser());

const items = ["car", "ring", "shrimp"];

app.get("/", (request, response) => {
  let recommended;
  const carPreference = parseInt(request.cookies.carPreference) || 0;
  const ringPreference = parseInt(request.cookies.ringPreference) || 0;
  const shrimpPreference = parseInt(request.cookies.shrimpPreference) || 0;
  const favorite = Math.max(carPreference, ringPreference, shrimpPreference);
  if (
    (carPreference === ringPreference && carPreference === favorite) ||
    (ringPreference === shrimpPreference && ringPreference === favorite) ||
    (shrimpPreference === carPreference && shrimpPreference === favorite) ||
    favorite === 0
  ) {
    recommended = null;
  } else if (carPreference === favorite) {
    recommended = "車";
  } else if (ringPreference === favorite) {
    recommended = "指輪";
  } else {
    recommended = "エビ";
  }
  const template = fs.readFileSync("./index.ejs", { encoding: "utf-8" });
  const html = ejs.render(template, { items: items, recommended: recommended });
  response.send(html);
});

app.get("/car", (request, response) => {
  const carPreference = Number(request.cookies.carPreference) || 0;
  const newCarPreference = carPreference + 1;
  response.cookie("carPreference", newCarPreference.toString());
  response.send("車を買いました");
});

app.get("/ring", (request, response) => {
  const ringPreference = Number(request.cookies.ringPreference) || 0;
  const newRingPreference = ringPreference + 1;
  response.cookie("ringPreference", newRingPreference.toString());
  response.send("指輪を買いました");
});

app.get("/shrimp", (request, response) => {
  const shrimpPreference = Number(request.cookies.shrimpPreference) || 0;
  const newShrimpPreference = shrimpPreference + 1;
  response.cookie("shrimpPreference", newShrimpPreference.toString());
  response.send("エビを買いました");
});

app.listen(3000);
```

<ViewSource url={import.meta.url} path="_samples/cookie" />

</Answer>
