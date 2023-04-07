const { faculties, facultyData } = require("./faculties");
const fs = require("fs");
const http = require("http");
const ejs = require("ejs");
const server = new http.Server();

server.addListener("request", (request, response) => {
  if (request.url === "/") {
    const template = fs.readFileSync("facultyList.ejs", "utf-8");
    const html = ejs.render(template, {
      faculties,
      facultyData,
    });
    response.write(html);
  } else if (faculties.includes(request.url.slice(1))) {
    const template = fs.readFileSync("departmentList.ejs", "utf-8");
    const html = ejs.render(template, {
      facultyData,
      faculty: request.url.slice(1),
    });
    response.write(html);
  }
  response.end();
});

server.listen(3000);
