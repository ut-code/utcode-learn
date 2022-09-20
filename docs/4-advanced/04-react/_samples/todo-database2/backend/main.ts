import express from "express";
import cors from "cors";
const app = express();
import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();

app.use(cors());
app.use(express.json());

app.get("/todos", async (request, response) => {
  const todos = await client.todo.findMany();
  response.json(todos);
});

app.post("/send", async (request, response) => {
  await client.todo.deleteMany();
  await client.todo.createMany({ data: request.body });
});

app.listen(3000);
