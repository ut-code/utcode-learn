import express from "express";

const app = express();

const messages = [];

app.use(express.urlencoded({ extended: true }));

app.get("/", (request, response) => {
  response.send(`
    <!doctype html>
    <html lang="ja">
      <head>
        <meta charset="UTF-8" />
        <title>Document</title>
      </head>
      <body>
        <ul>
          ${messages.map((message) => `<li>${message}</li>`).join("")}
        </ul>
        <form action="/send" method="post">
          <input name="message" />
          <button>送信</button>
        </form>
      </body>
    </html>
  `);
});

app.post("/send", (request, response) => {
  messages.push(request.body.message);
  response.send("送信しました");
});

app.listen(3000);
