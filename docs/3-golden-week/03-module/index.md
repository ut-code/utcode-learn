---
title: モジュールと npm
---
import CodeBlock from '@theme/CodeBlock';
import Term from "@site/src/components/Term";
import OpenInCodeSandbox from "@site/src/components/OpenInCodeSandbox";
import npmInitVideo from "./npm-init.mp4";
import npmInstallVideo from "./npm-install.mp4";

## 別のファイルに書かれたプログラム

Node.js では、あるファイルに書かれたプログラムは、別のプログラムからは読み込めません。よって、次の `main.js` はエラーになります。

```javascript title=sub.js
function add(a, b) {
  return a + b;
}
```

```javascript title=main.js
console.log(add(3, 4)); // Uncaught ReferenceError: add is not defined
```

別のファイルに書かれたプログラムを読み込むための手段として、Node.js では**モジュール**という仕組みが用意されています。JavaScript では、すべてのファイルがモジュールとして扱われます。

Node.js では、プログラム中で `exports` というオブジェクトが利用できます。`exports` オブジェクトは標準では空のオブジェクトですが、プログラム中から書き換えることができます。

`require` 関数に別のファイルを指定すると、そのファイルを実行した後にできる `exports` オブジェクトを取得できます。このとき、ファイル名は `.` から始めなければなりません。例を見てみましょう。

```javascript title=sub.js
exports.add = (a, b) => {
  return a + b;
};
```

```javascript title=main.js
const sub = require("./sub"); // sub = { add: (a, b) => { return a + b; } }
const add = sub.add;
document.write(add(3, 4));
```

:::tip 分割代入
[**分割代入**](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) の記法を用いると、オブジェクトからプロパティを取り出して変数に代入する操作を簡潔に記述できます。この記法を使用すると、上のプログラムは次のように簡略化できます。

```javascript title=main.js
const { add } = require("./sub");
document.write(add(3, 4));
```

:::

## 標準モジュール

Node.js の [`fs` 標準モジュール](https://nodejs.org/api/fs.html) を用いると、Node.js からファイルの読み書きを行うことができます。[`fs.readFileSync` 関数](https://nodejs.org/api/fs.html#fsreadfilesyncpath-options)は、ファイルの読み込みを行う関数で、第 1 引数にファイルを指定し、第 2 引数には文字コードを指定します。

```javascript title=main.js
const fs = require("fs");
console.log(fs.readFileSync("sample.txt", "utf-8"));
```

```plain title=main.js
Hello World
```

:::tip 文字コード
**文字コード**とは、文字のコンピューターによる表現です。`UTF-8` や `Shift_JIS` などさまざまな方式が定義されていますが、現在では通常 `UTF-8` を選んでおけば問題ありません。間違った方式を選んでしまうと、意図と異なる文字として解釈されてしまう現象 (**文字化け**)が起こります。
:::

### 課題

[`fs.writeFileSync` 関数](https://nodejs.org/api/fs.html#fswritefilesyncfile-data-options)を用いて、ファイルに文字列を書き出してみましょう。

## npm

Node.js における**パッケージ**とは、主に JavaScript ファイルをまとめていろいろな場所で利用可能にしたものです。[npm](https://docs.npmjs.com/about-npm) (Node Package Manager) は、Node.js の**パッケージマネージャー**で、このソフトウェアを通してパッケージを管理できます。

また、npm から利用されるパッケージを集積したサービス [npmjs.com](https://www.npmjs.com/) もまた、npm と呼ばれます。例として、日付や時刻の操作のために用いられる<Term type="library">ライブラリ</Term>である、[date-fns](https://www.npmjs.com/package/date-fns) パッケージを利用してみましょう。

npm を用いて開発を行うには、まず `npm init` コマンドを実行します。いくつか質問をされるので、Enter キーを押し続けて質問をスキップしましょう。完了すると、フォルダの中に `package.json` という名前のファイルが作成されます。このファイルは、npm によって管理されるフォルダに必ず 1 つ必要になるものです。

<video src={npmInitVideo} controls muted autoPlay loop />

続いて、npm のパッケージをインストールします。`npm install` に続けて、インストールしたいパッケージの名前を入力します。

```shell
npm install date-fns
```

これにより、フォルダの中に `package-lock.json` ファイルと、`node_modules` フォルダが作成され、内部にパッケージ本体がダウンロードされます。

<video src={npmInitVideo} controls muted autoPlay loop />

:::tip JSON
npm によって作成された `package.json` とは何者でしょうか。拡張子が `.json` のファイルには、**JSON** が記述されています。JSON とは JavaScript Object Notation の略で、JavaScript オブジェクトの形式で設定などを記述する手法です。
:::

## npm のパッケージを Node.js から利用する

npm でダウンロードしたパッケージは、モジュールとして `require` 関数に指定できます。

```javascript
const dateFns = require("date-fns");
const { format } = dateFns;
console.log(format(new Date(), "yyyy年MM月dd日"));
```

![date-fns パッケージの利用](./use-package.png)

## 課題

1. サンプルコードの dateFns 変数の中身をデバッガで観察してみましょう。
2. [`mathjs` パッケージ](https://www.npmjs.com/package/mathjs)は、JavaScript で複雑な計算を行うためのライブラリです。このライブラリを用いて、$log(x)$ を $x$ について微分した式を求めてください。
