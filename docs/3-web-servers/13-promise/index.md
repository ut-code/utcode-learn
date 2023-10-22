---
title: 非同期処理 (発展)
description: await、async と Promise オブジェクト
---

import Term from "@site/src/components/Term";
import Answer from "@site/src/components/Answer";
import ViewSource from "@site/src/components/ViewSource";

## await、async

JavaScriptでは、データベースへの接続・別のウェブサイトからの画像のダウンロード・ファイルの読み書き など、JavaScript処理以外で時間のかかる操作が多数存在します。
それぞれの処理のたびに止まっていては、ウェブサイトの読み込みにとてつもない時間がかかってしまいます。
(例えば、画像一枚の読み込みに500msかかると仮定すると、画像100枚の読み込みに50秒もかかってしまいます)

しかし実際は、読み込みに50秒もかかるウェブサイトは存在しません。
なぜでしょうか？

実は、`Promise` オブジェクトというものと、`async`、`await`という特別なキーワードを使うことで関数を<Term type="asynchronousProcess">非同期的に処理</Term>しています。
実際に<Term type="asynchronousProcess">非同期処理</Term>を書いてみましょう。

次の 2 つのコードを同じJavaScriptファイルにコピーしてください。

```js
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

上のコードを実行すると、コンソールに

`Start`
`Doing another work...`
`End`
`Foo: 10`

と表示されるはずです。何が起こっているのでしょうか？

重要なのは、3 行目の

<!-- prettier-ignore-->
```js
  const myWord = await myPromise(10);
```

このように、`await` キーワードを JavaScript 外部で時間のかかる処理につけると、処理の実行を一時停止して、JavaScript外部の処理が終わるまで文字通り「待って」くれます。
そのため、3 秒後に `Foo: 10` が返り値として返され、コンソールに `End` と `Foo: 10` が表示されます。

もう一つ重要なキーワードが、1 行目の

<!-- prettier-ignore-->
```js
async function myFunction(){
```

の `async` キーワードです。`await` を内部で使う関数は、定義するときに `function` の前に `async` とつけ、「この関数は非同期的に処理する」と宣言する必要があります。
これにより、`myPromise` 関数で処理を一時停止したときにメインスレッドに戻って `Doing another work...` と表示できます。

このようにして、時間のかかる `myPromise` 関数のような処理を<Term type="asynchronousProcess">非同期処理</Term>して、ウェブサイトの読み込みにかかる時間を短縮しています。

## 並列の非同期処理

これで並列処理を完全にマスターしましたね！以下のように書けば 10 個の `myPromise` を同時に計算できるはずです！

```js
// 以下、myPromise 関数の実装は省略します。上からコードをコピーしてきてください。

async function repeatFunction() {
  for (let i = 0; i < 10; i += 1) {
    const result = await myPromise(i);
    console.log(result);
  }
}

repeatFunction();
```

このコードを実行すると分かりますが、このように書くだけでは 10 個の処理を並列に処理できません。
なぜでしょうか？

これは、`await` キーワードの、時間のかかる処理をその場で待つ性質によります。
`await` キーワードの時点で処理が一時停止するので、同じ関数の中に`await` を連ねるだけでは結局10個の処理を待つことになってしまいます。

つまり、100個の処理を上記の方法で並列で行うには 100回 `async function...`と書いて実行しなくてはいけません。面倒なうえに可変個の非同期処理を並列に待つこともできません。

そんなときは、`Promise.all` 関数を使います。上にある例を例にすると、

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

  // 表示する
  console.log(result);
}
PromiseAll();
```

とします。`Promise.all` 関数に配列を渡すとすると自動で並列の非同期処理にしてくれるので、それを `await` します。

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

<!-- 重要ではない
:::note
`Top-level await` というものが最近実装され、JavaScript モジュール(ECMAScript モジュール) 内では、関数にしなくても `await` キーワードが使えるようになりました。
:::
-->

:::info 並列処理と非同期処理の違い
並列処理と非同期処理はよく混同されがちですが、全くの別物です。
並列処理がコンピューター内部で複数のスレッドを同時に動かして、計算量が大きく負荷のかかる処理を高速に行うことであるのに対し、非同期処理はファイルの読み書き、インターネットへのアクセスなどのスレッド外の処理の待ち時間に別の処理をすることです。

![並列処理と非同期処理の画像](./async-and-parallel.png)

この図の緑色の矢印はメインの処理、黄色は別の処理です。
:::

## 確認問題

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
async showData(){
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

を実行して、コンソールを確認してみましょう。見知らぬ _`Promise {<pending>}`_ なるものが表示されるはずです。これは何でしょうか？

先ほど「JavaScript外部で時間のかかる処理」と言っていたのは、実は`Promise` オブジェクトを返す処理でした。
`Promise` オブジェクトは、`Promise` クラスのコンストラクタに引数が 2 つのコールバック関数を渡して作られるインスタンスです。
主に第一引数を `resolve`、第二引数を `reject` と命名した無名関数が渡されます。
`Promise` が成功した時には第一引数、失敗した時には第二引数にそれぞれ結果を渡して関数実行されます。
関数実行時にそれぞれの関数に渡された引数が `PromiseResult` に代入されます。

上の例では、「3秒後に `Foo: (数)` として `resolve`する」という操作を `Promise` オブジェクトに渡しています。

`Promise`オブジェクトの処理が終わった際の処理を指定するための `then` メソッド、`catch` メソッド、`finally` メソッドが定義されています。

また、`Promise` オブジェクトには、プロミスの状態を表す `PromiseState` プロパティ、プロミスの結果を表す`PromiseResult`が定義されています。
`PromiseState` プロパティは、`pending`、`fulfilled`、`rejected` の 3 種類の値のうち 1 つをとります。
しかし、この2つのプロパティは 内部プロパティなので、直接アクセスすることはできません。上記のメソッドを使いましょう。

## `then` メソッド

`then` メソッドは、引数に、引数を１つとる関数 (コールバック関数) を 1 つとり、`Promise` オブジェクトの `PromiseState` が `fulfilled` になった後 (つまり `resolve` 関数が実行された後)にコールバック関数を実行します。
コールバック関数の引数には `PromiseResult` が渡されます。

`then` メソッドはそれ自体が新しい `Promise` オブジェクトを返すので、メソッドチェーンのような書き方をすることができます。
`rejected` の状態にある `Promise` オブジェクトに 1 引数の `then` メソッドを適用すると、コールバック関数は実行されず同じ状態の `Promise` オブジェクトを返すので、一定数チェーンしてから `catch` でエラーハンドリングする、といったこともできます。

`then` メソッドは第二引数にエラーハンドリング用の関数をとることもできますが、読みにくいので後述する `catch` メソッドを使いましょう。

## `catch` メソッド

`catch` メソッドは、引数に、引数を１つとる関数 (コールバック関数) を 1 つとり、`Promise` オブジェクトの `PromiseState` が `rejected` になった後 (つまり `reject` 関数が実行された後) にコールバック関数を実行します。`then` メソッドと同様に、コールバック関数の引数には `PromiseResult` が渡されます。

`catch` メソッドも新しい `Promise` オブジェクトを返します。`then` チェーンの

`fulfilled` の状態にある `Promise` オブジェクトに `catch` メソッドを適用すると、コールバック関数は実行されず同じ状態の `Promise` オブジェクトを返します。そのため、`catch` メソッドの後に連続して `then` メソッドを記述することが可能です。

## `finally` メソッド

`finally` メソッドは、引数に、引数をとらない関数 (コールバック関数) を 1 つとり、`Promise` オブジェクトの `PromiseState` が `pending` でなくなった後 (`resolve` か `reject` になった後)にコールバック関数を実行します。

`finally` メソッドもまた、新しい `Promise` オブジェクトを返します。

## `await`、`async` と`Promise` オブジェクトのメソッド群

`Promise` オブジェクトのメソッドは、すべて `await` と `async`、`try ~ catch` 文を利用して書き換えることが可能であり、その逆も可能です。

実は、`await` は実際に処理を待っているのではなく、処理が終わった後に実行する関数を指定するもので、`async` キーワードはトランスパイルの条件となるものです。

## 練習問題

1. `Promise`オブジェクトを使って、引数が 2 で割り切れたら`resolve`、割り切れなかったら`reject` する関数 `divideByTwo` を定義してみましょう。
2. 上の `divideByTwo` 関数の返り値の`Promise` オブジェクトに`then`、`catch`、`finally` メソッドを使い、
