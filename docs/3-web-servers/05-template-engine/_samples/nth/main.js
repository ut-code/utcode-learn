const express = require("express");
const app = express();

let count = 0;
app.get("/", (request, response) => {
    count += 1;
    response.send(`あなたは${count}人目のお客様です。`);
});

app.listen(3000);
