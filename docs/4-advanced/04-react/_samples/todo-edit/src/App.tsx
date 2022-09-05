import { useState } from "react";

type Todo = { id: number; title: string };

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [nextId, setNextId] = useState<number>(1);
  const [newTodo, setNewTodo] = useState<string>("");
  const [edittingTodo, setEdittingTodo] = useState<Todo>({ id: -1, title: "" });

  const addTodo = () => {
    setTodos([...todos, { id: nextId, title: newTodo }]);
    setNextId(nextId + 1);
    setNewTodo("");
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const moveUp = (i: number) => {
    const newTodos = [...todos];
    const tmp = newTodos[i];
    newTodos[i] = newTodos[i - 1];
    newTodos[i - 1] = tmp;
    setTodos(newTodos);
  }

  const moveDown = (i: number) => {
    const newTodos = [...todos];
    const tmp = newTodos[i];
    newTodos[i] = newTodos[i + 1];
    newTodos[i + 1] = tmp;
    setTodos(newTodos);
  }

  const editTodo = (todo: Todo) => {
    setEdittingTodo(todo);
  }

  const fixTodo = (todo: Todo) => {
    setTodos(todos.map((todo) => (todo.id === edittingTodo.id ? edittingTodo : todo)));
    setEdittingTodo({ id: -1, title: "" });
  }

  return (
    <>
      <ul>
        {todos.map((todo, i) => (
          <li key={todo.id}>
            {edittingTodo.id === todo.id ?
              <>
                <input
                  value={edittingTodo.title}
                  onChange={(e) => {
                    setEdittingTodo({ id: todo.id, title: e.target.value });
                  }}
                />

                <button
                  type="button"
                  onClick={() => { fixTodo(todo) }}
                >
                  確定
                </button>
              </>
              :
              <span>{todo.title}</span>
            }

            <button
              type="button"
              onClick={() => {
                removeTodo(todo.id);
              }}
            >
              削除
            </button>

            <button
              type="button"
              onClick={() => {
                editTodo(todo);
              }}
            >
              編集
            </button>

            {i > 0 &&
              <button
                type="button"
                onClick={() => {
                  moveUp(i);
                }}
              >
                ↑
              </button>
            }

            {i < todos.length - 1 &&
              <button
                type="button"
                onClick={() => {
                  moveDown(i);
                }}
              >
                ↓
              </button>
            }
          </li>
        ))}
      </ul>
      <div>
        <input
          value={newTodo}
          onChange={(e) => {
            setNewTodo(e.target.value);
          }}
        />
        <button type="button" onClick={addTodo}>
          追加
        </button>
      </div>
    </>
  );
}
