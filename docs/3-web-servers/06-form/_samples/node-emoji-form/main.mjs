import express from "express";
import { emojify } from "node-emoji";

const app = express();
app.use(express.static("static"));

app.get("/emojify", (request, response) => {
  const text = request.query.text;
  const emojified = emojify(text);
  response.send(emojified);
});

app.listen(3000);
