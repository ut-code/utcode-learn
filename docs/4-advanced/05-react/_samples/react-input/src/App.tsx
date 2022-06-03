import { useState } from "react";

export default function App() {
  const [text, setText] = useState("");

  return (
    <>
      <input
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <p>入力されたテキスト: {text}</p>
    </>
  );
}
