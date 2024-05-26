import { readFileSync } from "node:fs";
import express from "express";

const app = express();
app.use(express.urlencoded({ extended: true }));

const messages = [];

const template = readFileSync("./template.html", "utf-8");
app.get("/", (request, response) => {
  const html = template.replace(
    "<!-- messages -->",
    messages.map((message) => `<li>${message}</li>`).join(""),
  );
  response.send(html);
});

app.post("/send", (request, response) => {
  messages.push(request.body.message);
  response.redirect("/");
});

app.listen(3000);
