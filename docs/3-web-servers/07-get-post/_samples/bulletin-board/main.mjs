import fs from "fs";
import express from "express";
import ejs from "ejs";

const app = express();

const messages = [];

app.use(express.urlencoded({ extended: true }));

app.get("/", (request, response) => {
  const template = fs.readFileSync("template.ejs", "utf-8");
  const html = ejs.render(template, { messages: messages });
  response.send(html);
});

app.post("/send", (request, response) => {
  messages.push(request.body.message);
  response.send("送信しました");
});

app.listen(3000);
