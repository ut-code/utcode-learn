const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("static"));

app.post("/send", (request, response) => {
  response.send(
    `あなたの名前は ${request.body.name}で、${request.body.age}歳ですね。`
  );
});

app.listen(3000);
