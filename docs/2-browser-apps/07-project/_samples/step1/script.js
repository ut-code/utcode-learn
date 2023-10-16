const addButton = document.getElementById("add-button");
const todoList = document.getElementById("todo-list");
const todoInput = document.getElementById("todo-input");

addButton.onclick = () => {
  const inputValue = todoInput.value;
  todoInput.value = "";
  const todoItem = document.createElement("li");
  const todoText = document.createElement("span");
  todoText.textContent = inputValue;
  todoItem.appendChild(todoText);
  todoList.appendChild(todoItem);
};
