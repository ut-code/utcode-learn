import express from "express";
import { readFileSync } from "fs";

const app = express();

const messages = [];

app.use(express.urlencoded({ extended: true }));

app.get("/", (request, response) => {
  const template = readFileSync("index.html", "utf-8");
  const html = template.replace(
    "{messages}",
    messages.map((msg) => `<li>${msg}</li>`).join(""),
  );
  response.send(html);
});

app.post("/send", (request, response) => {
  messages.push(request.body.message);
  response.send("<body>送信しました</body>");
});

app.listen(3000);
