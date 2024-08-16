import express from "express";

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
    (book) => book.author === request.query.author,
  );
  response.send(`
    <!doctype html>
    <html lang="ja">
      <head>
        <meta charset="utf-8" />
        <title>Document</title>
      </head>
      <body>
        <ul>
          ${selectedBooks.map((book) => `<li>${book.title}</li>`).join("")}
        </ul>
      </body>
    </html>
  `);
});

app.listen(3000);
