const express = require("express");
const fs = require("fs");
const ejs = require("ejs");

const app = express();

app.use(express.urlencoded({ extended: true }));

const messages = [];
app.get("/", (request, response) => {
    const template = fs.readFileSync("template.ejs", "utf-8");
    const html = ejs.render(template, {
        messages: messages
    });
    response.send(html);
});

app.post("/send", (request, response) => {
    messages.push(request.body.message);
    response.send("投稿しました。");
});

app.listen(3000);
