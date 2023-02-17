---
title: TypeScript
---

import { SiTypescript } from "react-icons/si";
import CodeBlock from '@theme/CodeBlock';
import Term from "@site/src/components/Term";
import ViewSource from "@site/src/components/ViewSource";
import Answer from "@site/src/components/Answer";
import ExternalVideoPlayer from "@site/src/components/ExternalVideoPlayer";
import typescriptDemoVideo from "./typescript-demo.mp4";
import setupTypeScriptNodeVideo from "./setup-typescript-node.mp4";
import typesPackageVideo from "./types-package.mp4";
import viteTypescriptVideo from "./vite-typescript.mp4";

## JavaScript とデータ型

次のような関数を考えてみましょう。

```javascript
function formatDate(date) {
  return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
}
```

この関数の `date` 引数には、どのような値を指定すれば良いでしょうか。答えは、[`Date` オブジェクト](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Date)を指定することです。`formatDate(new Date("2022-01-01"))` は動作しますが、`formatDate("2022-01-01")` はエラーになってしまいます。しかも、エラーが発生するかどうかは実際に実行してみるまでわかりません。

上のような単純なプログラムならこういった問題は起きにくいですが、プログラムの規模が大きくなるにつれ、「どういった値がやりとりされているのか」という情報を把握することが重要になってきます。こういった情報を、**データ型**、あるいは単に**型**と呼びます。

[TypeScript](https://www.typescriptlang.org/) を用いると、プログラム中にデータ型を記述できるようになります。TypeScript は、Microsoft 社によって開発された、JavaScript に<Term type="transpile">トランスパイル</Term>して用いられる言語です。

TypeScript における型は、通常 `:` の記号に続けて記述します。例えば、先程のプログラムを TypeScript を用いて書き直すと、次のようになります。引数の部分に型指定が入っているところに注目してください。

```typescript
function formatDate(date: Date) {
  return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
}
```

これにより、次のような開発者体験が得られます。

- `date.` と入力されたタイミングで、使用可能なメソッドが全て表示されます
- 誤った型の引数 (動画内では文字列) を指定すると、エラーが表示されるようになります

<video src={typescriptDemoVideo} controls autoPlay muted loop />

:::tip 静的型言語との比較
C++ や Java などの一般的なプログラミング言語では、型の情報は実行に何らかの影響を与えますが、TypeScript は JavaScript にトランスパイルされる言語であり、実行時には型の情報は一切利用されません。
:::

## TypeScript を使って Node.js のプログラムを記述する

TypeScript を用いて Node.js のプログラムを作成するには、次の手順に従ってください。

<video src={setupTypeScriptNodeVideo} controls />

まずは、プロジェクトルートに `package.json` を作成します。`npm init` を実行すればよいのでした。

続いて、

```shell
npm install -D typescript
```

を実行し、[typescript パッケージ](https://www.npmjs.com/package/typescript)をインストールします。`-D` オプションは「開発時のみに使用する」という意思表示になります。`package.json` に記録される方法が少しだけ変わります。

続いて、`main.ts` ファイルを作成します。TypeScript ファイルの拡張子は通常 `.ts` です。今回は、

```typescript title="main.ts"
const language: string = "TypeScript";
console.log(`Hello ${language}!`);
```

としました。

TypeScript ファイルの作成が終わったら、<Term type="npxCommand">`npx` コマンド</Term>で [TypeScript パッケージを実行](https://www.typescriptlang.org/docs/handbook/compiler-options.html)し、TypeScript ファイルを JavaScript ファイルにトランスパイルします。パッケージ名と異なり、`tsc` となるので注意しましょう。

```shell
npx tsc main.ts
```

すると、同名の JavaScript ファイルが生成されます。このファイルを実行すれば、通常の JavaScript として実行できます。

## TypeScript の基礎

TypeScript を試すには、Microsoft が提供している [TS Playground](https://www.typescriptlang.org/play) を用いると便利です。必要に応じて利用してください。

### 型を記述できる場所

TypeScript の型は、関数の引数や戻り値、変数の後に `:` とともに記述できます。

```typescript
// add は number 型の引数 a, b をとり number 型の値を返す関数
function add(a: number, b: number): number {
  return a + b;
}

// sum は number 型の変数
let sum: number = add(3, 4);
```

データ型が誤っている場合、TypeScript はエラーを出力します。

```typescript
sum = "7"; // Type 'string' is not assignable to type 'number'.

add("3", "4"); // Argument of type 'string' is not assignable to parameter of type 'number'.
```

### データ型と値

TypeScript のデータ型は、**全ての値を含む集合 `unknown` の部分集合**になります。ある値 `v` が集合 `T` に属するとき、`v` は `T` 型であるといいます。例えば、数値 `1` は `1` 型、`number` 型、`unknown` 型のいずれにも当てはまります。なお、空集合は `never` 型です。

```typescript
// すべて正しい
const a: unknown = 1;
const b: number = 1;
const c: 1 = 1; // 左辺の 1 はデータ型 (unknown の部分集合) としての 1

// never 型にはどんな値も代入できない
// const d: never = 1;
```

![TypeScript のデータ型](./typescript-types.drawio.svg)

:::tip `any` 型
TypeScript の標準設定では、型が判明しなかった場合、`any` 型が指定されたものとみなされます。`any` 型の値には、どんな操作でも許容されます。`any` 型の値はどんな型の変数にも代入できますし、`any` 型の変数にはどんな値でも代入できます。上の集合のどの部分にも当てはまりません。

```typescript
const strangeValue: any = 1;

// TypeScript は誤りを検出できないが、実行時にエラーになる
strangeValue.strangeMethod();
```

:::

### データ型の別名

`type` 宣言を用いると、データ型に対して別名を付けられます。

```typescript
type Age = number;

// 変数 age は Age (number) 型
const age: Age = 18;
```

:::tip
型の名前には通常<Term type="pascalCase">パスカルケース</Term>が用いられます。
:::

### オブジェクト型

オブジェクト型では、プロパティの名前や、値の型が指定できます。

```typescript
// Student は string 型の name プロパティと number 型の age プロパティを持つオブジェクト
type Student = {
  name: string;
  age: number;
};

let student: Student = { name: "田中", age: 18 };
```

なお、余分なプロパティを持つオブジェクトでも問題なく代入できます。次の例から、`Teacher` は `Student` の部分集合であることが分かります。

```typescript
type Teacher = {
  name: string;
  age: number;
  subject: string;
};

let teacher: Teacher = { name: "鈴木", age: 18, subject: "数学" };
student = teacher;

// Property 'subject' is missing in type 'Student' but required in type 'Teacher'.
teacher = student;
```

### 配列型

型 `T` の配列型は、`T[]` のように記述できます。また、`T` が `U` の部分集合であれば、`T[]` は `U[]` の部分集合になります。

```typescript
const numbers: number[] = [1, 2, 3];

// number[] は unknown[] の部分集合
const unknowns: unknown[] = numbers;
```

### 関数型

関数型では、引数や戻り値の型が指定できます。引数名は異なっていても同じ型だとみなされます。

```typescript
// BinaryNumberOperator は number 型の引数 2 つを受け取って number 型の値を返す関数
type BinaryNumberOperator = (x: number, y: number) => number;

function add(a: number, b: number): number {
  return a + b;
}

const operator: BinaryNumberOperator = add;
```

引数の数が少ない関数型は、多い関数型の部分集合とみなされます。

```typescript
function increment(a: number): number {
  return a + 1;
}

// (a: number) => number は (a: number, b: number) => number の部分集合
const operator2: BinaryNumberOperator = increment;
```

### 型演算

2 つの型に対し、集合の和や積 (共通部分)を求める記号が利用できます。

| 記号                | 意味     |
| ------------------- | -------- |
| `&`                 | 共通部分 |
| <code>&#124;</code> | 合併     |

```typescript
type Student = { name: string; major: string };
type Programmer = { name: string; language: string };
const studentProgrammer: Student & Programmer = {
  name: "田中",
  major: "数学",
  language: "TypeScript",
};

const hand: "グー" | "チョキ" | "パー" = "グー";
```

### 型推論

文脈からデータ型が明らかな場合は、型定義の記述を省略できます。

```typescript
// age は number 型
let age = 18;

// Type 'string' is not assignable to type 'number'.
age = "19";

// 戻り値の型が推論されるため、add は (a: number, b: number) => number 型
function add(a: number, b: number) {
  return a + b;
}
```

関数型を要求する部分に関数式を指定する場合、その引数の型が推論されます。

```typescript
type BinaryNumberOperator = (a: number, b: number) => number;

// a や b は number に推論される
const operator: BinaryNumberOperator = (a, b) => a + b;

// イベントハンドラの記述の際に便利
window.onload = (e) => {
  // e は Event 型
};
```

### ジェネリクス

引数を一つ受け取り、その値をそのまま返す関数を考えてみよう。

```typescript
function identity(x) {
  return x;
}
```

こういった関数では、引数 `x` はどんな型の値も指定できます。つまり、`x` は `unknown` 型とするのが適切なはずです。しかしながら、引数を `unknown` 型としてしまうと、戻り値が `unknown` 型となってしまい、戻り値に対する操作が一切不可能になってしまいます。

```typescript
function identity(x: unknown) {
  return x;
}

// Object is of type 'unknown'.
identity(1).toString();
```

TypeScript では、型パラメータを用いることで、この問題を解決できます。型パラメータは、通常の引数と異なり、型を指定するための特殊な引数です。JavaScript に<Term type="transpile">トランスパイル</Term>されるタイミングで削除されます。

```typescript
// T は型パラメータ
// identity は T 型の引数を受け取って T 型の戻り値を返す関数
function identity<T>(x: T): T {
  return x;
}

// T に number を指定したので、ここでは identity は number 型の引数を受け取って number 型の戻り値を返す関数
identity<number>(1).toString();

// 文脈から型パラメータが明らかな場合は推論される
// この場合は T は number に推論される
identity(1).toString();
```

こういった言語機能は他の多くのプログラミング言語でも用意されており、[ジェネリクス](https://www.typescriptlang.org/docs/handbook/2/generics.html)と呼ばれます。

`type` 宣言でも型パラメータを利用できます。

```typescript
type BinaryOperator<T> = (a: T, b: T) => T;

// add は (a: number, b: number) => number 型
const add: BinaryOperator<number> = (a, b) => a + b;
```

## TypeScript と npm

npm でインストールしたパッケージが TypeScript に対応している場合、下の図のように、npm のパッケージのウェブサイトに <SiTypescript style={{ verticalAlign: "text-bottom" }} /> アイコンが表示されます。

![npm パッケージの TypeScript 対応](./npm-typescript.png)

`DT` アイコンがついているパッケージは、`@types/パッケージ名` という名称のパッケージをインストールすることで、TypeScript からパッケージが利用可能になります。例えば、`@types/express` パッケージをインストールすることにより、`express` パッケージが TypeScript から利用できるようになります。

<video src={typesPackageVideo} controls />

`@types` パッケージのインストール前後で `app` の型が変わっていることが分かります。

## フロントエンドにおける TypeScript の利用

Vite は、標準で TypeScript のトランスパイラが内蔵されています。新しくプロジェクトを作成する際は、テンプレートを選択する際に TypeScript のテンプレートを使用しましょう。

<video src={viteTypescriptVideo} controls />

:::tip `tsconfig.json`
この方法でプロジェクトを作成すると、`tsconfig.json` というファイルが生成されます。TypeScript は、さまざまな JavaScript のニーズに合わせてカスタマイズできるようになっており、その設定を記述するためのファイルが `tsconfig.json` です。

[公式ドキュメント](https://www.typescriptlang.org/tsconfig) には、全てのオプションの詳細な説明が記述されています。特に、[`strict` オプション](https://www.typescriptlang.org/tsconfig#strict)は、TypeScript の能力を大幅に上昇させることができるので、有効にすることが推奨されています。`typescript` パッケージを直接インストールしたプロジェクトでは、`npx tsc --init` コマンドによりこのファイルを生成できます。
:::

## 課題

1. `string & number` 型は何型と等しいでしょうか。
2. 次のように定義される型 `T` に対して使用可能なプロパティは何でしょうか。

   ```typescript
   type T = { name: string; age: number } | { name: string; subject: string };
   ```

3. 次の型のうち、`(v: string) => string` 型とみなせる (部分集合である) ものを全て選んでください。
   - `(v: unknown) => string`
   - `(v: never) => string`
   - `(v: string) => unknown`
   - `(v: string) => never`
4. 次の関数 `apply` は、関数を適用する関数です。ジェネリクスを用いて適切な型をつけてください (ヒント: 引数と戻り値を表す型パラメータを定義しましょう)。

   ```typescript
   function apply(f, x) {
     return f(x);
   }
   ```

5. フロントエンド・バックエンドともに TypeScript を利用するアプリケーションを作成し、公開してみてください。

<Answer>

1. `never` 型

   ```typescript
   type StringAndNumber = string & number; // never
   ```

2. `name` のみ

   ```typescript
   declare const t:
     | { name: string; age: number }
     | { name: string; subject: string };
   ```

3. `(v: unknown) => string` と `(v: string) => never`

   ```typescript
   declare const a: (v: unknown) => string;
   declare const b: (v: never) => string;
   declare const c: (v: string) => unknown;
   declare const d: (v: string) => never;
   let e: (v: string) => string;
   e = a;
   // e = b;
   // e = c;
   e = d;
   ```

4. ```typescript
   function apply<T, U>(f: (x: T) => U, x: T): U {
     return f(x);
   }
   ```

   <ViewSource url={import.meta.url} path="_samples/apply" noCodeSandbox />

</Answer>
