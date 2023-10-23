---
title: 非同期処理 (発展)
description: await、async と Promise オブジェクト
---

<!--

TODO: Answer追加
FIXME LATER: import削除
-->

import Term from "@site/src/components/Term";
import Answer from "@site/src/components/Answer";
import ViewSource from "@site/src/components/ViewSource";

## await、async

JavaScriptでは、データベースへの接続・別のウェブサイトからの画像のダウンロード・ファイルの読み書き など、JavaScript処理以外で時間のかかる操作が多数存在します。
それぞれの処理のたびに処理を止めていては、ウェブサイトの読み込みにとてつもない時間がかかってしまいます。
(例えば、画像一枚の読み込みに500msかかると仮定すると、画像100枚の読み込みに50秒もかかってしまいます)

しかし実際は、読み込みに50秒もかかるウェブサイトは存在しません。
なぜでしょうか？

実は、`Promise` オブジェクトというものと、`async`、`await`という特別なキーワードを使うことで関数を<Term type="asynchronousProcess">非同期的に処理</Term>しています。
実際に<Term type="asynchronousProcess">非同期処理</Term>を書いてみましょう。

次の 2 つのコードを同じJavaScriptファイルにコピーし、`nodejs` で実行してみてください。

```js title="main.js"
/* 補足: このコードでは、JavaScript外部での時間のかかる操作を
   再現しています。のちの Promise オブジェクトのセクションで解説するので、
   今理解する必要はありません。 */
function myPromise(number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Foo: " + number);
    }, 3000);
  });
}
```

```js
async function myFunction() {
  console.log("Start");
  const myWord = await myPromise(10);
  console.log("End");
  console.log(myWord);
}

myFunction();
console.log("Doing another work...");
```

```shell title="TERMINAL"
$ node main.js
```

上のコードを実行すると、コンソールに

```shell title="OUTPUT"
Start
Doing another work...
End
Foo: 10
```

と表示されるはずです。何が起こっているのでしょうか？

重要なのは、3 行目の

<!-- prettier-ignore-->
```js
  const myWord = await myPromise(10);
```

です。このように、`await` キーワードを JavaScript 外部で時間のかかる処理につけると、関数の処理の実行を一時停止して、JavaScript外部の処理が終わるまで文字通り「待って」くれます。
そのため、3 秒後に `Foo: 10` が返り値として返され、コンソールに `End` と `Foo: 10` が表示されます。

もう一つ重要なキーワードが、1 行目の

<!-- prettier-ignore-->
```js
async function myFunction(){
```

の `async` キーワードです。`await` を内部で使う関数は、定義するときに `function` の前に `async` とつけ、「この関数は<Term type="asynchronousProcess">非同期的に処理</Term>する」と宣言する**必要があります**。
これにより、`myPromise` 関数で処理を一時停止したときにメインスレッドに戻って `Doing another work...` と表示することができます。

このようにして、時間のかかる `myPromise` 関数のような処理を<Term type="asynchronousProcess">非同期処理</Term>して、ウェブサイトの読み込みにかかる時間を短縮しています。

:::info
`await` は「自身の後ろに来る、時間のかかる処理を別のことをしながら待つ」という演算子です。

ここでいう「時間のかかる処理」も実は値です。 (`Promise` オブジェクトの節で説明します)

そのため、「時間のかかる処理」を変数に代入してから `await` することも、`await` 演算子の付いた式を直接別の関数に渡すことも可能です。

```js
async myFunction() {
  const promise = myPromise(10);
  console.log(await promise);
}
```

:::

## 並列の<Term type="asynchronousProcess">非同期処理</Term>

これで並列処理を完全にマスターしましたね！以下のように書けば 10 個の `myPromise` を同時に計算できるはずです！

```js
// 以下、myPromise 関数の実装は省略します。必要に応じて上のコードをコピーしてください。

async function repeatMyPromise() {
  for (let i = 0; i < 10; i += 1) {
    const result = await myPromise(i);
    console.log(result);
  }
}

repeatMyPromise();
```

このコードを実行すると分かりますが、このように書くだけでは 10 個の処理を並列に<Term type="asynchronousProcess">非同期処理</Term>できません。
なぜでしょうか？

これは、`await` キーワードの、時間のかかる処理をその場で待つ性質によります。
`await` キーワードの時点で処理が一時停止するので、同じ関数の中に`await` を連ねるだけでは結局10個の処理を待つことになってしまいます。

代わりに、このように書くと並列に処理ができます。

```js
async function printPromise(number) {
  const result = await myPromise(number);
  console.log(result);
}

for (let i = 0; i < 10; i++) {
  printPromise(i);
}
```

`printPromise` 関数は 非同期的に処理する と宣言されているため、このように書くことで10個の操作を非同期的に処理することが可能になります。

## `Promise.all`

画面に表示したいだけなら上のように書けば十分ですが、全ての<Term type="asynchronousProcess">非同期処理</Term>の結果を利用して別の処理を行いたいときもありますよね？

そんなときは `Promise.all` 関数を使います。上にある例で例えると、

```js
async function PromiseAll() {
  // 配列を作成する [0, 1, 2, ... 8, 9]
  const array = [];
  for (let i = 0; i < 10; i++) {
    array.push(i);
  }

  // 配列を 数字 -> myPromise(数字) に map する
  array.map((x) => myPromise(x));

  // await Promise.all(配列) とする
  const result = await Promise.all(array);

  // ここに結果を使う処理を書くことができる
  // 例: コンソールに表示する
  console.log(result);
}
PromiseAll();
```

とします。`Promise.all` 関数に配列を渡すとすると複数の時間のかかる処理をひとつにまとめることができるので、それを `await` します。

:::tip

#### staticメソッド

`Promise.all` は、クラスの章で扱った「メソッド」です。
オブジェクトのインスタンスではなくクラスから呼び出しているので、違和感をおぼえるかもしれません。
これは `static` メソッドと言って、各インスタンスではなくクラスに直接紐づいているメソッドです。
ここでは重要ではないので、詳しくは [MDN](https://developer.mozilla.org/ja/docs/Glossary/Static_method) を参照してください。
:::

:::caution
`await` は `async` キーワードをつけた関数内部でしか適用できないため、関数以外では使用できません。
上記のように関数に名前を付けて定義する以外にも、無名関数をその場で実行する即時関数というものを利用する方法もあります。

```js
(async () => {
  console.log("Start");
  const myWord = await myPromise(10);
  console.log("End");
  console.log(myWord);
})();
```

:::

:::info 並列処理と非同期処理の違い
並列処理と非同期処理はよく混同されがちですが、全くの別物です。
並列処理がコンピューター内部で複数のスレッドを同時に動かして、計算量が大きく負荷のかかる処理を高速に行うことであるのに対し、非同期処理はファイルの読み書き、インターネットへのアクセスなどのスレッド外の処理の待ち時間に別の処理をすることです。

![並列処理と非同期処理の画像](./async-and-parallel.png)

この図の緑色の矢印はメインの処理、黄色は別の処理です。
:::

## 練習問題

```js
function fetchDataFromDatabase() {
  return new Promise((resolve, reject) => {
    const user = { name: "田中", age: 18 };
    setTimeout(() => {
      resolve(user);
    }, 3000);
  });
}
```

を使用して、ユーザーの名前と年齢を画面に表示してみましょう。

<Answer title="データベース？">

```js
// 上のデータベース実装は省略
async function showData() {
  const user = await fetchDataFromDatabase();
  document.write(`ユーザーの名前は ${user.name} 、年齢は ${user.age} 歳です。`);
}
showData();
document.write("接続中...");
```

<ViewSource url={import.meta.url} src="./_samples/fetch-db-data" />

</Answer>

## Promise オブジェクト

先ほどのコード

```javascript
function myPromise(number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Foo: " + number);
    }, 3000);
  });
}
```

をより深く理解してみましょう。

```javascript
function myPromise(number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Foo: " + number);
    }, 3000);
  });
}

const promise = myPromise(10);
console.log(promise);
```

を実行して、コンソールを確認してみましょう。 _`Promise {<pending>}`_ なるものが表示されるはずです。これは何でしょうか？

先ほど「JavaScript外部で時間のかかる処理」と言っていたのは、実は`Promise` オブジェクトを返す処理でした。
`Promise` オブジェクトは、`Promise` クラスのコンストラクタにコールバック関数を渡して作られるインスタンスです。
主に第一引数を `resolve`、第二引数を `reject` と命名した無名関数が渡されます。
`Promise` が成功した時には第一引数、失敗した時には第二引数にそれぞれ結果を渡して関数実行されます。
`resolve` または `reject` 実行時にそれぞれの関数に渡された引数が `PromiseResult` に代入されます。

上の例では、「3秒後に `Foo: (数)` として `resolve`する」という操作を `Promise` オブジェクトに渡しています。

**実はこの `Promise` オブジェクト自体は、非同期処理をする関数を指定した瞬間に生成されます。**
**非同期的に処理されるのは `Promise` オブジェクト内の `resolve`、`reject` です。**

`Promise`オブジェクトには、処理が終わった際の処理を指定するための `then` メソッド、`catch` メソッド、`finally` メソッドが定義されています。

また、`Promise` オブジェクトには、プロミスの状態を表す `PromiseState` プロパティ、プロミスの結果を表す`PromiseResult`が定義されています。
`PromiseState` プロパティは、`pending` (初期状態)、`fulfilled` (`resolve` が実行された後)、`rejected` (`reject` が実行された後)の 3 種類の値のうち 1 つをとります。
しかし、この2つのプロパティは 内部プロパティなので、直接アクセスすることはできません。代わりに、これから述べるメソッドを使います。

## `then` メソッド

`then` メソッドは、引数にコールバック関数を 1 つとり、`Promise` オブジェクトの `PromiseState` が `fulfilled` になった後 (つまり `resolve` 関数が実行された後)にコールバック関数を実行します。
コールバック関数の引数には `PromiseResult` が渡されます。

`then` メソッドは、`PromiseState` が `fulfilled`、`PromiseResult` がコールバック関数の返り値である新しい `Promise` オブジェクトを生成して返します。そのため、メソッドチェーンのような書き方をすることができます。
`rejected` の状態にある `Promise` オブジェクトに 1 引数の `then` メソッドを適用すると、コールバック関数は実行されず同じ状態の `Promise` オブジェクトを返すので、一定数チェーンしてから `catch` でエラーハンドリングする、といったこともできます。

`then` メソッドは第二引数にエラーハンドリング用の関数をとることもできますが、可読性が下がるので後述する `catch` メソッドを使いましょう。

例:

```js
function alwaysSuccess() {
  return new Promise((resolve, reject) => {
    resolve("success!");
  });
}

alwaysSuccess()
  .then((result) => console.log(result)); // success! と表示される
  .then((result) => console.log(result)); // undefined と表示される (1個めの .then で返り値を定義していないため)
```

## `catch` メソッド

`catch` メソッドは、引数にコールバック関数を 1 つとり、`Promise` オブジェクトの `PromiseState` が `rejected` になった後 (つまり `reject` 関数が実行された後) にコールバック関数を実行します。`then` メソッドと同様に、コールバック関数の引数には `PromiseResult` が渡されます。
`rejected` を文字通り「catch」するので、エラーハンドリングに使います。

`catch` メソッドは、`PromiseState` が `fulfilled`、`PromiseResult` がコールバック関数の返り値である、新しい `Promise` オブジェクトを返します。そのため、`then` チェーンの途中に挟んでエラーハンドリングに使うことができます。

`fulfilled` の状態にある `Promise` オブジェクトに `catch` メソッドを適用すると、コールバック関数は実行されず同じ状態の `Promise` オブジェクトを返します。そのため、`catch` メソッドの後に連続して `then` メソッドを記述することが可能です。

`rejected` になる可能性のある `Promise` オブジェクトは、`catch` メソッドによってハンドリングされる必要があります。

例:

```js
/* stringが "success" ならば "Operation Success!" に resolve し、
  そうでなければ string に reject する Promise を返す関数。 */
function assertSuccess(string) {
  return new Promise((resolve, reject) => {
    if (string === "success") resolve("Operation Success!");
    else reject(string);
  });
}

assertSuccess("success")
  .then((result) => console.log(result)) // Operation Success! と表示される
  .catch((result) => console.log("Operation failed with string: ", result)); // 何も表示されない

assertSuccess("bar")
  .then((result) => console.log(result)) // 何も表示されない
  .catch((result) => console.log("Operation failed with string: ", result));
// Operation failed with string: bar と表示される
```

## `finally` メソッド

`finally` メソッドは、引数に、引数をとらない関数 (コールバック関数) を 1 つとり、`Promise` オブジェクトの `PromiseState` が `pending` でなくなった後 (`fulfilled` または `reject` になった後)にコールバック関数を実行します。データベースとの接続の切断・ファイルの読み込み停止など、成功・失敗にかかわらず実行する処理に使用します。

`finally` メソッドもまた、新しい `Promise` オブジェクトを返します。

## 練習問題

1. `Promise`オブジェクトを使って、1 秒後に 引数が 2 で割り切れたら`resolve`、割り切れなかったら`reject` する関数 `assertEven` を定義してみましょう。
2. 上の `assertEven` 関数を使い、コンソールに** 1 秒おきに**以下のような表示をしてみましょう。

```console
-----------------------------
 6 can be divided by two!
-----------------------------
```

```console
-----------------------------
 5 cannot be divided by two!
-----------------------------
```

<Answer title="Assert Even">

```js
function wait(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), time);
  });
}

function assertEven(number) {
  return new Promise((resolve, reject) => {
    wait(1000).then(() => {
      if (number % 2 === 0) resolve(` ${number} can be divided by two!`);
      else reject(` ${number} cannot be divided by two!`);
    });
  });
}

function render(number) {
  return assertEven(number)
    .then((result) => {
      console.log("-----------------------------");
      console.log(result);
    })
    .catch((error) => {
      console.log("-----------------------------");
      console.log(error);
    })
    .finally(() => {
      console.log("-----------------------------");
    });
}

function main() {
  render(6).then(() => render(5));
}

main();
```

<ViewSource url={import.meta.url} src="./_samples/assert-even-promise-method" />

### 別解

`await`、`async` を用いると、このように書くこともできます。

```js
function wait(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), time);
  });
}

async function assertEven(number) {
  await wait(1000);
  if (number % 2 === 0) return ` ${number} can be divided by two!`;
  else throw ` ${number} cannot be divided by two!`;
}

async function render(number) {
  try {
    const result = await assertEven(number);
    console.log("-----------------------------");
    console.log(result);
  } catch (error) {
    console.log("-----------------------------");
    console.log(error);
  } finally {
    console.log("-----------------------------");
  }
}

async function main() {
  await render(6);
  await render(5);
}

main();
```

</Answer>
