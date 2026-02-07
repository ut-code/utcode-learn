import express from "express";

const app = express();
app.use(express.json());
app.use(express.static("./public"));

// タスクをメモリ上で管理
let todos = [];
let nextId = 1;

const systemPrompt = `ユーザーの入力からタスクと期限を抽出してください。
出力は必ず2行で、1行目が期限の日時、2行目がタスクのタイトルです。
日時は「2024/1/21 10:00」のような形式にしてください。
期限の情報がない場合は1行目を空にしてください。

例:
入力: 明日の10時に会議
出力:
2024/1/21 10:00
会議

入力: 買い物に行く
出力:

買い物に行く`;

// タスク一覧を取得
app.get("/todos", (request, response) => {
  response.json(todos);
});

// タスクを追加
app.post("/todos", (request, response) => {
  const todo = {
    id: nextId,
    title: request.body.title,
    dueAt: request.body.dueAt || null,
  };
  nextId += 1;
  todos.push(todo);
  response.json(todo);
});

// タスクを削除
app.delete("/todos/:id", (request, response) => {
  const id = Number(request.params.id);
  todos = todos.filter((todo) => todo.id !== id);
  response.json({ success: true });
});

// 自然言語でタスクを追加（AI解析）
app.post("/todos/ai", async (request, response) => {
  const aiResponse = await fetch(
    "https://openrouter.ai/api/v1/chat/completions",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.0-flash-exp:free",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: request.body.text },
        ],
      }),
    },
  );

  const data = await aiResponse.json();
  const content = data.choices[0].message.content;
  // AIの応答を改行で分割し、1行目を期限、2行目をタイトルとして取得
  const firstNewLine = content.indexOf("\n");
  const dueAt = content.slice(0, firstNewLine) || null;
  const title = content.slice(firstNewLine + 1) || request.body.text;

  const todo = {
    id: nextId,
    title: title,
    dueAt: dueAt,
  };
  nextId += 1;
  todos.push(todo);
  response.json(todo);
});

app.listen(3000);
