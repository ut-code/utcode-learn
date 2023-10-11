const express = require("express");
const fs = require("fs");
const ejs = require("ejs");
const { PrismaClient } = require("@prisma/client");

const app = express();

app.use(express.urlencoded({ extended: true }));

const client = new PrismaClient();

app.get("/", async (request, response) => {
  const messages = await (
    await client.forum.findMany()
  ).map((data) => data.message);
  const template = fs.readFileSync("template.ejs", "utf-8");
  const html = ejs.render(template, {
    messages: messages,
  });
  response.send(html);
});

app.post("/send", async (request, response) => {
  await client.forum.create({ data: { message: request.body.message } });
  response.send("投稿しました。");
});

app.listen(3000);
