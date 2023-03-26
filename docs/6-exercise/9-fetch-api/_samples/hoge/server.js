const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("static"));

const restaurants = [];

app.get("/restaurants", (request, response) => {
  response.json(restaurants);
});

app.post("/register", (request, response) => {
  restaurants.push({ name: request.body.name, sum: 0, people: 0, average: 0 });
  response.end();
});

app.post("/rate", (request, response) => {
  // class 作る？
  const index = request.body.index;
  restaurants[index].sum += Number(request.body.points);
  restaurants[index].people += 1;
  if (restaurants[index].people == 0) {
    restaurants[index].average = 0;
  } else {
    restaurants[index].average =
      restaurants[index].sum / restaurants[index].people;
  }
  response.end();
});

app.listen(3000);
