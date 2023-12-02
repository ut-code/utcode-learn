import express from "express";
const app = express();

app.use(express.static("static"));
app.use(express.urlencoded({ extended: true }));

const PORT = 3000;

const userCredentials = [
  { username: "tanaka", password: "kfae12F@" },
  { username: "sato", password: "faewbnpE3b=" },
  { username: "endo", password: "fEnEoB131b" },
];

app.post("/login", (request, response) => {
  const { username, password } = request.body;

  const user = userCredentials.find(
    (user) => user[0] == username && user[1] == password,
  );
  if (user === undefined) {
    response.send("ログインに失敗しました。");
  } else {
    response.send("ログインに成功しました。");
  }
});

app.listen(PORT);
