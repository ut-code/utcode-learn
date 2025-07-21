import express from "express";
import cors from "cors";
import { PrismaClient } from "./generated/prisma/index.js";

const app = express();
const client = new PrismaClient();

// 別ドメインからFetch APIを用いてリクエストを送信可能にするために必要
// WEB_ORIGINに設定したドメインからのリクエストのみを許可する
// 参考：https://developer.mozilla.org/ja/docs/Web/HTTP/Guides/CORS
app.use(cors({ origin: process.env.WEB_ORIGIN }));

app.use(express.json());

app.get("/todos", async (request, response) => {
  const todos = await client.todo.findMany();
  response.json(todos);
});

app.post("/send", async (request, response) => {
  await client.todo.deleteMany();
  await client.todo.createMany({ data: request.body });
});

app.listen(3000);
