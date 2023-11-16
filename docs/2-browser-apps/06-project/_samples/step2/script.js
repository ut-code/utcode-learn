const todoList = document.getElementById("todo-list");
const todoInput = document.getElementById("todo-input");
const addButton = document.getElementById("add-button");

addButton.onclick = () => {
  const todoItem = document.createElement("li");
  const todoText = document.createElement("span");
  const deleteButton = document.createElement("button");
  todoText.textContent = todoInput.value;
  todoInput.value = "";
  deleteButton.textContent = "削除";
  deleteButton.onclick = () => {
    todoList.removeChild(todoItem);
  };
  todoItem.appendChild(todoText);
  todoItem.appendChild(deleteButton);
  todoList.appendChild(todoItem);
};
