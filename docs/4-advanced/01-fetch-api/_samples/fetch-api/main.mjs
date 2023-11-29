import express from "express";
const app = express();

app.use(express.static("static"));

app.get("/weather", (request, response) => {
  response.send("晴れ");
});

app.listen(3000);
