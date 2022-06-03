import { useState } from "react";

type Todo = { id: number; title: string };

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [nextId, setNextId] = useState(1);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    setTodos([...todos, { id: nextId, title: newTodo }]);
    setNextId(nextId + 1);
    setNewTodo("");
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <ul>
        {todos.map((todo) => (
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
