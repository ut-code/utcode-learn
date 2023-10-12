const express = require("express");
const app = express();

app.use(express.static("static"));
app.use(express.urlencoded({ extended: true }));

const PORT = 3001;

const userCredentials = {
  user1: "test1",
  user2: "test2",
  user3: "test3",
};

app.post("/login", (request, response) => {
  const { username, password } = request.body;

  if (userCredentials[username] === password) {
    response.send("ログイン！");
  } else {
    response.send("ユーザーではありません。");
  }
});

app.listen(PORT);
