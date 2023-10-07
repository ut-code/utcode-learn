import { readFileSync } from "fs";
import express from "express";
import { render } from "ejs";

const app = express();

const names = ["田中", "鈴木", "佐藤"];
app.get("/", (request, response) => {
  const template = readFileSync("template.ejs", "utf-8");
  const html = render(template, {
    listItems: names,
  });
  response.send(html);
});

app.listen(3000);
