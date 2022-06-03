import { useState } from "react";

type TextFieldProps = {
  value: string;
  onChange: (value: string) => void;
};

function TextField(props: TextFieldProps) {
  return (
    <input
      value={props.value}
      onChange={(e) => {
        props.onChange(e.target.value);
      }}
    />
  );
}

export default function App() {
  const [text, setText] = useState("");

  return (
    <>
      <TextField value={text} onChange={setText} />
      <p>入力されたテキスト: {text}</p>
    </>
  );
}
