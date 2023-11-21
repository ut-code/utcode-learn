# ut.code(); Learn

<img alt="ロゴ" src="./static/img/logo.svg" height="200px" />

[![language: MDX](https://img.shields.io/badge/MDX-1B1F24.svg?logo=mdx)](https://mdxjs.com/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
![license: MIT](https://img.shields.io/badge/license-MIT-informational.svg)
![PRs: welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

[English README is here.](./README-en.md)

ut.code(); Learn は、ut.code(); によって作られた Web 技術の学習教材です。[Docusaurus](https://docusaurus.io/) を用いて作られています。

## 目次

- [概要](#概要)
- [使い方](#使い方)
- [開発](#開発)
  - [要件](#要件)
  - [環境構築](#環境構築)
  - [開発用サーバーの起動](#開発用サーバーの起動)
  - [ディレクトリ構成](#ディレクトリ構成)
  - [コードスタイル](#コードスタイル)
  - [カスタムコンポネント](#カスタムコンポネント)
  - [ビルドテスト](#ビルドテスト)
  - [PR の前に](#pr-の前に)
- [貢献](#貢献)

## 概要

ut.code(); Learn は、ut.code(); によって作られた Web 技術の学習教材です。
様々な Web に関する技術について学ぶことができます。

## 使い方

[https://learn.utcode.net/](https://learn.utcode.net/) にアクセスすれば、内容を見ることができます。

## 開発

### 要件

- [Node.js](https://nodejs.org/ja/)
- [npm](https://www.npmjs.com/)

### 環境構築

npm モジュールをインストールするために、次のコマンドをターミナルで実行してください。

```shell
npm ci
```

### 開発用サーバーの起動

次のコマンドを実行することで、開発用のサーバーが起動できます。また、ブラウザが自動で立ち上がり変更した内容をリアルタイムでプレビューできます。

```shell
npm start
```

### ディレクトリ構成

`docs` フォルダ下に作られたファイルは自動でホスティングされます。
`index.mdx` というファイルを編集することで、変更ができます。編集したい階層にある `index.mdx` ファイルを選んで編集してください。
`index.mdx` は Markdown を拡張した MDX という非常に簡単な形式で書かれています。

### コードスタイル

ut.code(); Learn は、Prettier でフォーマットされています。

VSCode 拡張機能で Prettier をインストールして、コマンドパレットから `Format Document` を選択するか、

```shell
npm run format
```

を実行すると自動でフォーマットすることができます。

### カスタムコンポネント

ut.code(); Learn では、次のカスタムコンポネントが定義されています。

- Term - 用語にポップアップの説明を自動で付ける
- Answer - 解答例をプルダウンに隠す
- ViewSource - GitHub と CodeSandbox で解答例を表示するボタンを付ける
- ExternalVideoPlayer - 動画プレイヤーを表示する

### ビルドテスト

次のコマンドを実行することで、ビルドテストができます。サーバは起動されず、ビルドテストが終了し次第コマンドも終了します。

```shell
npm run build
```

### PR の前に

PR の前に、次の項目を確認してください。

- フォーマットがしてあるか
- ビルドテストは通ったか
- 誤字脱字はないか
- コードは正常に動作するか

## ライセンス

ut.code(); Learn は [MIT license](https://github.com/ut-code/utcode-learn/blob/master/LICENSE) でライセンスされています。
Copyright © 2023 ut.code();.

## 貢献

Issue や Pull request などはいつでもお待ちしています。

## リリースについて

GitHub の Release を作成すると GitHub Pages にデプロイされます。
