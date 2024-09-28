import express from "express";
const app = express();

app.use(express.json());
app.use(express.static("./public"));

const messages = [];

app.get("/messages", (request, response) => {
  response.json(messages);
});

app.post("/send", (request, response) => {
  messages.push(request.body.message);
  response.send();
});

app.listen(3000);
