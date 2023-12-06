const todoList = document.getElementById("todo-list");
const todoInput = document.getElementById("todo-input");
const addButton = document.getElementById("add-button");

addButton.onclick = () => {
  const todoItem = document.createElement("li");
  const todoText = document.createElement("span");
  todoText.textContent = todoInput.value;
  todoInput.value = "";
  todoItem.appendChild(todoText);
  todoList.appendChild(todoItem);
};
