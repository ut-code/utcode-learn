import express from "express";

const app = express();
app.get("/", (request, response) => {
  response.send(JSON.stringify(request.query));
});
app.listen(3000);
