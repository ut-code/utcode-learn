import express from "express";
import cookieParser from "cookie-parser";
import { PrismaClient } from "./generated/prisma/index.js";

const app = express();
const prismaClient = new PrismaClient();

app.use(express.json());
app.use(cookieParser());
app.use(express.static("./public"));

app.post("/login", async (request, response) => {
  if (!request.body.username || !request.body.password) {
    response.sendStatus(400); // Bad Request (リクエストの形式が不正)
    return;
  }
  const user = await prismaClient.user.findUnique({
    where: { username: request.body.username },
  });
  if (!user || user.password !== request.body.password) {
    response.sendStatus(401); // Unauthorized (認証に失敗)
    return;
  }

  const session = await prismaClient.session.create({
    data: { userId: user.id, sessionId: crypto.randomUUID() },
  });
  response.cookie("sessionId", session.sessionId);
  response.sendStatus(200); // OK (成功)
});

app.get("/profile", async (request, response) => {
  // 認証
  if (!request.cookies.sessionId) {
    response.sendStatus(401); // Unauthorized (認証に失敗)
    return;
  }
  const session = await prismaClient.session.findUnique({
    where: { sessionId: request.cookies.sessionId },
  });
  if (!session) {
    response.sendStatus(401); // Unauthorized (認証に失敗)
    return;
  }

  // 実際の処理
  const user = await prismaClient.user.findUnique({
    where: { id: session.userId },
  });
  response.json({ username: user.username });
});

app.listen(3000);
