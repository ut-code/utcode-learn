import express from "express";
import { PrismaClient } from "./generated/prisma/index.js";

const app = express();
app.use(express.urlencoded({ extended: true }));
const client = new PrismaClient();

app.get("/", async (request, response) => {
  const posts = await client.post.findMany();
  response.send(`
    <!doctype html>
    <html lang="ja">
      <head>
        <meta charset="utf-8" />
        <title>掲示板</title>
      </head>
      <body>
        <ul>
          ${posts.map((post) => `<li>${post.message}</li>`).join("")}
        </ul>
        <form method="post" action="/send">
          <input placeholder="メッセージ" name="message" />
          <button type="submit">送信</button>
        </form>
      </body>
    </html>
  `);
});

app.post("/send", async (request, response) => {
  await client.post.create({ data: { message: request.body.message } });
  response.redirect("/");
});

app.listen(3000);
