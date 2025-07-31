import express from "express";

const app = express();

app.use(express.static("./public"));
app.use(express.json());

const books = [
  { title: "吾輩は猫である", author: "夏目漱石" },
  { title: "こころ", author: "夏目漱石" },
  { title: "坊っちゃん", author: "夏目漱石" },
  { title: "舞姫", author: "森鴎外" },
  { title: "高瀬舟", author: "森鴎外" },
];

app.post("/search", (request, response) => {
  const selectedBooks = books.filter(
    (book) => book.author === request.body.author,
  );
  response.json(selectedBooks);
});

app.listen(3000);
