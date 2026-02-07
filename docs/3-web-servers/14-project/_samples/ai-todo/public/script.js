// タスク一覧を取得して表示
async function loadTodos() {
  const response = await fetch("/todos");
  const todos = await response.json();

  const todoList = document.getElementById("todo-list");
  todoList.innerHTML = "";

  for (const todo of todos) {
    const li = document.createElement("li");

    const titleSpan = document.createElement("span");
    titleSpan.textContent = todo.title;
    li.appendChild(titleSpan);

    if (todo.dueAt) {
      const timeSpan = document.createElement("span");
      timeSpan.textContent = " (" + todo.dueAt + ")";
      li.appendChild(timeSpan);
    }

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "削除";
    deleteButton.onclick = async () => {
      await fetch("/todos/" + todo.id, { method: "DELETE" });
      loadTodos();
    };

    li.appendChild(deleteButton);
    todoList.appendChild(li);
  }
}

// タスクを追加
document.getElementById("add-button").onclick = async () => {
  const input = document.getElementById("task-input");
  if (input.value === "") return;

  await fetch("/todos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: input.value }),
  });

  input.value = "";
  loadTodos();
};

// AI解析でタスクを追加
document.getElementById("ai-button").onclick = async () => {
  const input = document.getElementById("task-input");
  if (input.value === "") return;

  await fetch("/todos/ai", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: input.value }),
  });

  input.value = "";
  loadTodos();
};

loadTodos();
