import express from "express";
import cookieParser from "cookie-parser";
import fs from "fs";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();

app.get("/", (request, response) => {
  const index = fs.readFileSync("index.html", "utf-8");
  const html = index.replace("{message}", "");
  response.send(html);
});

app.post("/login", async (request, response) => {
  const login = fs.readFileSync("login.html", "utf-8");
  const index = fs.readFileSync("index.html", "utf-8");
  const user = await client.User.findUnique({
    where: {
      username: request.body.username,
    },
  });
  if (user === undefined) {
    const html = index.replace(
      "{message}",
      "入力されたユーザー名は存在しません。",
    );
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
    const html = login.replace("{username}", prof.username);
    response.send(html);
  } else {
    const html = index.replace("{message}", "パスワードが違います。");
    response.send(html);
  }
});

app.get("/profile", async (request, response) => {
  const profile = fs.readFileSync("profile.html", "utf-8");
  const prof = await client.Profile.findUnique({
    where: { id: request.cookies.session },
  });
  const html = profile
    .replace("{name}", prof.name)
    .replace("{age}", prof.age)
    .replace("{univ}", prof.univ);
  response.send(html);
});

app.get("/register", (request, response) => {
  const register = fs.readFileSync("register.html", "utf-8");
  const html = register.replace("{message}", "");
  response.send(html);
});

app.post("/registered", async (request, response) => {
  const index = fs.readFileSync("index.html", "utf-8");
  const register = fs.readFileSync("register.html", "utf-8");
  const user = await client.User.findUnique({
    where: {
      username: request.body.username,
    },
  });
  if (
    request.body.username === "" ||
    request.body.password === "" ||
    request.body.name === "" ||
    request.body.age === "" ||
    request.body.univ === ""
  ) {
    const html = register.replace("{message}", "未記入の項目があります。");
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
    const html = index.replace("{message}", "登録が完了しました。");
    response.send(html);
  } else {
    const html = register.replace(
      "{message}",
      "入力されたユーザー名はすでに使用されています。別のユーザー名を入力してください。",
    );
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
