import express from "express";
import { readFileSync } from "node:fs";

const app = express();
app.use((request, response) => {
  response.send(readFileSync("./public" + request.path, "utf-8"));
});
app.listen(3000);
