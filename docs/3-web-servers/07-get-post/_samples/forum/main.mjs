import express from "express";

const app = express();
app.use(express.urlencoded({ extended: true }));

const messages = [];

app.get("/", (request, response) => {
  response.send(`
    <!doctype html>
    <html lang="ja">
      <head>
        <meta charset="utf-8" />
        <title>掲示板</title>
      </head>
      <body>
        <ul>
          ${messages.map((message) => `<li>${message}</li>`).join("")}
        </ul>
        <form method="post" action="/send">
          <input placeholder="メッセージ" name="message" />
          <button type="submit">送信</button>
        </form>
      </body>
    </html>
  `);
});

app.post("/send", (request, response) => {
  messages.push(request.body.message);
  response.redirect("/");
});

app.listen(3000);
