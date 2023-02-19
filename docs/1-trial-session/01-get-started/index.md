---
title: はじめてのWeb開発
---

import installVscodeVideo from "./install-vscode.mp4";
import createFolderVideo from "./create-folder.mp4";
import openFolderVideo from "./open-folder.mp4";

## Visual Studio Code のインストール

**Visual Studio Code** (以下 VSCode) は、Microsoft 社が開発するテキストエディタです。多くの開発者に使用されています。

Visual Studio Code は、[公式サイト](https://code.visualstudio.com)からインストールできます。まだインストールが終わっていない場合はインストールしておきましょう。

<video src={installVscodeVideo} controls />

## プロジェクトを格納するフォルダを作成する

これから皆さんはたくさんのプログラムを書いていくことになります。プログラムは他のファイルと扱い方がかなり異なるので、専用のフォルダを作っておきましょう。ドキュメントフォルダの中に `Projects` という名前のフォルダを作り、その中にプロジェクトごとのフォルダを作っていくと良いです。

次の例では、`hello-world` の名前でプロジェクト用のフォルダを作成しています。

<video src={createFolderVideo} controls />

## Visual Studio Code でプロジェクトフォルダを開く

`File` メニューから `Open Folder...` をクリックして、先ほど作成したフォルダを VSCode で開きます。

<video src={openFolderVideo} controls />

:::info

最初にフォルダを開いたとき、`Do you trust the authors of the files in this folder?` と聞かれるのは、インターネットからダウンロードした悪意のあるフォルダを VSCode で開いたとき、VSCode によって勝手に実行されてしまうのを防ぐためです。自分で作成したフォルダの場合は問題ありません。

:::
