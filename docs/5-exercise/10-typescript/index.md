---
title: TypeScript 演習
sidebar_position: 9
---

import Answer from "@site/src/components/Answer";
import ViewSource from "@site/src/components/ViewSource";

この章では教材の「[TypeScript](../../4-advanced/03-typescript/index.md)」の内容を扱っています。

---

## 問題 1

以下の 2 つの TypeScript のコードについて、エラーが表示される行を全て選んでください。

### 問題 1-1

```typescript
let a: unknown = "a";
let b: string = "a";
let c: "a" = "a";
b = a;
b = c;
console.log(a.length);
console.log(b.length);
console.log(c.length);
```

<Answer>

正解: 4 行目、6 行目

- 1~3 行目は、文字列 `"a"` は `unknown` 型、`string` 型、`"a"` 型のいずれにも含まれるのでエラーは出ません。
- 4 行目は、`unknown` 型の変数を `string` 型に代入しようとしていますが、`unknown` 型は `string` 型の部分集合ではないのでエラーが出ます。
- 5 行目は、`"a"` 型は `string` 型の部分集合なのでエラーは出ません。
- 6 行目は、`unknown` 型は `length` プロパティを持たないためエラーが出ます。
- 7 行目は、`string` 型は `length` プロパティを持つためエラーは出ません。
- 8 行目は、`"a"` 型は `string` 型の部分集合なので `length` プロパティを持ち、エラーは出ません。

</Answer>

### 問題 1-2

```typescript
type T = { x: number };
type U = { x: number; y: number };
let a: T = { x: 1 };
let b: T = { x: 1, y: 2 };
let c: U = { x: 1 };
let d: U = { x: 1, y: 2 };
a = d;
console.log(a.y);
console.log(d.y);
```

<Answer>

正解: 4 行目、5 行目、8 行目

- 4 行目のようにプロパティを直接記述する場合は、余分なプロパティが含まれているとエラーが出ます。7 行目との違いに注意してください。
- 5 行目は、必要なプロパティが不足しているためエラーが出ます。
- 7 行目は、`U` 型は `T` 型の部分集合であるためエラーは出ません。
- 8 行目は、7 行目で `a` に `d` を代入しているため問題なさそうに見えますが、`a` は `T` 型だと宣言されているため、`y` プロパティを持たないという扱いになり、エラーが出ます。このように、余分なプロパティを持つオブジェクトを代入できても、余分なプロパティにアクセスすることはできません。
- 9 行目は、`U` 型は `y` プロパティを持つためエラーは出ません。

</Answer>

---

## 問題 2

TypeScript を用いて、以下の要件を満たす関数 `welcome` を作成してください。

- 引数として `User` 型のオブジェクトを受け取る。`User` 型は、下にあるコードの通りに定義する。ここで、`type` プロパティはユーザーの種類 (ゲスト、一般会員、プレミアム会員)、`name` プロパティはユーザーの名前、`daysLeft` プロパティはプレミアム会員の有効期間である。
- `type` プロパティの値に応じて、以下の内容をコンソールに表示する(`xxx` の部分には適切な情報を当てはめる)。
  - `type` が `"guest"` ならば、`ようこそ ゲストさん`
  - `type` が `"general"` ならば、`ようこそ xxxさん`
  - `type` が `"premium"` ならば、`ようこそ xxxさん プレミアム会員の有効期間は残りxxx日です`

```typescript
type Guest = { type: "guest" };
type General = { type: "general"; name: string };
type Premium = { type: "premium"; name: string; daysLeft: number };
type User = Guest | General | Premium;

function welcome(user: User) {
  // ここに関数の内容を記述
}

// 使用例
welcome({ type: "guest" }); // ようこそ ゲストさん
welcome({ type: "general", name: "太郎" }); // ようこそ 太郎さん
welcome({ type: "premium", name: "太郎", daysLeft: 30 }); // ようこそ 太郎さん プレミアム会員の有効期間は残り30日です
```

<Answer>

このように、共通のプロパティ (ここでは `type`) を用いて複数の型を判別できるようにした型は**タグ付きユニオン**などと呼ばれます。TypeScript ではタグ付きユニオンへのサポートが手厚く、条件分岐を行うと自動で型が絞り込まれます。

```typescript
type Guest = { type: "guest" };
type General = { type: "general"; name: string };
type Premium = { type: "premium"; name: string; daysLeft: number };
type User = Guest | General | Premium;

function welcome(user: User) {
  if (user.type === "guest") {
    // この中では user は Guest 型として扱われる
    console.log(`ようこそ ゲストさん`);
  } else if (user.type === "general") {
    // この中では user は General 型として扱われる
    console.log(`ようこそ ${user.name}さん`);
  } else {
    // この中では user は Premium 型として扱われる
    console.log(
      `ようこそ ${user.name}さん プレミアム会員の有効期間は残り${user.daysLeft}日です`,
    );
  }
}
```

<ViewSource url={import.meta.url} path="_samples/welcome" noCodeSandbox />

</Answer>

---

## 問題 3

次の関数 `count` は、配列 `a` の各要素を引数として関数 `f` を実行し、戻り値が `true` となる要素の個数を返す関数です。ただし、`f` の戻り値は論理値 (`true` または `false`) とします。ジェネリクスを用いて適切な型をつけてください。

```typescript
function count(a, f) {
  let result = 0;
  for (const x of a) {
    if (f(x)) result += 1;
  }
  return result;
}

// 使用例
console.log(count([1, 2, 3], (x) => x >= 2)); // 2
console.log(count(["a", "aa"], (x) => x.length === 2)); // 1
```

<Answer>

論理値は `boolean` 型です。

戻り値の型は推論されるため、省略しても構いません。

```typescript
function count<T>(a: T[], f: (x: T) => boolean): number {
  let result = 0;
  for (const x of a) {
    if (f(x)) result += 1;
  }
  return result;
}
```

<ViewSource url={import.meta.url} path="_samples/count" noCodeSandbox />

</Answer>
