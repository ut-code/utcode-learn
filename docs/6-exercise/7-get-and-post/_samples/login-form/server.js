const express = require("express");

const app = express();

const data = { tanaka: "1234", sato: "9999" };

app.use(express.urlencoded({ extended: true }));
app.use(express.static("static"));

app.post("/user", (request, response) => {
  if (request.body.password === data[request.body.user]) {
    response.send(`ようこそ、${request.body.user}さん！`);
  } else {
    response.send("ユーザが存在しないか、パスワードが間違っています");
  }
});

app.listen(3000);
