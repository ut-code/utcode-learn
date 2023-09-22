const express = require("express");

const app = express();
app.use(express.static("static"));
app.get("/send", (request, response) => {
  response.send(
    `あなたの名前は${request.query.name}で、${request.query.age}歳ですね。`,
  );
});
app.listen(3000);
