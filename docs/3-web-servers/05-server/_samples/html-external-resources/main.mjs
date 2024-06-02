import express from "express";
const app = express();

app.get("/", (request, response) => {
  response.send(`<script src="./script.js"></script>`);
});
app.get("/script.js", (request, response) => {
  response.send(`document.write("Hello World!");`);
});

app.listen(3000);
