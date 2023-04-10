const { faculties, facultyData } = require("./faculties");
const fs = require("fs");
const express = require("express");
const ejs = require("ejs");
const app = express();

app.get("/", (request, response) => {
  const template = fs.readFileSync("facultyList.ejs", "utf-8");
  const html = ejs.render(template, {
    faculties,
    facultyData,
  });
  response.send(html);
});

app.get("/:faculty", (request, response) => {
  const faculty = request.params.faculty;
  if (faculties.includes(faculty)) {
    const template = fs.readFileSync("departmentList.ejs", "utf-8");
    const html = ejs.render(template, {
      facultyData,
      faculty,
    });
    response.send(html);
  }
  response.end();
});

app.listen(3000);
