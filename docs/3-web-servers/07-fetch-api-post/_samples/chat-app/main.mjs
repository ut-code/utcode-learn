import express from "express";

const app = express();
app.use(express.static("./public"));
app.use(express.json());

const messages = [];
app.get("/messages", (request, response) => {
  response.json(messages);
});

app.post("/messages", (request, response) => {
  messages.push(request.body.message);
  response.sendStatus(201); // Created（新しいメッセージを作成）
});

app.listen(3000);
