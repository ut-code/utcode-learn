import { useState } from "react";

type Todo = { id: number; title: string };

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [nextId, setNextId] = useState<number>(1);
  const [newTodo, setNewTodo] = useState<string>("");

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
  };

  const moveDown = (i: number) => {
    const newTodos = [...todos];
    const tmp = newTodos[i];
    newTodos[i] = newTodos[i + 1];
    newTodos[i + 1] = tmp;
    setTodos(newTodos);
  };

  return (
    <>
      <ul>
        {todos.map((todo, i) => (
          <li key={todo.id}>
            <span>{todo.title}</span>
            <button
              type="button"
              onClick={() => {
                removeTodo(todo.id);
              }}
            >
              削除
            </button>

            {i > 0 && (
              <button
                type="button"
                onClick={() => {
                  moveUp(i);
                }}
              >
                ↑
              </button>
            )}

            {i < todos.length - 1 && (
              <button
                type="button"
                onClick={() => {
                  moveDown(i);
                }}
              >
                ↓
              </button>
            )}
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
