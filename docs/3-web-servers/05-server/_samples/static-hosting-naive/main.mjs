import express from "express";
import { readFileSync } from "fs";
const app = express();

app.get("/", (request, response) => {
  response.send(readFileSync("static/index.html", "utf-8"));
});
app.get("/script.js", (request, response) => {
  response.send(readFileSync("static/script.js", "utf-8"));
});
app.get("/sub/", (request, response) => {
  response.send(readFileSync("static/sub/index.html", "utf-8"));
});
app.get("/sub/script.js", (request, response) => {
  response.send(readFileSync("static/sub/script.js", "utf-8"));
});

app.listen(3000);
