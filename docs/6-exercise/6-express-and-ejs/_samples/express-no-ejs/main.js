const { facultyDatas } = require("./faculties");
const express = require("express");
const app = express();

const departments = facultyDatas.engineering.departments;
app.get("/", (request, response) => {
  response.send(
    departments.map((department) => `<li>${department}</li>`).join("")
  );
});

app.listen(3000);
