import express from "express";
import { PrismaClient } from "./generated/prisma/index.js";

const app = express();
const client = new PrismaClient();
app.use(express.json());
app.use(express.static("./public"));

app.get("/posts", async (request, response) => {
  const posts = await client.post.findMany();
  response.json(posts);
});

app.post("/send", async (request, response) => {
  await client.post.create({ data: { message: request.body.message } });
  response.sendStatus(201); // Created（新しいメッセージを作成）
});

app.listen(3000);
