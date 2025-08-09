import express from "express";

const app = express();
app.use(express.static("./public"));

app.get("/weather", (request, response) => {
  response.json({
    condition: "晴れ",
    temperature: 25,
  });
});

app.listen(3000);
