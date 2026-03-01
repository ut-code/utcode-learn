import express from "express";
import { PrismaClient } from "./generated/prisma/index.js";

const app = express();
const client = new PrismaClient();

app.use(express.json());
app.use(express.static("./public"));

app.get("/todos", async (request, response) => {
  const todos = await client.todo.findMany({ orderBy: { id: "asc" } });
  response.json(todos);
});

app.post("/todos", async (request, response) => {
  const todo = await client.todo.create({
    data: {
      title: request.body.title,
      dueAt: new Date(request.body.dueAt),
    },
  });
  response.json(todo);
});

app.delete("/todos/:id", async (request, response) => {
  await client.todo.delete({
    where: { id: parseInt(request.params.id) },
  });
  response.json({ success: true });
});

app.post("/todos/ai", async (request, response) => {
  const systemPrompt = `
ユーザーの入力から、ToDoのタイトルと期限を抽出してください。
1行目にタイトル、2行目に期限（ISO8601形式、タイムゾーンは東京）を出力してください。
現在日時: ${new Date().toISOString()}

例
現在日時: 2026-01-20T12:00:00+09:00
入力: 明日の10時に会議
出力: 会議
2026-01-21T10:00:00+09:00
`;

  const result = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "openrouter/free",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: request.body.instruction },
      ],
    }),
  });
  const data = await result.json();
  const content = data.choices[0].message.content;
  const lines = content.split("\n");
  const todo = await client.todo.create({
    data: { title: lines[0], dueAt: new Date(lines[1]) },
  });
  response.json(todo);
});

app.listen(3000);
