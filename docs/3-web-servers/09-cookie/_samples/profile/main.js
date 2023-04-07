const express = require("express");
const cookieParser = require("cookie-parser");
const fs = require("fs");
const ejs = require("ejs");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const { PrismaClient } = require("@prisma/client");
const client = new PrismaClient();

app.get("/", (request, response) => {
  const index = fs.readFileSync("index.ejs", "utf-8");
  const html = ejs.render(index, {
    warning: "",
  });
  response.send(html);
});

app.post("/login", async (request, response) => {
  const login = fs.readFileSync("login.ejs", "utf-8");
  const index = fs.readFileSync("index.ejs", "utf-8");
  const user = await client.User.findUnique({
    where: {
      username: request.body.username,
    },
  });
  if (user === undefined) {
    const html = ejs.render(index, {
      warning: "入力されたユーザー名は存在しません。",
    });
    response.send(html);
  } else if (user.password === request.body.password) {
    const sessionId = await client.Session.findFirst({
      where: {
        userId: user.id,
      },
    });
    const prof = await client.Profile.findUnique({
      where: { id: sessionId.id },
    });
    response.cookie("session", sessionId.id);
    const html = ejs.render(login, {
      username: prof.name,
    });
    response.send(html);
  } else {
    const html = ejs.render(index, {
      warning: "パスワードが違います。",
    });
    response.send(html);
  }
});

app.get("/profile", async (request, response) => {
  const profile = fs.readFileSync("profile.ejs", "utf-8");
  const prof = await client.Profile.findUnique({
    where: { id: request.cookies.session },
  });
  const html = ejs.render(profile, {
    name: prof.name,
    age: prof.age,
    univ: prof.univ,
  });
  response.send(html);
});

app.get("/resister", (request, response) => {
  const resister = fs.readFileSync("resister.ejs", "utf-8");
  const html = ejs.render(resister, {
    warning: "",
  });
  response.send(html);
});

app.post("/resistered", async (request, response) => {
  const index = fs.readFileSync("index.ejs", "utf-8");
  const resister = fs.readFileSync("resister.ejs", "utf-8");
  const user = await client.User.findUnique({
    where: {
      username: request.body.username,
    },
  });
  if (
    (request.body.username === "") |
    (request.body.password === "") |
    (request.body.name === "") |
    (request.body.age === "") |
    (request.body.univ === "")
  ) {
    const html = ejs.render(resister, {
      warning: "未記入の項目があります。",
    });
    response.send(html);
  } else if (user === undefined) {
    const new_user = await client.User.create({
      data: {
        username: request.body.username,
        password: request.body.password,
      },
    });
    const session = await client.Session.create({
      data: {
        id: randomStr(10),
        userId: new_user.id,
      },
    });
    await client.Profile.create({
      data: {
        id: session.id,
        name: request.body.name,
        age: request.body.age,
        univ: request.body.univ,
      },
    });
    const html = ejs.render(index, {
      warning: "登録が完了しました。",
    });
    response.send(html);
  } else {
    const html = ejs.render(resister, {
      warning:
        "入力されたユーザー名はすでに使用されています。別のユーザー名を入力してください。",
    });
    response.send(html);
  }
});

app.listen(4000);

function randomStr(len) {
  const str = "abcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < len; i++) {
    result += str[Math.floor(Math.random() * str.length)];
  }
  return result;
}
