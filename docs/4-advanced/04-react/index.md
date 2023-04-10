---
title: React
---

import Term from "@site/src/components/Term";
import Answer from "@site/src/components/Answer";
import ViewSource from "@site/src/components/ViewSource";
import ExternalVideoPlayer from "@site/src/components/ExternalVideoPlayer";
import createReactProjectVideo from "./create-react-project.mp4";
import componentRenderingVideo from "./component-rendering.mp4";

## 宣言的な UI

これまで、JavaScript により HTML 要素を操作するために、[DOM](../../1-trial-session/11-dom/index.md) を用いることができることを学んできました。しかしながら、ナイーブな方法により DOM を使用すると、アプリケーションの規模の限界がすぐにやってきます。

簡単な ToDo アプリケーションを例に考えてみましょう。

```html title=index.html
<ul id="todos"></ul>
<input id="message" />
<button id="add-todo" type="button">追加</button>
```

```js title=script.js
const todoContainer = document.getElementById("todos");
const messageInput = document.getElementById("message");
const addTodoButton = document.getElementById("add-todo");

addTodoButton.onclick = () => {
  const message = messageInput.value;
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = message;
  li.appendChild(span);
  const removeTodoButton = document.createElement("button");
  removeTodoButton.type = "button";
  removeTodoButton.textContent = "削除";
  removeTodoButton.onclick = () => {
    todoContainer.removeChild(li);
  };
  li.appendChild(removeTodoButton);
  todoContainer.appendChild(li);
};
```

<ViewSource url={import.meta.url} path="_samples/todo-dom" />

なんとか作り上げることができましたが、このまま要件を増やして複雑なプログラムを作ろうとすれば、要素の作成忘れ、削除忘れなどにより、すぐに破綻してしまいそうです。

このようになってしまう根本的な原因は、**現在の状態が DOM に記憶されてしまっていることにあります**。DOM には、テキストや位置、色など、数えきれない状態が格納されています。状態の数が $n$ 種類あれば、その遷移パターンは $n^2$ 個になるわけですので、状態の数が増えることが非常に危険であることは明らかです。

ところが、アプリケーションの本質的な状態というのは、一般的にそこまで多いものではありません。例えば、ToDo リストアプリケーションであれば、各 ToDo を表す `string` の配列 `string[]` がひとつだけあれば、アプリケーションの状態は全て表現できていることになるはずです。

**宣言的 UI** は、こういった性質に着目します。より具体的に説明するのであれば、アプリケーションの状態 $S$ に対し、関数 $f(S)$ により UI の状態を表現できるのであれば、開発者の関心を $S$ の変化と $f$ の定義のみに絞ることができるというわけです。

具体的なコードで確認してみましょう。先ほどの ToDo アプリケーションを、宣言的 UI のアプローチを用いて書き換えてみましょう。状態を追いやすいよう、TypeScript を用いて記述します。

まずはアプリケーションの状態と、その状態を格納する変数を宣言します。

```typescript
type State = { todos: string[] };
const state: State = { todos: [] };
```

続いて、`state` 変数をもとに UI を構築する関数 `render` を定義します。

```typescript
function render() {
  // いったん既存の要素を全て削除
  todoContainer.innerHTML = "";

  for (const todo of state.todos) {
    const li = document.createElement("li");
    // ここに li の中身を作る処理が入る
    todoContainer.appendChild(li);
  }
}
```

最後に、状態を変化させる関数を定義します。状態を変化させたら、 `render` 関数を呼び出して、変更を UI に反映させます。

```typescript
function addTodo(todo: string) {
  state.todos.push(todo);
  render();
}
function removeTodo(index: number) {
  state.todos.splice(index, 1);
  render();
}
```

<ViewSource url={import.meta.url} path="_samples/todo-declarative" />

これにより、アプリケーション全体の状態が変数 `state` に集約され、開発者が意識すべき状態のパターンを大幅に減らすことに成功しました。

## React

先ほどのプログラムはうまく動作しますが、一つ問題があります。それは、`render` 関数が呼ばれるたびに全ての要素が削除され、再構築される点です。一般的に、DOM に対する操作は非常にコストが高く、可能な限り減らすことがパフォーマンス改善のために有効です。

[React](https://ja.reactjs.org/) は、この問題を**仮想 DOM**を用いて解決します。React は、DOM に似たデータ構造を内部的に JavaScript オブジェクトの形式で保持し、実際に変更された部分のみを実際の DOM に反映させることで、高いパフォーマンスを実現しています。

それでは、React を用いたプロジェクトを作成してみましょう。Vite でプロジェクトを作成しますが、`framework` は `React`、`variant` は `TypeScript` を選択してください。

<video src={createReactProjectVideo} controls />

:::tip React の使用に最低限必要なパッケージ

React を新規プロジェクトではなく、既存のウェブプロジェクトで用いる場合には、[`react` パッケージ](https://www.npmjs.com/package/react)と、[`react-dom` パッケージ](https://www.npmjs.com/package/react-dom)が必要です。

また、React 本体は TypeScript に対応していないので、TypeScript プロジェクトで React を用いるためには `@types` パッケージを加えてインストールする必要があります。

```json title="package.json (抜粋)"
{
  "dependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  },
  "devDependencies": {
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0"
  }
}
```

:::

## <Term type="jsx">JSX</Term>

React を使用するプロジェクトでは、通常 <Term type="jsx" strong>JSX</Term> と呼ばれる、JavaScript の拡張構文も用いられます。拡張子は `.jsx` で、TypeScript とともに用いるためには `.tsx` となります。Vite のテンプレートからプロジェクトを作成した場合には、`main.tsx` と `App.tsx` が作成されるはずです。

`main.tsx` は HTML から直接実行されるファイルで、`id` 属性に `root` を持つ要素の中を React により管理する旨を示しています。また、このファイルから `App.tsx` で定義された関数 `App` が読み込まれています。詳細は重要ではないのでここでは扱いません。

```tsx title="main.tsx"
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

:::tip Non-null assertion operator

`document.getElementById("root")` の直後に続く `!` 記号は、TypeScript の non-null assertion operator です。`document.getElementById` 関数は、要素が見つからなかった場合に `null` を返すため、戻り値は `HTMLElement | null` 型と定義されています。`null` である可能性がないことをプログラマが保証することを TypeScript に伝える記号が `!` です。なお、`tsconfig.json` の設定によってはこのエラーは表示されません。

```typescript
document.getElementById("root").textContent; // Object is possibly 'null'.
document.getElementById("root")!.textContent; // OK
```

:::

それでは、`App.tsx` を書き換えながら、React の動作を確認していきましょう。まずは、`App.tsx` を次のように修正します。

```tsx title="App.tsx"
export default function App() {
  return <div>Hello React</div>;
}
```

<ViewSource url={import.meta.url} path="_samples/react-hello-world" />

このプログラムを実行すると、`div` 要素が生成され、その中に `Hello React` が表示されます。3 行目の `<div>Hello React</div>` が見慣れない文法ですね。

JSX では、`<div>` のように、**HTML の開始タグに似た記号が現れると、対応する終了タグまで囲まれた部分を、「JSX 要素」を生成する式と解釈する**ようになります。この部分のことを以後便宜的に JSX 式と呼ぶことにします。

JSX 式は、JSX 要素 (`JSX.Element` 型の値) を生成します。この値はごく一般的なオブジェクトで、変数に代入するなど、他の値と同じように扱うことが可能です。

```tsx title="App.tsx"
const message: JSX.Element = <div>Hello React</div>;

export default function App() {
  return message;
}
```

:::tip JSX 式のトランスパイル結果

JSX 式は、Vite などの<Term type="transpile">トランスパイラ</Term>により<Term type="transpile">トランスパイル</Term>されると、関数呼び出しになります。例えば、

```tsx
const message: JSX.Element = <div>Hello React</div>;
```

は、次のように<Term type="transpile">トランスパイル</Term>されます。

```javascript
const message = React.createElement("div", null, "Hello React");
```

:::

React は、`App` 関数の戻り値として `JSX.Element` が返されると、それをもとに実際の DOM を構築します。この例では、`div` 要素を作成し、その中に `Hello React` というテキストを挿入します。つまり、この `JSX.Element` が、先ほどの**仮想 DOM**なるものの実体です。

JSX 式の中に括弧 `{}` が現れると、その内部は通常の JavaScript 式として評価されるようになります。これを利用して、HTML 構造の中に JavaScript による計算結果を埋め込むことができます。

```tsx title="App.tsx"
export default function App() {
  return <div>1 + 1 = {1 + 1}</div>;
}
```

属性の値部分にも `{}` が使用できます。

```tsx title="App.tsx"
export default function App() {
  return <input placeholder={new Date().toString()} />;
}
```

JSX 式と JavaScript の間を行き来することもできます。

```tsx title="App.tsx"
const age = 22;

export default function App() {
  return (
    <p>
      {age >= 20 ? (
        <span>いらっしゃいませ！</span>
      ) : (
        <strong>お酒は 20 歳になってから！</strong>
      )}
    </p>
  );
}
```

:::tip 条件演算子 (三項演算子)

`?` と `:` の組で表される演算子は、**条件演算子 (三項演算子)**です。条件式の評価結果が真なら 2 つめの式を、偽なら 3 つめの式を評価します。

```javascript
const a = 5;
const b = 6;
const max = a > b ? a : b; // 6
```

:::

![JSX と JavaScript の入れ子構造](./jsx-and-javascript.png)

### 課題

自分のテストの点数を表す変数 `score` を用意し、React で次を満たすプログラムを作成してください。

- `score` が 80 以上なら `大変よくできました。` と表示する。
- `score` が 50 以上 80 未満なら `よくできました。` と表示する。
- `score` が 50 未満なら `もう少し頑張りましょう。` と表示する。

<Answer>

解答例 1

条件演算子をネストして、条件分岐を表現します。

```tsx title=App.tsx
const score: number = 80;

function App() {
  return (
    <>
      {score >= 80 ? (
        <div>大変よくできました。</div>
      ) : score >= 50 ? (
        <div>よくできました。</div>
      ) : (
        <div>もう少し頑張りましょう。</div>
      )}
    </>
  );
}

export default App;
```

<ViewSource url={import.meta.url} path="_samples/test-score" />

解答例 2

次のように変数に JSX 要素を代入しておき、最後にその変数を返すという方法もあります。

```tsx title=App.tsx
const score: number = 80;

function App() {
  let message: JSX.Element;
  if (score >= 80) {
    message = <div>大変よくできました。</div>;
  } else if (score >= 50) {
    message = <div>よくできました。</div>;
  } else {
    message = <div>もう少し頑張りましょう。</div>;
  }
  return message;
}

export default App;
```

<ViewSource url={import.meta.url} path="_samples/another-test-score" />

</Answer>

## JSX における条件分岐

JSX 要素は式の形で表現されるため、内部で `if` 文や `for` 文といった制御構造は用いることができません。

前項で扱ったように、`if 〜 else` 構造を式として表現するためには、条件演算子が使用できます。一方、`else if` を含まない単純な `if` に相当する構造を JSX 式として表現するためには、通常 `&&` 演算子が用いられます。例を見てみましょう。

```tsx title="App.tsx"
const age = 20;

export default function App() {
  return (
    <form>
      <input placeholder="お名前" />
      <button>送信</button>
      {age < 18 && <p>18歳未満の場合は保護者の同意が必要です。</p>}
    </form>
  );
}
```

:::tip JSX と閉じタグ

JSX では、HTML において閉じタグが必須でない要素 (この例では `input` 要素) でも閉じタグが必須となります。

:::

このプログラムは、`age` 変数が `18` 以上である場合のみメッセージを表示します。これは、`&&` 演算子の挙動を利用した手法です。これまで、`&&` 演算子は両辺が `true` であれば `true` を返す演算子であるとしてきました。しかしながら、[`&&` 演算子のより一般的な定義](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Logical_AND)は、**左辺が [<Term type="javascriptTruthyFalsy">truthy</Term>](https://developer.mozilla.org/ja/docs/Glossary/Truthy) であれば右辺の値を、そうでなければ左辺の値を返す演算子**です。

```typescript
const a = 3 && 4; // 3 は truthy なので a は 4
const b = null && "Hello"; // null は falsy なので b は null
```

つまり、`age < 18 && <p>18歳未満の...</p>` という式は、age が `18` 未満のとき `<p>18歳未満の...</p>` (`JSX.Element`) に、そうでないときに `false` になります。

さらに、React は、**JSX 中に現れた `false` や `null`、`undefined` といった値は無視します**。これにより、`if` に似た構造が表現できるわけです。

:::tip truthy と falsy

JavaScript では、if 文や while 文などの制御構造も、条件式の結果が truthy であるかを確認しています。

```typescript
if ("") {
  // 空文字列は falsy なのでこの部分は実行されない
}
```

Boolean 関数は、truthy な値を `true` に、falsy な値を `false` に変換します。

```typescript
Boolean(null); // false
Boolean("Hello"); // true
```

:::

## JSX における繰り返し

React では、JSX の子要素として配列を指定することができます。ただし、**配列の要素が `JSX.Element` 型である場合、各要素の `key` 属性に重複しない値を指定する必要があります**。

```tsx title="App.tsx"
const listItems = [
  <li key="1">要素 1</li>,
  <li key="2">要素 2</li>,
  <li key="3">要素 3</li>,
];

export default function App() {
  return <ul>{listItems}</ul>;
}
```

この性質から、React において [`Array#map` メソッド](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map)は、繰り返し構文の代わりとして非常によく用いられます。次の例は、`Student[]` 型の変数 `students` が、`Array#map` により `JSX.Element[]` の値に変換され、`ul` 要素の子要素に指定されています。

```tsx title="App.tsx"
type Student = { id: string; name: string; age: number };

const students: Student[] = [
  { id: "J4-220000", name: "田中", age: 19 },
  { id: "J5-220001", name: "鈴木", age: 18 },
  { id: "J6-230001", name: "佐藤", age: 20 },
];

export default function App() {
  return (
    <ul>
      {students.map((student) => (
        <li key={student.id}>
          {student.name} ({student.age})
        </li>
      ))}
    </ul>
  );
}
```

### 課題

先程の `students` のデータを用いて、表を作ってみましょう。

<ViewSource url={import.meta.url} path="_samples/table" />

## コンポーネント

React では、**大文字の名前から始まる関数**を、**コンポーネント**として使用できます。コンポーネントとなる関数は、`JSX.Element` を返さなければなりません。次の例では、自作のコンポーネント `Greeting` を定義しています。なお、`main.tsx` から呼び出される `App` もまたコンポーネントです。

```tsx title="App.tsx"
function Greeting() {
  return <p>Hello World!</p>;
}

export default function App() {
  return (
    <div>
      <Greeting />
    </div>
  );
}
```

属性を指定した場合、属性名と属性の値の組み合わせからなるオブジェクトがコンポーネントの第 1 引数に渡されます。この引数は通常 `props` と命名されます。属性名は通常<Term type="camelCase">キャメルケース</Term>で表記されます。

```tsx title="App.tsx"
type GreetingProps = { myName: string };

function Greeting(props: GreetingProps) {
  return <p>Hello {props.myName}!</p>;
}

export default function App() {
  return (
    <div>
      <Greeting myName="田中" />
    </div>
  );
}
```

属性名には文字列しか指定できませんが、属性の値には JavaScript の任意の値が使用できます。次の例では、`Clock` コンポーネントの `now` 属性に `Date` オブジェクトを指定しています。

```tsx title="App.tsx"
type ClockProps = { now: Date };

function Clock(props: ClockProps) {
  return <p>現在は {props.now.toString()}!</p>;
}

export default function App() {
  return (
    <div>
      <Clock now={new Date()} />
    </div>
  );
}
```

## `useState` フックと状態

React では、**フック** と呼ばれる、コンポーネント内のみから呼び出すことのできる特別な関数を使用できます。フックは通常 `use` から始まる名前の関数となっています。[`useState` フック](https://ja.reactjs.org/docs/hooks-reference.html#usestate)は、最も基本的なフックで、**コンポーネントに状態を持たせるためのフック**です。次の例は、状態 `count` が、ボタンがクリックされるたびに 1 ずつ増加していくアプリケーションです。

```tsx title="App.tsx"
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState<number>(0);

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
```

`useState` 関数は、**コンポーネントに持たせる状態の初期値を引数にとり、コンポーネントの状態を作成する関数**です。型パラメータを用いて、状態の型を指定できます。この例では、初期値が `0` であるような `number` 型の状態を作成しています。

`useState` 関数の戻り値は、**要素数 2 の配列で、0 番目の要素が現在の状態を、1 番目の要素が状態を更新するための関数**になります。もう少し厳密な表現を用いるのであれば、`useState<T>` 関数の戻り値は `[T, (value: T) => void]` 型とみなせます。

:::tip 配列の分割代入

オブジェクトと同じように、配列でも分割代入の記法を用いることができます。先ほどのプログラムにおいて

```tsx
const [count, setCount] = useState(0);
```

は、次のように動作します。

```tsx
const useStateResult = useState(0);
const count = useStateResult[0];
const setCount = useStateResult[1];
```

:::

:::tip `void` 型

`void` 型は、通常関数の戻り値にのみ使用される型で、関数が値を返さないことを示します。

:::

`App` 関数内で定義されている `increment` 関数では、`setCount` 関数に対し、現在の状態である `count` 変数に `1` を加えた値を引数として渡しています。これにより、`increment` 関数が呼ばれると、状態 `count` が増加するようになります。

:::tip フック呼び出しの制約

React のフックは、コンポーネントの中で**毎度同じ回数、同じ順序で呼ばれる**必要があります。ですので、`if` などの制御構造の中でフックを呼び出すことは通常ありません。この理由は次の項で判明します。

```tsx
function App() {
  if (condition) {
    // フックが呼び出される順番や回数が変わってはならない
    // const [state, setState] = useState(0);
  }
  return <div />;
}
```

:::

## コンポーネント関数が実行されるタイミング

React におけるコンポーネントとは、`JSX.Element` を返す関数を指すのでした。では、この関数は、どういったタイミングで実行されるのでしょうか。

この疑問に対する回答を探るため、先ほど作成した App 関数の先頭に、`console.log` を追加してみましょう。これにより、`App` 関数が実行されるタイミングで、コンソールにメッセージが表示されるようになります。

```tsx title="App.tsx"
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
```

<ViewSource url={import.meta.url} path="_samples/react-component-function" />

このプログラムを実行することで、`App` 関数は、初回読み込み時と、ボタンがクリックされたタイミングで実行されていることが分かります。

<video src={componentRenderingVideo} controls autoPlay muted loop />

つまり、React は、**状態が変化するたびにコンポーネント関数を実行し、その結果得られた `JSX.Element` の変化を検知して DOM に反映させている**のです。

## ユーザー入力を扱う

React では、入力可能な要素の `value` 属性を固定すると、その要素には入力できなくなります。

```tsx title="App.tsx"
export default function App() {
  return <input value="Fixed" />; // 入力できない
}
```

<ViewSource url={import.meta.url} path="_samples/react-fixed-input" />

`onChange` イベントを受け取って入力した値をコンポーネントの状態に反映させることで、ユーザー入力とコンポーネントの状態を同期させることができるようになります。

```tsx title="App.tsx"
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
```

<ViewSource url={import.meta.url} path="_samples/react-fixed-input" />

`onChange` 属性には、要素のテキストが変更された際に発生するイベントのイベントハンドラを指定します。React の `onChange` 属性は、DOM の [`change` イベント](https://developer.mozilla.org/ja/docs/Web/API/HTMLElement/change_event)ハンドラと同様に記述することができ、第 1 引数には [`Event` オブジェクト](https://developer.mozilla.org/ja/docs/Web/API/Event)に似た値が与えられます。

[`Event#target`](https://developer.mozilla.org/ja/docs/Web/API/Event/target) プロパティには、イベントが発生した要素 (上の例では [`HTMLInputElement`](https://developer.mozilla.org/ja/docs/Web/API/HTMLInputElement)) が格納されます。このオブジェクトの [`value` プロパティ](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement)を通して入力されようとしている値が取得できるので、この値を `setText` 関数を用いて状態に反映させています。

![入力されたデータの流れ](./input-data-flow.png)

## 複数のコンポーネントで状態を共有する

親コンポーネント `App` と子コンポーネント `TextField` の関係があったとします。`TextField` コンポーネントで編集可能な状態を、親コンポーネント `App` でも使用したいとします。

複数のコンポーネントで共通の状態が必要となる場合、**それら全てが持つ共通の親コンポーネントで状態を定義する必要があります**。この場合では、親コンポーネントである `App` に状態を定義するのが正解です。

子コンポーネントには、**現在の状態の値そのものと、状態を更新するための関数を属性を経由して渡せば**、通常の状態と同じように使用できるようになります。

```tsx title="App.tsx"
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
```

<ViewSource url={import.meta.url} path="_samples/react-prop-forwarding" />

## 複雑な状態を扱う

`useState` が作成可能な状態は、何もプリミティブな値のみに限りません。オブジェクトの形の状態を作成することで、より複雑な状態を表現することができます。以前扱った ToDo アプリを、React を用いて書き直してみましょう。

```tsx title="App.tsx"
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
```

<ViewSource url={import.meta.url} path="_samples/react-todo" />

この例では、ToDo 一覧を保持する状態 `todos` と、次の ID を保持する状態 `nextId`、そして新規作成用のテキストボックスの内容を保持する状態 `newTodo` に分けて状態を管理しています。

:::tip React とイミュータビリティ

[定数とオブジェクトの参照](../../2-browser-apps/02-constant/index.md)節で扱ったように、JavaScript オブジェクトは参照として扱われます。React では、**状態として保存されたオブジェクトの参照先への変更は許可されていません**。例えば、先ほどのプログラムの `addTodo` 関数と `removeTodo` 関数は、次のように書き換えることはできません。これは、この方法では React が状態が変化したことを検知できないからです。

```tsx
const addTodo = () => {
  todos.push({ id: nextId, title: newTodo });
};
const removeTodo = (id: number) => {
  todos.splice(
    todos.findIndex((todo) => todo.id === id),
    1
  );
};
```

オブジェクトの中身が変化しないとき、そのオブジェクトは<Term type="mutableImmutable" strong>イミュータブル</Term>であるといいます。一方、`Array#push` メソッドや `Array#splice` メソッドは、配列の中身を変化させます。このように、<Term type="mutableImmutable">ミュータブル</Term>な操作を伴う関数を、**破壊的**であるという場合があります。破壊的メソッドは React の状態に対して使用できません。

:::

:::tip スプレッド構文

[スプレッド構文](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Spread_syntax)は、配列やオブジェクトを、別の配列やオブジェクトに展開するための記法です。重複するプロパティがある場合は、後に記載されたものが優先されます。

```typescript
const array1 = [1, 2, 3];
const array2 = [...array1, 4, 5]; // [1, 2, 3, 4, 5]

const object1 = { name: "田中", age: 18 };
const object2 = { ...object1, age: 19, address: "東京" }; // { name: "田中", age: 19, address: "東京" }
```

:::

## 課題

- ToDo リストの要素を上下に移動させる機能を追加しましょう
  <ViewSource url={import.meta.url} path="_samples/todo-up-down" />
- ToDo リストの要素へ編集する機能を追加しましょう
  <ViewSource url={import.meta.url} path="_samples/todo-edit" />
- データベースに永続化することができる ToDo リストアプリケーションを作成しましょう

  - ヒント: ページ読み込み時に Fetch API を用いてデータを保存済みの ToDo 一覧を取得します。リストが編集されたら再び Fetch API を用いてデータを保存しましょう。

  解答例
  <ViewSource url={import.meta.url} path="_samples/todo-database" noCodeSandbox />
  別解
  <ViewSource url={import.meta.url} path="_samples/todo-database2" noCodeSandbox />
