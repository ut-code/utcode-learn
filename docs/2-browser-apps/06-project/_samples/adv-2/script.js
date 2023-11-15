class TodoItem {
  text;

  li;
  span;
  input;
  editButton;
  confirmButton;
  deleteButton;

  constructor(text) {
    this.text = text;
    this.li = document.createElement("li");
    this.span = document.createElement("span");
    this.input = document.createElement("input");
    this.editButton = document.createElement("button");
    this.confirmButton = document.createElement("button");
    this.deleteButton = document.createElement("button");

    this.span.textContent = text;
    this.input.value = text;
    this.editButton.textContent = "編集";
    this.confirmButton.textContent = "完了";
    this.deleteButton.textContent = "削除";

    this.editButton.onclick = () => this.startEdit();
    this.confirmButton.onclick = () => this.endEdit();
    this.deleteButton.onclick = () => this.deleteSelf();

    this.input.oninput = () => this.validateConfirmButton();

    // 6.
    this.input.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === "Escape") this.endEdit();
    });
    this.li.appendChild(this.span);
    this.li.appendChild(this.editButton);
    this.li.appendChild(this.deleteButton);
  }

  startEdit() {
    // 8.
    if (editingTodo !== null) editingTodo.endEdit();
    this.li.removeChild(this.span);
    this.li.removeChild(this.editButton);
    this.li.removeChild(this.deleteButton);
    this.li.appendChild(this.input);
    this.li.appendChild(this.confirmButton);
    this.input.value = this.text;

    // 8.
    editingTodo = this;

    // 7.
    this.input.focus();
  }
  endEdit() {
    // 5.
    this.text = this.input.value.trim();
    this.li.removeChild(this.input);
    this.li.removeChild(this.confirmButton);
    this.li.appendChild(this.span);
    this.li.appendChild(this.editButton);
    this.li.appendChild(this.deleteButton);
    this.span.textContent = this.text;

    // 8.
    editingTodo = null;
  }
  deleteSelf() {
    todoList.removeChild(this.li);
  }
  validateConfirmButton() {
    // 5.
    this.confirmButton.disabled = this.input.value.trim() === "";
  }
}

const todoList = document.getElementById("todo-list");
const todoInput = document.getElementById("todo-input");
const addButton = document.getElementById("add-button");

// 8.
let editingTodo = null;

todoInput.oninput = () => (addButton.disabled = todoInput.value === "");

// 6.
todoInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addButton.click();
  }
});
addButton.onclick = () => {
  // 5、6
  if (todoInput.value.trim() === "") return; // addButton が disabled でも Enter キーで入力できる

  // 5.
  const todoItem = new TodoItem(todoInput.value.trim());
  todoList.appendChild(todoItem.li);
  todoInput.value = "";
};