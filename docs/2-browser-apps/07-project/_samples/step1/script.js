const addButton = document.getElementById("addButton");
const todoList = document.getElementById("todoList");
const todoInput = document.getElementById("todoInput");

addButton.onclick = () => {
  const inputValue = todoInput.value;
  todoInput.value = "";
  const todoItem = document.createElement("li");
  const todoText = document.createElement("span");
  todoText.textContent = inputValue;
  todoItem.appendChild(todoText);
  todoList.appendChild(todoItem);
};
