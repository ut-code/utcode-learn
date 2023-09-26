const students = ["Scarlett", "Hazel", "Daisy", "Dorian"];

const studentList = document.getElementById("student-list");
studentList.innerHTML = students
  .map((student) => `<li>${student}</li>`)
  .join("");
