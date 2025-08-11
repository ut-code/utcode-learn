import express from "express";
import { PrismaClient } from "./generated/prisma/index.js";

const app = express();
const client = new PrismaClient();

app.use(express.json());
app.use(express.static("./public"));

app.post("/login", async (request, response) => {
  const user = await client.user.findUnique({
    where: { username: request.body.username },
  });
  if (!user || user.password !== request.body.password) {
    response.sendStatus(401);
    return;
  }
  response.send(`ようこそ、${user.username}さん！`);
});

app.listen(3000);
