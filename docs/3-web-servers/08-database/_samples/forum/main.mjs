import { readFileSync } from "node:fs";
import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
app.use(express.urlencoded({ extended: true }));
const client = new PrismaClient();

const template = readFileSync("./template.html", "utf-8");
app.get("/", async (request, response) => {
  const posts = await client.post.findMany();
  const html = template.replace(
    "<!-- messages -->",
    posts.map((post) => `<li>${post.message}</li>`).join(""),
  );
  response.send(html);
});

app.post("/send", async (request, response) => {
  await client.post.create({ data: { message: request.body.message } });
  response.redirect("/");
});

app.listen(3000);
