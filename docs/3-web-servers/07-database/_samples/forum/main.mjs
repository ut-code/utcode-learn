import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();

app.use(express.urlencoded({ extended: true }));

const client = new PrismaClient();

app.get("/", async (request, response) => {
  const messages = await (
    await client.forum.findMany()
  ).map((data) => data.message);
  response.send(`
    <!doctype html>
    <html lang="ja">
      <head>
        <meta charset="utf-8" />
        <title>Title</title>
      </head>
      <body>
        <ul>
          ${messages.map((message) => `<li>${message}</li>`).join("")}
        </ul>
        <form method="post" action="/send">
          <input placeholder="ここに入力してください。" name="message" />
          <button>送信</button>
        </form>
      </body>
    </html>
  `);
});

app.post("/send", async (request, response) => {
  await client.forum.create({ data: { message: request.body.message } });
  response.send("投稿しました。");
});

app.listen(3000);
