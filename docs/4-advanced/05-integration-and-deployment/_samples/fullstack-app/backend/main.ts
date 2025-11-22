import express from "express";
import cors from "cors";
import { PrismaClient } from "./generated/prisma/client.js";

const app = express();
const client = new PrismaClient();
app.use(express.json());
app.use(cors({ origin: process.env.WEB_ORIGIN }));

app.get("/posts", async (request, response) => {
  const posts = await client.post.findMany();
  response.json(posts);
});

app.post("/send", async (request, response) => {
  await client.post.create({ data: { message: request.body.message } });
  response.send();
});

app.listen(3000);
