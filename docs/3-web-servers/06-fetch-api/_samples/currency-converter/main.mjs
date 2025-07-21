import express from "express";
const app = express();

app.use(express.static("./public"));

app.get("/exchange-rate", (request, response) => {
  const rate = (Math.random() * 20 + 140).toFixed(2);
  response.send(rate);
});

app.listen(3000);