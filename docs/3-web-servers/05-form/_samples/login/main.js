const express = require("express");
const app = express();

app.use(express.static("static"));
app.use(express.urlencoded({ extended: true }));

const PORT = 3000;

const userCredentials = {
  tanaka: "kfae12F@",
  sato: "faewbnpE3b=",
  endo: "fEnEoB131b",
};

app.post("/login", (request, response) => {
  const { username, password } = request.body;

  if (userCredentials[username] === password) {
    response.send("ログインに成功しました。");
  } else {
    response.send("ログインに失敗しました。");
  }
});

app.listen(PORT);
