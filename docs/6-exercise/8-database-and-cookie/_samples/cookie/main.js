const fs = require("fs");
const ejs = require("ejs");
const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
app.use(cookieParser());

const items = ["car", "ring", "shrimp"];

app.get("/", (request, response) => {
  let recommended;
  const carPreference = parseInt(request.cookies.carPreference) || 0;
  const ringPreference = parseInt(request.cookies.ringPreference) || 0;
  const shrimpPreference = parseInt(request.cookies.shrimpPreference) || 0;
  const favorite = Math.max(carPreference, ringPreference, shrimpPreference);
  if (
    (carPreference === ringPreference && carPreference === favorite) ||
    (ringPreference === shrimpPreference && ringPreference === favorite) ||
    (shrimpPreference === carPreference && shrimpPreference === favorite) ||
    favorite === 0
  ) {
    recommended = null;
  } else if (carPreference === favorite) {
    recommended = "車";
  } else if (ringPreference === favorite) {
    recommended = "指輪";
  } else {
    recommended = "エビ";
  }
  const template = fs.readFileSync("./index.ejs", { encoding: "utf-8" });
  const html = ejs.render(template, { items: items, recommended: recommended });
  response.send(html);
});

app.get("/car", (request, response) => {
  const carPreference = Number(request.cookies.carPreference) || 0;
  const newCarPreference = carPreference + 1;
  response.cookie("carPreference", newCarPreference.toString());
  response.send("車を買いました");
});

app.get("/ring", (request, response) => {
  const ringPreference = Number(request.cookies.ringPreference) || 0;
  const newRingPreference = ringPreference + 1;
  response.cookie("ringPreference", newRingPreference.toString());
  response.send("指輪を買いました");
});

app.get("/shrimp", (request, response) => {
  const shrimpPreference = Number(request.cookies.shrimpPreference) || 0;
  const newShrimpPreference = shrimpPreference + 1;
  response.cookie("shrimpPreference", newShrimpPreference.toString());
  response.send("エビを買いました");
});

app.listen(3000);
