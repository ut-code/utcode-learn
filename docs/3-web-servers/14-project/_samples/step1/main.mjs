import express from "express";
import { PrismaClient } from "./generated/prisma/index.js";

const app = express();
const client = new PrismaClient();

app.use(express.json());
app.use(express.static("./public"));

// タスク一覧を取得
app.get("/todos", async (request, response) => {
  const todos = await client.todo.findMany({
    orderBy: { createdAt: "desc" },
  });
  response.json(todos);
});

// タスクを追加
app.post("/todos", async (request, response) => {
  const todo = await client.todo.create({
    data: { title: request.body.title },
  });
  response.json(todo);
});

// タスクを削除
app.delete("/todos/:id", async (request, response) => {
  await client.todo.delete({
    where: { id: parseInt(request.params.id) },
  });
  response.json({ success: true });
});

app.listen(3000);
