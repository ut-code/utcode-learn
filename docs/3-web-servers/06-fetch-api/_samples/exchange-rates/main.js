import express from "express";

const app = express();
app.use(express.static("./public"));

app.get("/exchange-rates", (request, response) => {
  const rates = {
    usdJpy: 140 + Math.random() * 20,
    eurJpy: 150 + Math.random() * 20,
  };
  response.json(rates);
});

app.listen(3000);
