const express = require("express");
const fs = require("fs");
const ejs = require("ejs");

app = express();
app.use(express.static("static"));
const books = [
    { title: "吾輩は猫である", author: "夏目漱石" },
    { title: "こころ", author: "夏目漱石" },
    { title: "坊つちやん", author: "夏目漱石" },
    { title: "舞姫", author: "森鴎外" },
    { title: "高瀬舟", author: "森鴎外" },
];
app.get("/search", (request, response) => {
    const foundBooks = books.filter((book) => book.author === request.query.author);
    const template = fs.readFileSync("template.ejs", "utf-8");
    const html = ejs.render(template, {
        books: foundBooks
    });
    response.send(html);
})

app.listen(3000);
