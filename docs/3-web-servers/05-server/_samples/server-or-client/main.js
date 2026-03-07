import express from "express";
const app = express();

app.get("/", (request, response) => {
  response.send(`
    <!doctype html>
      <html lang="ja">
      <head>
        <meta charset="utf-8" />
        <title>Title</title>
      </head>
      <body>
        ${
          // この部分はサーバーサイドで実行されます
          new Date().toString()
        }
        <script>
          // この部分はクライアントサイドで実行されます
          document.write(new Date().toString());
        </script>
      </body>
    </html>
  `);
});

app.listen(3000);
