const fs = require("fs");
const express = require("express");
const ejs = require("ejs");
const app = express();

const names = ["田中", "鈴木", "佐藤"];
app.get("/", (request, response) => {
  const template = fs.readFileSync("template.ejs", "utf-8");
  const html = ejs.render(template, {
    listItems: names,
  });
  response.send(html);
});

app.listen(3000);
