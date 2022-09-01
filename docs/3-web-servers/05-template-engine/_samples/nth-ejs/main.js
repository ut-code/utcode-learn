const fs = require("fs");
const express = require("express");
const ejs = require("ejs");
const app = express();

let count = 0;
app.get("/", (request, response) => {
    count += 1;
    const template = fs.readFileSync("template.ejs", "utf-8");
    const html = ejs.render(template, {
        count: count,
    });
    response.send(html);
});

app.listen(3000);
