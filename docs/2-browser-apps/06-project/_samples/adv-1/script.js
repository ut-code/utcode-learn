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

    this.li.appendChild(this.span);
    this.li.appendChild(this.editButton);
    this.li.appendChild(this.deleteButton);
  }

  startEdit() {
    this.li.removeChild(this.span);
    this.li.removeChild(this.editButton);
    this.li.removeChild(this.deleteButton);
    this.li.appendChild(this.input);
    this.li.appendChild(this.confirmButton);
    this.input.value = this.text;
  }
  endEdit() {
    this.text = this.input.value;
    this.li.removeChild(this.input);
    this.li.removeChild(this.confirmButton);
    this.li.appendChild(this.span);
    this.li.appendChild(this.editButton);
    this.li.appendChild(this.deleteButton);
    this.span.textContent = this.text;
  }
  deleteSelf() {
    todoList.removeChild(this.li);
  }
  validateConfirmButton() {
    this.confirmButton.disabled = this.input.value === "";
  }
}

const todoList = document.getElementById("todo-list");
const todoInput = document.getElementById("todo-input");
const addButton = document.getElementById("add-button");

todoInput.oninput = () => (addButton.disabled = todoInput.value === "");

addButton.onclick = () => {
  const todoItem = new TodoItem(todoInput.value);
  todoList.appendChild(todoItem.li);
  todoInput.value = "";
};