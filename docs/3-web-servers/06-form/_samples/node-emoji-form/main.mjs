import express from "express";
import { emojify } from "node-emoji";

const app = express();
app.use(express.static("./public"));

app.get("/emojify", (request, response) => {
  const text = request.query.text;
  const emojifiedText = emojify(text);
  response.send(emojifiedText);
});

app.listen(3000);
