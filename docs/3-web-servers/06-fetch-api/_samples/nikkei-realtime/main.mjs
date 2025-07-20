import express from "express";
const app = express();

app.use(express.static("./public"));

app.get("/nikkei", (request, response) => {
  const nikkei = Math.floor(Math.random() * 20000) + 20000;
  response.send(`${nikkei}`);
});

app.listen(3000);