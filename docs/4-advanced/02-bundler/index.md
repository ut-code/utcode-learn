---
title: トランスパイラとモジュールバンドラ
---

import CodeBlock from '@theme/CodeBlock';
import Term from "@site/src/components/Term";
import ViewSource from "@site/src/components/ViewSource";
import ExternalVideoPlayer from "@site/src/components/ExternalVideoPlayer";
import getStartedWithViteVideo from "./get-started-with-vite.mp4";
import buildVideo from "./build.mp4";

## 複雑化する Web 開発

JavaScript は、当初は Web サイトに簡易的な動きを追加させるための言語として設計されました。しかしながら、高度な Web アプリケーションの台頭や、Node.js をはじめとしたブラウザにおける JavaScript のユースケースの広がりにより、標準的な JavaScript のみでの開発には限界があることがわかってきました。

このため、現代では、JavaScript は事前に何らかの変換を行っておくことが一般的になっています。

### <Term type="transpile">トランスパイラ</Term>

<p><Term type="transpile" strong>トランスパイラ</Term>は、ソースコードを別のソースコードに変換するためのプログラムです。JavaScript においてトランスパイラが必要になるのは、主に 2 つの理由によります。</p>

ひとつは、**最新の機能を使用するため**です。JavaScriptの言語仕様は、[Ecma International](https://www.ecma-international.org/) の [TC39](https://tc39.es/) によって作成されていますが、新しく策定された仕様は、まだブラウザなどによって実装されていない場合があります。[Babel](https://babeljs.io/) は、そういった最新の言語仕様に沿って書かれたプログラムを変換し、古い仕様の範囲内で解釈できるプログラムに変換するための、最も有名な<Term type="transpile">トランスパイラ</Term>です。

もうひとつは、**別の言語で書かれたプログラムを JavaScript に変換するため**です。次の章で扱う TypeScript は、トランスパイラを用いて JavaScript に変換されます。

### モジュールバンドラ

通常、規模の大きなプログラムは、見通しが良くなるよう複数のファイルに分割されます。HTML から複数の JavaScript を読み込むためには `script` タグを並べれば良いですが、[HTTP サーバー](../../3-web-servers/04-http-server/index.md)の節で学んだように、`script` タグの数だけ <Term type="httpRequestResponse">HTTP リクエスト</Term>が発行されてしまうため非効率的です。

[webpack](https://webpack.js.org) のような<Term type="moduleBundler" strong>モジュールバンドラ</Term>を用いることで、複数の JavaScript ファイルを統合できます。

なお、Node.js の場合は、モジュールの読み込みはファイルの読み込みに過ぎず、ネットワークを経由することはないため、このプロセスは通常必要ありません。

![JavaScript ファイルの変換](./javascript-conversion.drawio.svg)

## Vite を用いたフロントエンド開発

Web 開発の領域では、ブラウザ (クライアント) で動く JavaScript プログラムを**フロントエンド**、サーバーで動くプログラムを**バックエンド**と呼ぶことがあります。

[Vite](https://vitejs.dev/) は、主にフロントエンドの領域における、<Term type="transpile">トランスパイラ</Term>や<Term type="moduleBundler">モジュールバンドラ</Term>などの機能を持つソフトウェアです。

Vite を用いて新しくプロジェクトを作成してみましょう。

<video src={getStartedWithViteVideo} controls />

詳細な手順は次のとおりです。


まずは、ターミナルでカレントディレクトリをプロジェクトフォルダを格納するディレクトリに移動し、

```shell
npm create vite@latest
```

を実行します。プロジェクトのテンプレートを尋ねられるので、`vanilla` を選択してください。

すると、`package.json` を含む新しいディレクトリがカレントディレクトリに作成されます。このディレクトリを VSCode で開きましょう。

続いて、作成された `package.json` をもとに npm から必要なパッケージをダウンロードするため、

```shell
npm install
```

を実行します。完了したら、

```shell
npm run dev
```

を実行してください。

Vite 内蔵のウェブサーバーが起動し、`http://127.0.0.1:5173/` でウェブサイトが表示されます。

## Vite の仕組み

Vite の挙動を理解するため、`Ctrl + C` で先ほど起動させたウェブサーバを停止させ、`npm run build` コマンドを実行してみましょう。

```shell
$ npm run build

> vite@0.0.0 build
> vite build

vite v2.9.9 building for production...
✓ 4 modules transformed.
dist/assets/favicon.17e50649.svg   1.49 KiB
dist/index.html                    0.46 KiB
dist/assets/index.f72635f1.js      0.85 KiB / gzip: 0.49 KiB
dist/assets/index.06d14ce2.css     0.17 KiB / gzip: 0.14 KiB
```

これにより、カレントディレクトリに `dist` ディレクトリが作成され、<Term type="transpile">トランスパイル</Term>と<Term type="moduleBundler">バンドル</Term>の結果が格納されます。

出力されたファイルを元のファイルと比較してみましょう。元の `index.html` や `main.js` が、変換された状態で出力されていることがわかります。ディレクトリごと [Netlify Drop](../../1-trial-session/14-deploy-application/index.md) などにアップロードすれば使用可能になるでしょう。

<video src={buildVideo} controls />

:::tip `npm run` コマンド
`npm run` コマンドは、`package.json` の `scripts` プロパティに記載されたコマンドを実行します。開発によく使うコマンドを登録しておくことで、コマンドを打つ手間を削減できます。

`npm create vite@latest` が自動的に生成する `package.json` の `scripts` プロパティは、次のようになっていました。ここに記載されたコマンドでは、`npx` コマンドを用いたときのように、npm でインストールされたパッケージをそのまま実行できます。例えば、`npm run dev` コマンドを実行することで、`npx vite` に相当する処理が行われます。

```json title="package.json (一部抜粋)"
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```
:::

## <Term type="javascriptModule">ECMAScript モジュール</Term>

Node.js では、通常 `require` 関数と `exports` オブジェクトを使用して<Term type="javascriptModule">モジュール</Term>を作成していました。しかしながら、この機能は Node.js に特有の機能で、標準的な JavaScript の仕様には含まれていません。

JavaScript 標準の<Term type="javascriptModule">モジュール</Term>システムを、[**ECMAScript モジュール**](https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Modules)と呼ぶ場合があります。トランスパイラを用いることで、<Term type="javascriptModule">ECMAScript モジュール</Term>を用いてプログラムを記述できます。

<p><Term type="javascriptModule">ECMAScript モジュール</Term>では、<code>export</code> 文や <code>import</code> 文を用いて他のモジュールとのやりとりを行います。</p>

```javascript title="main.js"
import { add } from "./sub";

document.getElementById("app").textContent = add(3, 4);
```

```javascript title="sub.js"
export function add(a, b) {
  return a + b;
}
```

<ViewSource url={import.meta.url} path="_samples/es-modules" />

**デフォルトエクスポート**は、各モジュールにつき一度だけ使えるエクスポート方法です。
```javascript title="main.js"
import add from "./sub";

document.getElementById("app").textContent = add(3, 4);
```

```javascript title="sub.js"
export default function add(a, b) {
  return a + b;
}
```

:::tip ECMAScript モジュールの実装状況
ECMAScript モジュールは、実際にはブラウザや Node.js でも利用可能です。ブラウザであれば [`script` 要素の `type` 属性に `module` を指定すれば良い](https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Modules#applying_the_module_to_your_html)ですし、Node.js であれば [`--esm` オプションや、拡張子の `.mjs` への変更など](https://nodejs.org/api/esm.html#enabling)によって対応できます。

しかしながら、ブラウザでこういった機能を利用することは、<Term type="httpRequestResponse">HTTP リクエスト</Term>の増加を招きますし、Node.js の <Term type="javascriptModule">ECMAScript モジュール</Term>サポートは、2022年現在、周辺エコシステムとの関係上、難しい場合が多いです。

なお、`exports` オブジェクトや `require` 関数を使ったモジュールシステムを、[CommonJS モジュール](https://nodejs.org/api/modules.html)と呼ぶ場合があります。
:::

## npm のパッケージを Web ブラウザ上で利用する

npm のパッケージがブラウザ上での実行に対応している場合は、Vite をはじめとしたトランスパイラやモジュールバンドラにより、ブラウザ向けの JavaScript に変換させられます。例として `date-fns` パッケージを使用してみましょう。

```javascript
import { format } from "date-fns";

document.getElementById("app").textContent = format(
  new Date("2022-01-10"),
  "yyyy年MM月dd日"
);
```

<ViewSource url={import.meta.url} path="_samples/run-npm-package-on-browsers" />

## フロントエンドとバックエンドの統合

Vite などのツールによって出力されたブラウザ上で動くアプリケーションと、Node.js をはじめとしたサーバー向けのアプリケーションを統合するためには、複数の手法が考えられます。

最も単純なアプローチは、ビルド時に統合することです。この方法のメリットは、本番環境にデプロイするのが簡単であることです。ディレクトリ構成は、例えば次のようになります。

```
app
├── client
│   ├── index.html
│   └── main.js
├── package.json
├── package-lock.json
└── server
    └── main.js
```

<ViewSource url={import.meta.url} path="_samples/fullstack-app" />

`npm run build` コマンドによって Vite がビルド結果を `/dist` に出力するようにしておきます。

```json title="/package.json"
{
  "scripts": {
    "start": "node server/main.js",
    "build": "vite build client --outDir ../dist"
  }
}
```

`express.static` により Vite が作成したディレクトリを指定すれば完成です。

```javascript title="/server/main.js"
const express = require("express");
const app = express();

app.use(express.json());

// Vite によって出力されたディレクトリを配信する
app.use(express.static("dist"));

app.listen(3000);
```

## 課題

- [`chart.js`](https://www.npmjs.com/package/chart.js) を用いると、ブラウザ上に非常に美しいグラフを描画することができます。このパッケージを用いて、適当なデータをビジュアライズしてみましょう。
<ViewSource url={import.meta.url} path="_samples/chartjs" noCodeSandbox />

- Vite を用いて作成した Web フロントエンドと、Node.js のバックエンドが協調して動作するアプリケーションを Render にデプロイしてみましょう。
