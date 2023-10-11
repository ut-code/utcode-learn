const { facultyData } = require("./faculties");
const fs = require("fs");
const express = require("express");
const ejs = require("ejs");
const app = express();

app.get("/", (request, response) => {
  const template = fs.readFileSync("template.ejs", "utf-8");
  const html = ejs.render(template, {
    departments: facultyData.engineering.departments,
  });
  response.send(html);
});

app.listen(3000);
