import express from "express";
const app = express();

app.get("/", (request, response) => {
  response.send(`Hello World! <a href="./lang/ja">日本語</a>`);
});
app.get("/lang/ja", (request, response) => {
  response.send("こんにちは、世界！");
});

app.listen(3000);
