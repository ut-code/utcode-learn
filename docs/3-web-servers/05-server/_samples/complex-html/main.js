import express from "express";
const app = express();

const names = ["田中", "鈴木", "佐藤"];
app.get("/", (request, response) => {
  response.send(`
    <!doctype html>
      <html lang="ja">
      <head>
        <meta charset="utf-8" />
        <title>Title</title>
      </head>
      <body>
        <ul>
          ${names.map((name) => `<li>${name}</li>`).join("")}
        </ul>
      </body>
    </html>
  `);
});

app.listen(3000);
