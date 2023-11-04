---
title: React を用いたアプリ作成
sidebar_position: 10
---

import todoAppVideo from "./todo-app.mp4"
import ViewSource from "@site/src/components/ViewSource";

この章では教材の「[React](/docs/advanced/react/)」の内容を扱っています。

---

## ToDo リスト

以下のような本格的な ToDo リストを作ってみましょう。

<video src={todoAppVideo} loop autoPlay muted controls />

- ToDo のカテゴリを自分で作成できます
- カテゴリごとにタスクを追加することができます
- ToDo の削除・編集ができます
- ToDo が完了したらチェックをつけることができます
- カテゴリを削除するとその配下にある ToDo も削除されます

### ヒント

以下ヒントです。

#### ヒント１

いきなりデザインも機能も同時に本格的にするのは複雑なので、まずは最小限の機能に焦点を絞るのがよいでしょう。手始めに、カテゴリなどは考えず ToDo を追加・削除・編集するアプリを作ってみましょう。

この教材の [React の章](/docs/advanced/react/#課題-2)で簡単な ToDo アプリを実際に作っている箇所もあるので、そちらも参考にしてみましょう。

#### ヒント２

大まかにみれば、肝心の ToDo に関しては次のようなモデル（型）を用意すればよさそうです

```javascript
type Todo = {
  id: number, // ToDoのid
  category: string, // ToDoの属するカテゴリ
  content: string, // ToDoの内容
  isDone: boolean, // ToDoが完了しているかどうか
};
```

そして複数の ToDo をまとめてリストとして管理します。

```javascript
const [todos, setTodos] = useState<Todo[]>([]);

const addTodo = (newTodo: Todo) => {
    // todosを更新する操作
};

const updateTodoContent = (id: number, newContent: string) => {
    // todoの内容を更新する操作
};

const updateTodoIsDone = (id: number) => {
    // todoが完了したかを更新する操作
};

const removeTodo = (id: number) => {
    // todosを削除する操作
}
```

また、カテゴリもリストに格納して管理できます。

```javascript
const [categories, setCategories] = useState<string[]>([]);

const addCategory = (newCategory: string) => {
    // カテゴリを追加する操作
}

const removeCategory = (existingCategory: string) => {
    // カテゴリを削除する操作
}
```

### 解答例

以下解答例です。

<ViewSource url={import.meta.url} path="_sample" />
