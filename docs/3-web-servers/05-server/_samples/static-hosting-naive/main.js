import express from "express";
import { readFileSync } from "node:fs";
const app = express();

app.get("/", (request, response) => {
  response.send(readFileSync("./public/index.html", "utf-8"));
});
app.get("/script.js", (request, response) => {
  response.send(readFileSync("./public/script.js", "utf-8"));
});
app.get("/sub/", (request, response) => {
  response.send(readFileSync("./public/sub/index.html", "utf-8"));
});
app.get("/sub/script.js", (request, response) => {
  response.send(readFileSync("./public/sub/script.js", "utf-8"));
});

app.listen(3000);
