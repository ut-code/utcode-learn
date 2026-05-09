import "dotenv/config";
import express from "express";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "./generated/prisma/client.ts";

const app = express();
const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter: adapter });

app.use(express.json());
app.use(express.static("./public"));

app.get("/posts", async (request, response) => {
  const posts = await prisma.post.findMany();
  response.json(posts);
});

app.post("/posts", async (request, response) => {
  await prisma.post.create({ data: { message: request.body.message } });
  response.sendStatus(201); // Created（新しいメッセージを作成）
});

app.listen(3000);
