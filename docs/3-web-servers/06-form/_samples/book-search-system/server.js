const fs = require("fs");
const express = require("express");
const ejs = require("ejs");

const app = express();

const books = [
  { title: "吾輩は猫である", author: "夏目漱石" },
  { title: "こころ", author: "夏目漱石" },
  { title: "坊つちやん", author: "夏目漱石" },
  { title: "舞姫", author: "森鴎外" },
  { title: "高瀬舟", author: "森鴎外" },
];

app.use(express.static("static"));

app.get("/send", (request, response) => {
  const selectedBooks = books.filter(
    (book) => book.author === request.query.author
  );
  const template = fs.readFileSync("template.ejs", "utf-8");
  const html = ejs.render(template, { selectedBooks: selectedBooks });
  response.send(html);
});

app.listen(3000);
