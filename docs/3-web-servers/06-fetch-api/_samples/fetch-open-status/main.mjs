import express from "express";

const app = express();
app.use(express.static("./public"));

app.get("/open-status", (request, response) => {
  response.send("営業中");
});

app.listen(3000);
