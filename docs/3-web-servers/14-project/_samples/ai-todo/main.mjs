import express from "express";
import { PrismaClient } from "./generated/prisma/index.js";

const app = express();
const client = new PrismaClient();

app.use(express.json());
app.use(express.static("./public"));

const systemPrompt = `ユーザーの発話からタスクと時間を抽出してください。
出力は必ず2行で、1行目がISO8601形式の日時（タイムゾーンは+09:00）、2行目がタスクタイトルです。
時間情報がない場合は1行目を空にしてください。

例:
入力: 明日の10時に会議
出力:
2024-01-21T10:00:00+09:00
会議

入力: 買い物に行く
出力:

買い物に行く`;

// 自然言語でタスクを追加（AI解析 + DB保存）
app.post("/todos/ai", async (request, response) => {
  try {
    const result = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-3-flash-preview",
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: request.body.text },
          ],
        }),
      },
    );
    const data = await result.json();

    if (!data.choices || !data.choices[0]) {
      response.status(500).json({ error: "AIからの応答が不正です" });
      return;
    }

    const content = data.choices[0].message.content;
    const lines = content.split("\n");
    const dueAt = lines[0] ? new Date(lines[0]) : null;
    const title = lines[1] || "";

    const todo = await client.todo.create({
      data: { title, due_at: dueAt },
    });
    response.json(todo);
  } catch (error) {
    console.error("Parse error:", error);
    response.status(500).json({ error: "解析に失敗しました" });
  }
});

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
    data: {
      title: request.body.title,
      due_at: request.body.due_at ? new Date(request.body.due_at) : null,
    },
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
