---
title: React を用いたアプリ作成
sidebar_position: 10
---

import todoAppVideo from "./todo-app.mp4"
import ViewSource from "@site/src/components/ViewSource";

## ToDoリスト

以下のような本格的なToDoリストを作ってみましょう。

<video src={todoAppVideo} loop autoPlay muted controls />

- todoのカテゴリを自分で作成できます
- カテゴリごとにタスクを追加することができます
- todoの削除・編集ができます
- todoが完了したらチェックをつけることができます
- カテゴリを削除するとその配下にあるtodoも削除されます

### ヒント

以下ヒントです。

#### ヒント１

いきなりデザインも機能も同時に本格的にするのは複雑なので、まずは最小限の機能に焦点を絞るのがよいでしょう。手始めに、カテゴリなどは考えずtodoを追加・削除・編集するアプリを作ってみましょう。この教材のReactの章で簡単なtodoアプリを実際に作っている箇所もあるので、そちらも参考にしてみましょう。

#### ヒント２

大まかにみれば、肝心のtodoに関しては次のようなモデル（型）を用意すればよさそうです

```javascript
type Todo = {
  id: number; // todoのid
  category: string; // todoの属するカテゴリ
  content: string; // todoの内容
  isDone: boolean; // todoが完了しているかどうか
}
```

そして複数のtodoをまとめてリストとして管理します。

```javascript
const [todos, setTodos] = useState<Todo[]>([]);

const addTodo = (todo: Todo) => {
    // todoを追加する操作
};

const updateTodo = (id: number, newContent: string) => {
    // todoを更新する操作
};

const deleteTodo = (id: number) => {
    // todoを削除する操作
}
```

また、カテゴリもリストに格納して管理できます。

```javascript
const [categories, setCategories] = useState<string[]>([]);

const addCategory = (newCategory: string) => {
    // カテゴリを追加する操作
}

const deleteCategory = () => {
    // カテゴリを削除する操作
}

```

### 解答例

以下解答例です。

<ViewSource url={import.meta.url} path="_sample" />