---
title: Express とテンプレートエンジン
sidebar_position: 6
---

import ViewSource from "@site/src/components/ViewSource";

## 準備

このページの演習問題を解く前に、以下の準備を行ってください。

1. 新しいフォルダを Visual Studio Code で開き、`faculties.js` という名前のファイルを作成してください。
2. 右下の「github で表示」ボタンをクリックし、表示されるファイルの中身を `faculties.js` にコピー&ペーストしてください。

<ViewSource url={import.meta.url} path="faculties.js" noCodeSandbox />

これ以降、`faculties.js` の中身を書き換えたり、コピーして他のファイルに貼り付けたりしてはいけません。

`faculties.js` ファイルでは、東京大学の学部に関するデータが入った `faculties`, `facultyDatas` がエクスポートされています。

- `faculties` は学部の英語名の配列です。
- `facultyDatas` は学部の英語名をプロパティ名とするオブジェクトです。さらに、各プロパティは `name` と `departments` プロパティを持つオブジェクトであり、`name` は学部の日本語名、`departments` はその学部に属する学科の日本語名の配列です。

## モジュール

`main.js` ファイルに工学部の学科数をコンソールに出力するプログラムを作成し、Node.js で実行してください。
ただし、工学部の学科数は自分で数えるのではなく、`faculties.js` ファイルから `facultyDatas` を取得して計算してください。

## Express

Express を用いて、工学部の学科を箇条書きで表示するウェブページを作成してください。EJS は用いても用いなくても構いません。

## 総合問題

http モジュール(あるいは Express)と EJS を用いて、以下の要件を満たすウェブサービスを作成してください。

- `http://localhost:3000/` にアクセスすると東京大学の学部一覧が表示される。それぞれの学部名は `/[学部の英語名]` へのリンクになっている。
- リンクがクリックされると `http://localhost:3000/[学部の英語名]` にページが移動し、その学部の学科一覧が表示される。
  - 例えば、工学部がクリックされると `http://localhost:3000/engineering` に移動し、工学部の学科一覧が表示される。
