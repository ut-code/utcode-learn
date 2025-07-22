import express from "express";

const app = express();
app.use(express.static("./public"));
app.get("/exchange-rate", (request, response) => {
  const rate = 140 + Math.random() * 20;
  response.send(rate);
});
app.listen(3000);
