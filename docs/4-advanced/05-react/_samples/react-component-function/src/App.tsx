import { useState } from "react";

export default function App() {
  const [count, setCount] = useState<number>(0);
  console.log(`count = ${count}`);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>{count}</p>
      <button type="button" onClick={increment}>
        増やす
      </button>
    </div>
  );
}
