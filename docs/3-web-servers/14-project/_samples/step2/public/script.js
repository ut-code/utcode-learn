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

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "削除";
    deleteButton.className = "delete-button";
    deleteButton.onclick = async () => {
      await fetch(`/todos/${todo.id}`, { method: "DELETE" });
      loadTodos();
    };

    li.appendChild(titleSpan);
    li.appendChild(deleteButton);
    todoList.appendChild(li);
  }
}

// タスクを追加
document.getElementById("add-button").onclick = async () => {
  const input = document.getElementById("task-input");
  const title = input.value.trim();

  if (title === "") return;

  await fetch("/todos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title }),
  });

  input.value = "";
  loadTodos();
};

// 音声認識の設定
const recognition = new SpeechRecognition();
recognition.lang = "ja-JP";

const voiceButton = document.getElementById("voice-button");

voiceButton.onclick = () => {
  recognition.start();
  voiceButton.textContent = "録音中...";
  voiceButton.classList.add("recording");
};

recognition.onresult = (event) => {
  const transcript = event.results[0][0].transcript;
  document.getElementById("task-input").value = transcript;
  voiceButton.textContent = "音声入力";
  voiceButton.classList.remove("recording");
};

recognition.onend = () => {
  voiceButton.textContent = "音声入力";
  voiceButton.classList.remove("recording");
};

// ページ読み込み時にタスク一覧を取得
loadTodos();
