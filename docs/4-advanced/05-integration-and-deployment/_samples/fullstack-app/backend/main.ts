import express from "express";
import cors from "cors";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "./generated/prisma/client.js";

const app = express();

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});
const client = new PrismaClient({ adapter });

app.use(express.json());
app.use(cors({ origin: process.env.WEB_ORIGIN }));

app.get("/posts", async (request, response) => {
  const posts = await client.post.findMany();
  response.json(posts);
});

app.post("/posts", async (request, response) => {
  await client.post.create({ data: { message: request.body.message } });
  response.sendStatus(201); // Created（新しいメッセージを作成）
});

app.listen(3000);
