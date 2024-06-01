import express from "express";
const app = express();

app.get("/", (request, response) => {
  response.send('<script src="./main.js"></script>');
});
app.get("/main.js", (request, response) => {
  response.send('document.write("Hello World");');
});

app.listen(3000);
