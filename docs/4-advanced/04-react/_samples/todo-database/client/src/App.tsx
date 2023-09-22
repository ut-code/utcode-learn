import React, { useState, useEffect } from "react";

type Todo = { id: number; title: string };

const sendTodos = async (todos: Todo[]) => {
  await fetch("/send", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(todos),
  });
};

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [nextId, setNextId] = useState<number>(1);
  useEffect(() => {
    const fetchTodos = async () => {
      const response = await (await fetch("/todos")).json();
      setTodos(response);
      const maxId =
        response.reduce((previousValue: Todo, currentValue: Todo) => {
          if (previousValue.id > currentValue.id) return previousValue;
          return currentValue;
        }).id + 1;
      setNextId(response.length ? maxId : 1);
    };
    fetchTodos();
    const timerId = setInterval(fetchTodos, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);
  const [newTodo, setNewTodo] = useState<string>("");
  const [edittingTodo, setEdittingTodo] = useState<Todo>({ id: -1, title: "" });

  const addTodo = async () => {
    const newTodos = [...todos, { id: nextId, title: newTodo }];
    setTodos(newTodos);
    setNextId(nextId + 1);
    setNewTodo("");
    await sendTodos(newTodos);
  };

  const removeTodo = async (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    await sendTodos(newTodos);
  };

  const moveUp = async (index: number) => {
    const newTodos = [...todos];
    const tmp = newTodos[index];
    newTodos[index] = newTodos[index - 1];
    newTodos[index - 1] = tmp;
    setTodos(newTodos);
    await sendTodos(newTodos);
  };

  const moveDown = async (index: number) => {
    const newTodos = [...todos];
    const tmp = newTodos[index];
    newTodos[index] = newTodos[index + 1];
    newTodos[index + 1] = tmp;
    setTodos(newTodos);
    await sendTodos(newTodos);
  };

  const editTodo = (todo: Todo) => {
    setEdittingTodo(todo);
  };

  const fixTodo = async () => {
    const newTodos = todos.map((todo) =>
      todo.id === edittingTodo.id ? edittingTodo : todo,
    );
    setTodos(newTodos);
    setEdittingTodo({ id: -1, title: "" });
    await sendTodos(newTodos);
  };

  return (
    <>
      <ul>
        {todos.map((todo, i) => (
          <li key={todo.id}>
            {edittingTodo.id === todo.id ? (
              <>
                <input
                  value={edittingTodo.title}
                  onChange={(e) => {
                    setEdittingTodo({ id: todo.id, title: e.target.value });
                  }}
                />
                <button
                  type="button"
                  onClick={() => {
                    fixTodo();
                  }}
                >
                  確定
                </button>
              </>
            ) : (
              <>
                <span>{todo.title}</span>
                <button
                  type="button"
                  onClick={() => {
                    editTodo(todo);
                  }}
                >
                  編集
                </button>
              </>
            )}
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
