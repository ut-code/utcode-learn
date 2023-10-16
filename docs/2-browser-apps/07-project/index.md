---
title: プロジェクト
---

import Details from "@theme/Details"
import Answer from "@site/src/components/Answer"
import Term from "@site/src/components/Term";
import ViewSource from "@site/src/components/ViewSource";
import ExternalVideoPlayer from "@site/src/components/ExternalVideoPlayer";
import todoVideo from "./todo.mp4";

ここまでの知識を使って、シンプルな ToDo アプリを作ってみましょう。

## ルール

- todo の追加ができます。
- todo の削除ができます。
- todo の編集ができます。
- 入力欄が空欄だと todo の追加ができなくなります。

<video src={todoVideo} controls loop autoPlay muted />

## ヒント

いきなり作るのが難しい場合はタスクを分解してみましょう。今回はルールにもあるように

1. todo を追加できるようにする
2. todo を削除できるようにする
3. todo を編集できるようにする
4. 空の todo を追加できないようにする

の4つの仕事があるので、まず 1 からやっていきましょう。

### ステップ 1

- ひとまず todo の一覧、todo の入力欄、todo の追加ボタンが必要です。`ul` 要素と `input` 要素と `button` 要素を使ってみましょう。

```html title=index.html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="utf-8" />
    <title>Title</title>
  </head>
  <body>
    <ul id="todo-list"></ul>
    <input id="todo-input" />
    <button id="add-button">追加</button>
    <script src="./script.js"></script>
  </body>
</html>
```

- 次に JavaScript ファイルを作成して追加ボタンを押したときの処理を記述しましょう。

```javascript title=script.js
const todoList = document.getElementById("todo-list");
const todoInput = document.getElementById("todo-input");
const addButton = document.getElementById("add-button");

addButton.onclick = () => {
  // 追加ボタンを押すとtodoを 1 つ追加する
};
```

- この時リストの項目として新たに `li` 要素を追加する必要がありますが、JavaScript から要素を生成するためには [`document.createElement` 関数](https://developer.mozilla.org/ja/docs/Web/API/Document/createElement) を使うことができます。また、[`Node#appendChild` メソッド](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild) を用いることで要素内に子要素を追加することができます。

```javascript
const li = document.createElement("li");
todoList.appendChild(li);
```

- また、`HTMLInputElement#value` プロパティから入力欄への入力内容を取得できます。

<Details summary='ステップ 1 の解答例'>

```html title=index.html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="utf-8" />
    <title>Title</title>
  </head>
  <body>
    <ul id="todo-list"></ul>
    <input id="todo-input" />
    <button id="add-button">追加</button>
    <script src="./script.js"></script>
  </body>
</html>
```

```javascript title=script.js
const addButton = document.getElementById("add-button");
const todoList = document.getElementById("todo-list");
const todoInput = document.getElementById("todo-input");

addButton.onclick = () => {
  const inputValue = todoInput.value;
  todoInput.value = "";
  const todoItem = document.createElement("li");
  const todoText = document.createElement("span");
  todoText.textContent = inputValue;
  todoItem.appendChild(todoText);
  todoList.appendChild(todoItem);
};
```

<ViewSource url={import.meta.url} path="_samples/step1" />

</Details>

### ステップ 2

- まずは削除ボタンをつける必要があります。[`document.createElement` 関数](https://developer.mozilla.org/ja/docs/Web/API/Document/createElement) で `button` 要素を生成し削除ボタンにしてから [`Node#appendChild` メソッド](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild) で要素内に追加しましょう。

- 削除ボタンを押すと `li` 要素が 1 つ消えて欲しいわけですが、JavaScript においてある要素から子要素を取り除くには [`Node#removeChild` メソッド](https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild) を使うことができます。

```javascript
// todoList から todoItem を取り除く
todoList.removeChild(todoItem);
```

<Details summary='ステップ 2 の解答例'>

```html title=index.html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="utf-8" />
    <title>Title</title>
  </head>
  <body>
    <ul id="todo-list"></ul>
    <input id="todo-input" />
    <button id="add-button">追加</button>
    <script src="./script.js"></script>
  </body>
</html>
```

```javascript title=script.js
const addButton = document.getElementById("add-button");
const todoList = document.getElementById("todo-list");
const todoInput = document.getElementById("todo-input");

addButton.onclick = () => {
  const inputValue = todoInput.value;
  todoInput.value = "";
  const todoItem = document.createElement("li");
  const todoText = document.createElement("span");
  const deleteButton = document.createElement("button");
  todoText.textContent = inputValue;
  deleteButton.textContent = "削除";
  deleteButton.onclick = () => {
    todoList.removeChild(todoItem);
  };
  todoItem.appendChild(todoText);
  todoItem.appendChild(deleteButton);
  todoList.appendChild(todoItem);
};
```

<ViewSource url={import.meta.url} path="_samples/step2" />

</Details>

### ステップ 3

- まずは編集ボタンをつけてみましょう。

- 編集ボタンを押すと todo のテキストが入力欄に、編集ボタンが確定ボタンに入れ替わるわけですが、JavaScript においてある要素の子要素を別の要素に入れ替えるには [`Node#replaceChile` メソッド](https://developer.mozilla.org/ja/docs/Web/API/Node/replaceChild) を使うことができます。

```javascript
const confirmButton = document.createElement("button");
confirmButton.textContent = "確定";
// 編集ボタンを確定ボタンに入れ替え
todoItem.replaceChild(confirmButton, editButton);
```

<Details summary='ステップ 3 の解答例'>

```html title=index.html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="utf-8" />
    <title>Title</title>
  </head>
  <body>
    <ul id="todo-list"></ul>
    <input id="todo-input" />
    <button id="add-button">追加</button>
    <script src="./script.js"></script>
  </body>
</html>
```

```javascript title=script.js
const todoList = document.getElementById("todo-list");
const todoInput = document.getElementById("todo-input");
const addButton = document.getElementById("add-button");

addButton.onclick = () => {
  const inputValue = todoInput.value;
  todoInput.value = "";
  const todoItem = document.createElement("li");
  const todoText = document.createElement("span");
  const editButton = document.createElement("button");
  const deleteButton = document.createElement("button");
  todoText.textContent = inputValue;
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
```

<ViewSource url={import.meta.url} path="_samples/step3" />

</Details>

### ステップ 4

- [`HTMLButtonElement#disabled` プロパティ](https://developer.mozilla.org/en-US/docs/Web/API/HTMLButtonElement/disabled) が `true` の時、ボタンはクリックを受け付けなくなります。入力欄が空の時にこのプロパティを `true` に、それ以外の時は `false` にすることによって空のタスクの追加を防ぐことができます。この時、入力欄に何かキー入力があるたびに入力欄が空かどうかを判定する必要がありますが、[`HTMLElement#oninput` プロパティ](https://html.spec.whatwg.org/multipage/webappapis.html#handler-oninput) にイベントハンドラを登録することでユーザーによって要素が変更されたときに実行される関数を定めることができます。

```javascript
todoInput.oninput = () => {
  // 入力欄が空の時はボタンを押せないようにする
  addButton.disabled = todoInput.value === "";
};
```

## 解答

<Answer>

```html title=index.html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="utf-8" />
    <title>Title</title>
  </head>
  <body>
    <ul id="todo-list"></ul>
    <input id="todo-input" />
    <button id="add-button">追加</button>
    <script src="./script.js"></script>
  </body>
</html>
```

```javascript title=script.js
const todoList = document.getElementById("todo-list");
const todoInput = document.getElementById("todo-input");
const addButton = document.getElementById("add-button");

addButton.disabled = true;

todoInput.oninput = () => {
  addButton.disabled = todoInput.value === "";
};

addButton.onclick = () => {
  const inputValue = todoInput.value;
  todoInput.value = "";
  addButton.disabled = true;
  const todoItem = document.createElement("li");
  const todoText = document.createElement("span");
  const editButton = document.createElement("button");
  const deleteButton = document.createElement("button");
  todoText.textContent = inputValue;
  editButton.textContent = "編集";
  editButton.onclick = () => {
    const input = document.createElement("input");
    const confirmButton = document.createElement("button");
    input.value = todoText.textContent;
    input.oninput = () => {
      confirmButton.disabled = input.value === "";
    };
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
```

<ViewSource url={import.meta.url} path="_samples/todo" />

</Answer>
