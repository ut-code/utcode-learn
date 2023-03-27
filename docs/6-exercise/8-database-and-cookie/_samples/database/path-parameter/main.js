const fs = require("fs");
const express = require("express");
const ejs = require("ejs");
const { PrismaClient } = require("@prisma/client");

const app = express();
const client = new PrismaClient();

app.use(express.urlencoded({ extended: true }));

app.get("/", async (request, response) => {
  const teachers = await client.teacher.findMany();
  const template = fs.readFileSync("./index.ejs", { encoding: "utf-8" });
  const html = ejs.render(template, { teachers: teachers });
  response.send(html);
});

app.get("/:teacherId/courses", async (request, response) => {
  const teacherId = request.params.teacherId
  const courses = await client.course.findMany({
    where: { teacherId: parseInt(teacherId) },
  });
  const template = fs.readFileSync("./courses.ejs", { encoding: "utf-8" });
  const html = ejs.render(template, { courses: courses, teacherId: teacherId });
  response.send(html);
});

app.post("/:teacherId/courses/add-course", async (request, response) => {
  const newCourse = request.body.newCourse;
  const teacherId = parseInt(request.params.teacherId);
  const hasTest = request.body.hasTest;
  const description = request.body.description;
  await client.course.create({
    data: {
      name: newCourse,
      hasTest: hasTest,
      description: description,
      teacherId: teacherId,
    },
  });
  response.send("送信しました");
});

app.post("/add-teacher", async (request, response) => {
  const teacherName = request.body.teacherName;
  await client.teacher.create({
    data: {
      name: teacherName,
    },
  });
  response.send("送信しました");
});

app.listen(3000);
