import { useState } from "react";
import "./App.css";

// ToDoのデータ構造
type Todo = {
  id: number;
  category: string;
  content: string;
  isDone: boolean;
};

function App() {
  // ToDoのリスト
  const [todos, setTodos] = useState<Todo[]>([]);
  // 現在編集中のToDoのid（編集していないときは-1）
  const [editingTodoId, setEditingTodoId] = useState<number>(-1);
  // 次に作成するToDoのid
  const [nextId, setNextId] = useState<number>(1);
  // ToDoのカテゴリ（空文字はすべてのカテゴリ）
  const [categories, setCategories] = useState<string[]>([""]);
  // 現在表示中のカテゴリ
  const [currentCategory, setCurrentCategory] = useState<string>("");
  // input要素のvalue
  const [contentInput, setContentInput] = useState<string>("");
  const [categoryInputInMainScreen, setCategoryInputInMainScreen] =
    useState<string>("");
  const [categoryInputInSideBar, setCategoryInputInSideBar] =
    useState<string>("");

  // ToDoを追加する関数
  const addTodo = (newTodo: Todo) => {
    const todosCopy = todos.slice();
    todosCopy.push(newTodo);
    setTodos(todosCopy);
  };

  // ToDoの内容を更新する関数
  const updateTodoContent = (id: number, newContent: string) => {
    const todosCopy = todos.slice();
    const todoUpdated = todosCopy.find((todoCopy) => todoCopy.id === id);
    if (!todoUpdated) throw new Error();
    todoUpdated.content = newContent;
    setTodos(todosCopy);
  };

  // ToDoが完了したかどうかを変更する関数
  const updateTodoIsDone = (id: number) => {
    const todosCopy = todos.slice();
    const todoUpdated = todosCopy.find((todoCopy) => todoCopy.id === id);
    if (!todoUpdated) throw new Error();
    todoUpdated.isDone = !todoUpdated.isDone;
    setTodos(todosCopy);
  };

  // ToDoを削除する関数
  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // カテゴリを追加する関数
  const addCategory = (newCategory: string) => {
    const categoriesCopy = categories.slice();
    categoriesCopy.push(newCategory);
    setCategories(categoriesCopy);
  };

  // カテゴリを削除する関数
  const removeCategory = (existingCategory: string) => {
    setCategories(
      categories.filter((category) => existingCategory != category)
    );
  };

  // 編集操作を取り消す関数
  const clearEditing = () => {
    const editedTodo =
      editingTodoId === -1
        ? null
        : todos.find((todo) => todo.id === editingTodoId);
    if (editedTodo === undefined) throw new Error();
    else if (editedTodo != null && editedTodo.content === "") {
      removeTodo(editingTodoId);
    }
    setContentInput("");
    setEditingTodoId(-1);
  };

  // 現在表示中のカテゴリのToDo
  const todosOfCurrentCategories =
    currentCategory === ""
      ? todos
      : todos.filter((todo) => todo.category === currentCategory);

  return (
    <div>
      {/* サイドバー */}
      <div className="sidenav">
        <ul className="nav-list">
          {categories.map((category) =>
            category === "" ? (
              <li className="nav-row">
                <button
                  className={
                    /* カテゴリが表示中かどうかで背景色を変更 */
                    category === currentCategory ? "on-focus" : "off-focus"
                  }
                  onClick={() => {
                    clearEditing();
                    setCurrentCategory(category);
                    setCategoryInputInMainScreen("");
                  }}
                  type="button"
                >
                  All todos
                </button>
              </li>
            ) : (
              <li className="nav-row">
                <button
                  className={
                    category === currentCategory ? "on-focus" : "off-focus"
                  }
                  onClick={() => {
                    clearEditing();
                    setCurrentCategory(category);
                    setCategoryInputInMainScreen("");
                  }}
                  type="button"
                >
                  {category}
                </button>
                <button
                  className="delete-button"
                  onClick={() => {
                    if (currentCategory === category) {
                      setCurrentCategory("");
                    }
                    removeCategory(category);
                    const todosCopy = todos.slice();
                    const todosLeft = todosCopy.filter(
                      (todo) =>
                        (todo.id != editingTodoId || todo.content != "") &&
                        todo.category != category
                    );
                    setTodos(todosLeft);
                    setEditingTodoId(-1);
                    setContentInput("");
                  }}
                  type="button"
                >
                  -
                </button>
              </li>
            )
          )}
        </ul>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (
              categoryInputInSideBar !== "" &&
              !categories.some(
                (category) => category === categoryInputInSideBar
              )
            ) {
              addCategory(categoryInputInSideBar);
              setCategoryInputInSideBar("");
            }
          }}
        >
          <input
            className="category-input"
            placeholder="Add category"
            value={categoryInputInSideBar}
            onChange={(e) => {
              setCategoryInputInSideBar(e.target.value);
            }}
          />
          <button
            className="add-button"
            onClick={() => {
              addCategory(categoryInputInSideBar);
              setCategoryInputInSideBar("");
            }}
            disabled={
              categoryInputInSideBar === "" ||
              categories.some((category) => category === categoryInputInSideBar)
            }
            type="submit"
          >
            +
          </button>
        </form>
      </div>
      {/* ToDoの表示部分 */}
      <div className="main">
        <table className="todo-table">
          {/** 表のヘッダー */}
          <thead>
            <tr>
              <th className="header1">todo</th>
              <th className="header2">category</th>
              <th className="header3">done</th>
            </tr>
          </thead>
          {/** 各ToDoの表示部分 */}
          <tbody>
            {/** ToDoがあるときとないときで表示を分ける（三項演算子を利用） */}
            {todos.length === 0 ? (
              <tr>
                <td className="no-todo">there's no todo yet...</td>
                <td></td>
                <td></td>
              </tr>
            ) : (
              todosOfCurrentCategories.map((todo) =>
                // ToDoが編集中かどうかで表示を変える
                editingTodoId === todo.id ? (
                  <tr>
                    <td className="todo">
                      <input
                        value={contentInput}
                        placeholder="Enter todo"
                        onChange={(e) => {
                          setContentInput(e.target.value);
                        }}
                        onKeyDown={
                          // エンターキーを押したとき入力なしならToDo削除、あれば確定
                          contentInput === ""
                            ? (e) => {
                                if (e.code === "Enter") {
                                  removeTodo(todo.id);
                                  setEditingTodoId(-1);
                                }
                              }
                            : (e) => {
                                if (
                                  e.code === "Enter" &&
                                  // 日本語の変換確定に対応
                                  !e.nativeEvent.isComposing
                                ) {
                                  updateTodoContent(
                                    editingTodoId,
                                    contentInput
                                  );
                                  setContentInput("");
                                  setEditingTodoId(-1);
                                }
                              }
                        }
                      />
                      <button
                        className="confirm-button"
                        onClick={() => {
                          updateTodoContent(editingTodoId, contentInput);
                          setEditingTodoId(-1);
                        }}
                        type="button"
                        disabled={contentInput === ""}
                      >
                        ✔
                      </button>
                      <button
                        className="delete-button"
                        onClick={() => {
                          removeTodo(todo.id);
                          setContentInput("");
                          setEditingTodoId(-1);
                        }}
                        type="button"
                      >
                        -
                      </button>
                    </td>
                    <td className="category">{todo.category}</td>
                    <td className="done">
                      <input type="checkbox" />
                    </td>
                  </tr>
                ) : (
                  <tr>
                    <td className="todo">
                      <div>{todo.content}</div>
                      <button
                        className="edit-button"
                        onClick={() => {
                          setEditingTodoId(todo.id);
                          setContentInput(todo.content);
                        }}
                        disabled={editingTodoId != -1}
                        type="button"
                      >
                        🖋
                      </button>
                      <button
                        className="delete-button"
                        onClick={() => {
                          removeTodo(todo.id);
                        }}
                        type="button"
                      >
                        -
                      </button>
                    </td>
                    <td className="category">{todo.category}</td>
                    <td className="done">
                      <input
                        type="checkbox"
                        checked={todo.isDone}
                        onChange={() => {
                          updateTodoIsDone(todo.id);
                        }}
                      />
                    </td>
                  </tr>
                )
              )
            )}
          </tbody>
        </table>
        {/** すべてのカテゴリを表示しているときは新規ToDoのカテゴリを指定して
         * 追加するためにinput要素を表示  */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            let categoryOfNewTodo: string;
            // 新規ToDoのカテゴリを場合分けして設定
            if (currentCategory != "") {
              categoryOfNewTodo = currentCategory;
            } else {
              categoryOfNewTodo = categoryInputInMainScreen;
              if (
                !categories.some(
                  (category) => category === categoryInputInMainScreen
                )
              ) {
                addCategory(categoryInputInMainScreen);
              }
            }
            addTodo({
              id: nextId,
              category: categoryOfNewTodo,
              content: "",
              isDone: false,
            });
            setEditingTodoId(nextId);
            setNextId(nextId + 1);
            setCategoryInputInMainScreen("");
          }}
        >
          <input
            value={categoryInputInMainScreen}
            className={currentCategory === "" ? "category-input" : "hidden"}
            placeholder="Select or add category"
            onChange={(e) => {
              setCategoryInputInMainScreen(e.target.value);
            }}
            disabled={editingTodoId != -1}
          />
          <button
            className="add-button"
            disabled={
              //ToDo編集中の時とinputが空欄の時は追加ボタンを無効化
              editingTodoId != -1 ||
              (currentCategory === "" && categoryInputInMainScreen === "")
            }
            type="submit"
          >
            +
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
