const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("static"));

const restaurants = [];

app.get("/restaurants", (request, response) => {
  response.json(restaurants);
});

app.post("/register", (request, response) => {
  restaurants.push({
    name: request.body.name,
    totalRating: 0,
    numRatings: 0,
    averageRating: 0,
  });
  response.end();
});

app.post("/rate", (request, response) => {
  const index = request.body.index;
  restaurants[index].totalRating += Number(request.body.rating); // 文字列を数値に変換
  restaurants[index].numRatings += 1;

  if (restaurants[index].numRatings !== 0) {
    // 評価者が 0 人でないときは、平均点を計算
    restaurants[index].averageRating =
      restaurants[index].totalRating / restaurants[index].numRatings;
  } else {
    // 評価者が 0 人のときは、平均点は 0（ゼロ除算を防ぐため）
    restaurants[index].averageRating = 0;
  }
  response.end();
});

app.listen(3000);
