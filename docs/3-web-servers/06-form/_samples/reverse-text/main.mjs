import express from "express";

const app = express();
app.use(express.static("./static"));

app.get("/reverse", (request, response) => {
  const text = request.query.textToReverse;
  const reversed = text.split("").reverse().join("");
  response.send(reversed);
});

app.listen(3000);
