import express from "express";
import { PrismaClient } from "@prisma/client";
import { readFileSync } from "node:fs";

const app = express();

app.use(express.urlencoded({ extended: true }));

const client = new PrismaClient();

app.get("/", async (request, response) => {
  const messages = await (
    await client.forum.findMany()
  ).map((data) => data.message);
  const template = readFileSync("./index.html", "utf-8");
  const html = template.replace(
    "<!-- messages -->",
    messages.map((message) => `<li>${message}</li>`).join(""),
  );
  response.send(html);
});

app.post("/send", async (request, response) => {
  await client.forum.create({ data: { message: request.body.message } });
  response.send("投稿しました。");
});

app.listen(3000);
