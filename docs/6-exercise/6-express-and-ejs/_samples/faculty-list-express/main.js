const { faculties, facultyDatas } = require("./faculties");
const fs = require("fs");
const express = require("express");
const ejs = require("ejs");
const app = express();

app.use((request, response) => {
  if (request.url === "/") {
    const template = fs.readFileSync("facultyList.ejs", "utf-8");
    const html = ejs.render(template, {
      faculties,
      facultyDatas,
    });
    response.send(html);
  } else if (faculties.includes(request.url.slice(1))) {
    const template = fs.readFileSync("departmentList.ejs", "utf-8");
    const html = ejs.render(template, {
      facultyDatas,
      faculty: request.url.slice(1),
    });
    response.send(html);
  }
  response.end();
});

app.listen(3001);
