import CodeBlock from '@theme/CodeBlock';
import Term from "@site/src/components/Term";
import ViewSource from "@site/src/components/ViewSource";
import Answer from "@site/src/components/Answer";

## 「GET リクエストと POST リクエスト」課題

ユーザ名とパスワードを入力してログインするサイトを作ってみましょう。

- 正しいユーザ名とパスワードを入力すると、「ようこそ〇〇さん」（〇〇はユーザ名）と表示されます。
- 存在しないユーザ名、または間違ったパスワードを入力すると、「ユーザが存在しないか、パスワードが間違っています」と表示されます。

※ユーザ名とパスワードはあらかじめサーバー側で定義しておきましょう。

![ユーザ名とパスワードを入力してログインするサイト](./login.png)

<Answer>

```javascript title="server.js"
const express = require("express");

const app = express();

const data = { tanaka: "1234", satou: "9999" };

app.use(express.urlencoded({ extended: true }));
app.use(express.static("static"));

app.post("/user", (request, response) => {
  if (request.body.password === data[request.body.user]) {
    response.send(`ようこそ、${request.body.user}さん！`);
  } else {
    response.send("ユーザが存在しないか、パスワードが間違っています");
  }
});

app.listen(3000);
```

```html title="index.html"
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>ログイン</title>
  </head>
  <body>
    <form action="/user" method="post">
      <table>
        <tr>
          <th>ユーザ名</th>
          <td><input name="user" /></td>
        </tr>
        <tr>
          <th>パスワード</th>
          <td>
            <input name="password" type="password" />
          </td>
        </tr>
      </table>
      <button>ログインする</button>
    </form>
  </body>
</html>
```

</Answer>
