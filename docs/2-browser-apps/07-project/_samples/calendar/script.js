const days = ["日", "月", "火", "水", "木", "金", "土"];
const today = new Date();
const year = today.getFullYear();
const month = today.getMonth();
const startDate = new Date(year, month, 1);
const endDate = new Date(year, month + 1, 0);
const calendar = document.getElementById("calendar");
const button = document.getElementById("button");

// 編集中の予定を追うための変数
let editedLi = null;

// 各日付の要素を格納するオブジェクト
const container = {};

// 曜日の行を作成
const firstRow = document.createElement("tr");
for (let i = 0; i < 7; i += 1) {
  const th = document.createElement("th");
  th.textContent = days[i];
  firstRow.appendChild(th);
}

// 曜日の行を追加
calendar.appendChild(firstRow);

// 日付の行を作成
for (let x = 1; x <= 6; x += 1) {
  const tr = document.createElement("tr");
  calendar.appendChild(tr);
  for (let y = 1; y <= 7; y += 1) {
    const td = document.createElement("td");
    const ul = document.createElement("ul");
    const divForDate = document.createElement("div");
    divForDate.className = "date";
    td.appendChild(divForDate);
    td.appendChild(ul);
    container[`${y + 7 * (x - 1)}`] = td;
    tr.appendChild(td);
  }
}

for (let i = 1; i <= 42; i += 1) {
  if (
    i >= startDate.getDay() + 1 &&
    i <= startDate.getDay() + endDate.getDate()
  ) {
    container[`${String(i)}`].firstChild.textContent = `${
      i - startDate.getDay()
    }`;
  }
}

// 予定を追加する関数
function addTask(e) {
  const li = document.createElement("li");
  const input = document.createElement("input");
  li.appendChild(input);
  input.addEventListener("keypress", fixTask);
  e.target.lastChild.appendChild(li);
  editedLi = li;
}

// 予定を固定する関数
function fixTask(e) {
  if (e.keyCode === 13) {
    const input = editedLi.firstChild;
    if (input.value !== "") {
      const div = document.createElement("div");
      div.textContent = input.value;
      div.class = "task";
      editedLi.replaceChild(div, input);
    } else {
      e.target.removeChild(editedLi);
    }
    button.style.visibility = "hidden";
    editedLi = null;
  }
}

// 予定を編集できるようにする関数
function editTask(e) {
  editedLi = e.target.parentNode;
  const input = document.createElement("input");
  input.value = e.target.textContent;
  input.addEventListener("keypress", fixTask);
  editedLi.replaceChild(input, editedLi.firstChild);
}

// 予定を消す関数
function deleteTask() {
  editedLi.remove();
  button.style.visibility = "hidden";
  editedLi = null;
}

// クリックしたときに実行される関数

function clicked(e) {
  // 予定を編集していないとき

  if (editedLi === null) {
    if (e.target.class === "task") {
      button.style.visibility = "visible";
      editTask(e);
    } else if (
      e.target.tagName === "TD" &&
      e.target.firstChild.textContent !== ""
    ) {
      button.style.visibility = "visible";
      addTask(e);
    }
  }
  // 予定を編集中の時
  else {
    if (e.target.tagName !== "INPUT" && e.target.tagName !== "BUTTON") {
      button.style.visibility = "hidden";
      const input = editedLi.firstChild;
      if (editedLi.firstChild.value !== "") {
        const div = document.createElement("div");
        div.textContent = input.value;
        div.class = "task";
        editedLi.replaceChild(div, input);
      } else {
        editedLi.remove();
      }
      editedLi = null;
    }
  }
}

window.onclick = clicked;
button.onclick = deleteTask;
