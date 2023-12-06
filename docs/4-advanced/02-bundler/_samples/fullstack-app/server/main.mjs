import express from "express";
const app = express();

app.use(express.json());

// Vite によって出力されたディレクトリを配信する
app.use(express.static("dist"));

const messages = [];

app.get("/messages", (request, response) => {
  response.json(messages);
});

app.post("/send", (request, response) => {
  messages.push(request.body.message);
  response.send();
});

app.listen(3000);
