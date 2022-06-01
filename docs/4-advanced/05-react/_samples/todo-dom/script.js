const todoContainer = document.getElementById("todos");
const messageInput = document.getElementById("message");
const addTodoButton = document.getElementById("add-todo");

addTodoButton.onclick = () => {
  const message = messageInput.value;
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = message;
  li.appendChild(span);
  const removeTodoButton = document.createElement("button");
  removeTodoButton.type = "button";
  removeTodoButton.textContent = "削除";
  removeTodoButton.onclick = () => {
    todoContainer.removeChild(li);
  };
  li.appendChild(removeTodoButton);
  todoContainer.appendChild(li);
};
