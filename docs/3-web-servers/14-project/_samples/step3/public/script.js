// 日時をフォーマット
function formatDateTime(isoString) {
  if (!isoString) return "";
  const date = new Date(isoString);
  return date.toLocaleString("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}

// タスク一覧を取得して表示
async function loadTodos() {
  const response = await fetch("/todos");
  const todos = await response.json();

  const todoList = document.getElementById("todo-list");
  todoList.innerHTML = "";

  for (const todo of todos) {
    const li = document.createElement("li");

    const infoDiv = document.createElement("div");
    infoDiv.className = "todo-info";

    const titleSpan = document.createElement("span");
    titleSpan.className = "todo-title";
    titleSpan.textContent = todo.title;
    infoDiv.appendChild(titleSpan);

    if (todo.due_at) {
      const timeSpan = document.createElement("span");
      timeSpan.className = "todo-time";
      timeSpan.textContent = formatDateTime(todo.due_at);
      infoDiv.appendChild(timeSpan);
    }

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "削除";
    deleteButton.className = "delete-button";
    deleteButton.onclick = async () => {
      await fetch(`/todos/${todo.id}`, { method: "DELETE" });
      loadTodos();
    };

    li.appendChild(infoDiv);
    li.appendChild(deleteButton);
    todoList.appendChild(li);
  }
}

// ステータス表示
function setStatus(message) {
  document.getElementById("status").textContent = message;
}

// 自然言語でタスクを追加
async function parseAndAddTodo(text) {
  if (text.trim() === "") return;

  setStatus("AIで解析中...");

  await fetch("/todos/ai", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });

  setStatus("");
  document.getElementById("task-input").value = "";
  loadTodos();
}

// 追加ボタン
document.getElementById("add-button").onclick = async () => {
  const input = document.getElementById("task-input");
  await parseAndAddTodo(input.value);
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

recognition.onresult = async (event) => {
  const transcript = event.results[0][0].transcript;
  voiceButton.textContent = "音声入力";
  voiceButton.classList.remove("recording");
  document.getElementById("task-input").value = transcript;
  await parseAndAddTodo(transcript);
};

recognition.onend = () => {
  voiceButton.textContent = "音声入力";
  voiceButton.classList.remove("recording");
};

// ページ読み込み時にタスク一覧を取得
loadTodos();
