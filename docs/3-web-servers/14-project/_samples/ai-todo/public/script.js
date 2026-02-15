const titleInput = document.getElementById("title-input");
const dueAtInput = document.getElementById("due-at-input");
const addButton = document.getElementById("add-button");
const instructionInput = document.getElementById("instruction-input");
const aiButton = document.getElementById("ai-button");
const todoList = document.getElementById("todo-list");

loadTodos();

addButton.onclick = async () => {
  await fetch("/todos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: titleInput.value, dueAt: dueAtInput.value }),
  });
  titleInput.value = "";
  dueAtInput.value = "";
  loadTodos();
};

aiButton.onclick = async () => {
  await fetch("/todos/ai", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ instruction: instructionInput.value }),
  });
  instructionInput.value = "";
  loadTodos();
};

async function loadTodos() {
  const response = await fetch("/todos");
  const todos = await response.json();

  todoList.innerHTML = "";

  for (const todo of todos) {
    const todoListItem = document.createElement("li");

    const titleDiv = document.createElement("div");
    titleDiv.textContent = todo.title;
    todoListItem.appendChild(titleDiv);

    if (todo.dueAt) {
      const dueAtDiv = document.createElement("div");
      dueAtDiv.textContent = new Date(todo.dueAt).toLocaleString();
      todoListItem.appendChild(dueAtDiv);
    }

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "削除";
    deleteButton.onclick = async () => {
      await fetch(`/todos/${todo.id}`, { method: "DELETE" });
      loadTodos();
    };
    todoListItem.appendChild(deleteButton);

    todoList.appendChild(todoListItem);
  }
}
