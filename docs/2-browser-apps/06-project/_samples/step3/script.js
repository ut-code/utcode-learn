const todoList = document.getElementById("todo-list");
const todoInput = document.getElementById("todo-input");
const addButton = document.getElementById("add-button");

addButton.onclick = () => {
  const todoItem = document.createElement("li");
  const todoText = document.createElement("span");
  const editButton = document.createElement("button");
  const deleteButton = document.createElement("button");
  todoText.textContent = todoInput.value;
  todoInput.value = "";
  editButton.textContent = "編集";
  editButton.onclick = () => {
    const input = document.createElement("input");
    const confirmButton = document.createElement("button");
    input.value = todoText.textContent;
    confirmButton.textContent = "確定";
    confirmButton.onclick = () => {
      todoText.textContent = input.value;
      todoItem.replaceChild(todoText, input);
      todoItem.replaceChild(editButton, confirmButton);
    };
    todoItem.replaceChild(input, todoText);
    todoItem.replaceChild(confirmButton, editButton);
  };
  deleteButton.textContent = "削除";
  deleteButton.onclick = () => {
    todoList.removeChild(todoItem);
  };
  todoItem.appendChild(todoText);
  todoItem.appendChild(editButton);
  todoItem.appendChild(deleteButton);
  todoList.appendChild(todoItem);
};
