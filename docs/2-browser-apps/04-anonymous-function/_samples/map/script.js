const students = ["Scarlett", "Hazel", "Daisy", "Dorian"];

const listContainer = document.getElementById("list-container");
listContainer.innerHTML = students.map((student) => `<li>${student}</li>`).join("");