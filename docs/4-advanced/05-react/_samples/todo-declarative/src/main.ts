const todoContainer = document.getElementById("todos") as HTMLUListElement;
const messageInput = document.getElementById("message") as HTMLInputElement;
const addTodoButton = document.getElementById("add-todo") as HTMLButtonElement;

// アプリケーションの状態を表す型
type State = { todos: string[] };

// アプリケーションの状態
const state: State = { todos: [] };

// アプリケーションの状態を UI に反映させる関数
function render() {
  // 一旦全ての内容を削除
  todoContainer.innerHTML = "";

  for (const [index, todo] of state.todos.entries()) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = todo;
    li.appendChild(span);
    const removeTodoButton = document.createElement("button");
    removeTodoButton.type = "button";
    removeTodoButton.textContent = "削除";
    removeTodoButton.onclick = () => {
      removeTodo(index);
    };
    li.appendChild(removeTodoButton);
    todoContainer.appendChild(li);
  }
}

// 状態を変化させる関数
function addTodo(todo: string) {
  state.todos.push(todo);
  render();
}
function removeTodo(index: number) {
  state.todos.splice(index, 1);
  render();
}

addTodoButton.onclick = () => {
  addTodo(messageInput.value);
};
