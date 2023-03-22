import { useState } from "react";
import "./App.css";

// todoのデータ構造
interface Todo {
  id: number;
  category: string;
  content: string;
  isDone: boolean;
}

function App() {
  // todoのリスト
  const [todos, setTodos] = useState<Todo[]>([]);
  // 現在編集中のtodoのid（編集していないときは-1）
  const [idOfEditedTodo, setIdOfEditedTodo] = useState<number>(-1);
  // 次に作成するtodoのid
  const [nextId, setNextId] = useState<number>(1);
  // todoのカテゴリ（空文字はすべてのカテゴリ）
  const [categories, setCategories] = useState<string[]>([""]);
  // 現在表示中のカテゴリ
  const [currentCategory, setCurrentCategory] = useState<string>("");
  // input要素のvalue
  const [contentInput, setContentInput] = useState<string>("");
  const [categoryInputInMainScreen, setCategoryInputInMainScreen] =
    useState<string>("");
  const [categoryInputInSideBar, setCategoryInputInSideBar] =
    useState<string>("");

  // todoを追加する関数
  const addTodo = (todo: Todo) => {
    const todosCopy = todos.slice();
    todosCopy.push(todo);
    setTodos(todosCopy);
  };

  // todoの内容を更新する関数
  const updateTodoContent = (id: number, newContent: string) => {
    const todosCopy = todos.slice();
    const todoUpdated = todosCopy.find((todoCopy) => todoCopy.id === id);
    if (!todoUpdated) throw new Error();
    todoUpdated.content = newContent;
    setTodos(todosCopy);
  };

  // todoが完了したかどうかを変更する関数
  const updateTodoIsDone = (id: number) => {
    const todosCopy = todos.slice();
    const todoUpdated = todosCopy.find((todoCopy) => todoCopy.id === id);
    if (!todoUpdated) throw new Error();
    todoUpdated.isDone
      ? (todoUpdated.isDone = false)
      : (todoUpdated.isDone = true);
    setTodos(todosCopy);
  };

  // todoを削除する関数
  const deleteTodo = (id: number) => {
    const todosCopy = todos.slice();
    const todoDeleted = todosCopy.find((todoCopy) => todoCopy.id === id);
    if (!todoDeleted) throw new Error();
    setTodos(todosCopy.filter((todoCopy) => todoCopy.id != todoDeleted.id));
  };

  // カテゴリを追加する関数
  const addCategory = (newCategory: string) => {
    const categoriesCopy = categories.slice();
    categoriesCopy.push(newCategory);
    setCategories(categoriesCopy);
  };

  // カテゴリを削除する関数
  const deleteCategory = (existingCategory: string) => {
    const categoriesCopy = categories.slice();
    setCategories(
      categoriesCopy.filter((categoryCopy) => existingCategory != categoryCopy)
    );
  };

  // 編集操作を取り消す関数
  const clearEditing = () => {
    const editedTodo =
      idOfEditedTodo === -1
        ? null
        : todos.find((todo) => todo.id === idOfEditedTodo);
    if (editedTodo === undefined) throw new Error();
    else if (editedTodo != null && editedTodo.content === "") {
      deleteTodo(idOfEditedTodo);
    }
    setContentInput("");
    setIdOfEditedTodo(-1);
  };

  // 現在表示中のカテゴリのtodo
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
                >
                  {category}
                </button>
                <button
                  className="delete-button"
                  onClick={() => {
                    if (currentCategory === category) {
                      setCurrentCategory("");
                    }
                    deleteCategory(category);
                    const todosCopy = todos.slice();
                    const todosLeft = todosCopy.filter(
                      (todo) =>
                        (todo.id != idOfEditedTodo || todo.content != "") &&
                        todo.category != category
                    );
                    setTodos(todosLeft);
                    setIdOfEditedTodo(-1);
                    setContentInput("");
                  }}
                >
                  -
                </button>
              </li>
            )
          )}
        </ul>
        <input
          className="category-input"
          placeholder="Add category"
          value={categoryInputInSideBar}
          onInvalid={() => {}}
          onChange={(e) => {
            setCategoryInputInSideBar(e.target.value);
          }}
          // エンターキーを押すとカテゴリ追加（今回はonKeyDown属性を使っていますが、form要素のonSubmit属性とイベントオブジェクトのpreventDefaultメソッドを使ったほうが良いようです）
          onKeyDown={(e) => {
            if (
              e.code === "Enter" &&
              !e.nativeEvent.isComposing &&
              !categories.some(
                (category) => category === categoryInputInSideBar
              )
            ) {
              {
                addCategory(categoryInputInSideBar);
                setCategoryInputInSideBar("");
              }
            }
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
        >
          +
        </button>
      </div>
      {/* todoの表示部分 */}
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
          {/** 各todoの表示部分 */}
          <tbody>
            {/** todoがあるときとないときで表示を分ける（三項演算子を利用） */}
            {todos.length === 0 ? (
              <tr>
                <td className="no-todo">there's no todo yet...</td>
                <td></td>
                <td></td>
              </tr>
            ) : (
              todosOfCurrentCategories.map((todo) =>
                // todoが編集中かどうかで表示を変える
                idOfEditedTodo === todo.id ? (
                  <tr>
                    <td className="todo">
                      <input
                        value={contentInput}
                        placeholder="Enter todo"
                        onChange={(e) => {
                          setContentInput(e.target.value);
                        }}
                        onKeyDown={
                          // エンターキーを押したとき入力なしならtodo削除、あれば確定
                          contentInput === ""
                            ? (e) => {
                                if (e.code === "Enter") {
                                  deleteTodo(todo.id);
                                  setIdOfEditedTodo(-1);
                                }
                              }
                            : (e) => {
                                if (
                                  e.code === "Enter" &&
                                  // 日本語の変換確定に対応
                                  !e.nativeEvent.isComposing
                                ) {
                                  updateTodoContent(
                                    idOfEditedTodo,
                                    contentInput
                                  );
                                  setContentInput("");
                                  setIdOfEditedTodo(-1);
                                }
                              }
                        }
                      />
                      <button
                        className="confirm-button"
                        onClick={() => {
                          updateTodoContent(idOfEditedTodo, contentInput);
                          setIdOfEditedTodo(-1);
                        }}
                        disabled={contentInput === ""}
                      >
                        ✔
                      </button>
                      <button
                        className="delete-button"
                        onClick={() => {
                          deleteTodo(todo.id);
                          setContentInput("");
                          setIdOfEditedTodo(-1);
                        }}
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
                          setIdOfEditedTodo(todo.id);
                          setContentInput(todo.content);
                        }}
                        disabled={idOfEditedTodo != -1}
                      >
                        🖋
                      </button>
                      <button
                        className="delete-button"
                        onClick={() => {
                          deleteTodo(todo.id);
                        }}
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
        {/** すべてのカテゴリを表示しているときは新規todoのカテゴリを指定して
         * 追加するためにinput要素を表示  */}
        <input
          value={categoryInputInMainScreen}
          className={currentCategory === "" ? "category-input" : "hidden"}
          placeholder="Select or add category"
          onChange={(e) => {
            setCategoryInputInMainScreen(e.target.value);
          }}
          onKeyDown={(e) => {
            if (
              e.code === "Enter" &&
              !e.nativeEvent.isComposing &&
              categoryInputInMainScreen != ""
            ) {
              let categoryOfNewTodo: string;
              // 新規todoのカテゴリを場合分けして設定
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
                category: categoryInputInMainScreen,
                content: "",
                isDone: false,
              });
              setIdOfEditedTodo(nextId);
              setNextId(nextId + 1);
              setCategoryInputInMainScreen("");
            }
          }}
          disabled={idOfEditedTodo != -1}
        />
        <button
          className="add-button"
          onClick={() => {
            let categoryOfNewTodo: string;
            // 新規todoのカテゴリを場合分けして設定
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
            setIdOfEditedTodo(nextId);
            setNextId(nextId + 1);
            setCategoryInputInMainScreen("");
          }}
          disabled={
            //todo編集中の時とinputが空欄の時は追加ボタンを無効化
            idOfEditedTodo != -1 ||
            (currentCategory === "" && categoryInputInMainScreen === "")
          }
        >
          +
        </button>
      </div>
    </div>
  );
}

export default App;
