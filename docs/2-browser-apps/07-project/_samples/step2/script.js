const addButton = document.getElementById("add-button");
const todoList = document.getElementById("todo-list");
const todoInput = document.getElementById("todo-input");

addButton.onclick = () => {
  const inputValue = todoInput.value;
  todoInput.value = "";
  const todoItem = document.createElement("li");
  const todoText = document.createElement("span");
  const deleteButton = document.createElement("button");
  todoText.textContent = inputValue;
  deleteButton.textContent = "削除";
  deleteButton.onclick = () => {
    todoList.removeChild(todoItem);
  };
  todoItem.appendChild(todoText);
  todoItem.appendChild(deleteButton);
  todoList.appendChild(todoItem);
};
