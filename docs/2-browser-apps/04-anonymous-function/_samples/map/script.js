const students = ["Hazel", "Dorian", "Scarlett", "Daisy"];

const studentList = document.getElementById("student-list");
studentList.innerHTML = students
  .map((student) => `<li>${student}</li>`)
  .join("");
