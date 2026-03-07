import express from "express";
import { drizzle } from "drizzle-orm/node-postgres";
import { posts } from "./schema.mjs";

const db = drizzle(process.env.DATABASE_URL);
const app = express();
app.use(express.json());
app.use(express.static("./public"));

app.get("/posts", async (request, response) => {
  const allPosts = await db.select().from(posts);
  response.json(allPosts);
});

app.post("/posts", async (request, response) => {
  await db.insert(posts).values({ message: request.body.message });
  response.sendStatus(201);
});

app.listen(3000);
