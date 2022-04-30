---
title: フォーム
---

import CodeBlock from '@theme/CodeBlock';
import Term from "@site/src/components/Term";
import OpenInCodeSandbox from "@site/src/components/OpenInCodeSandbox";

## クエリパラメータの利用

クエリパラメータとは？

入力した内容によって、次に移る（表示される）ページが異なるウェブページがあるが、入力した内容によって異なるウェブページが表示されるよう、入力した内容が移った先のページのURLに反映されている。URLのうち、入力した内容が反映されている部分をクエリパラメータという。

例：google.comで、検索エンジンに何か入力して、検索すると、検索結果が表示されるが、そのページのURLに注目。（下画像赤線がクエリパラメータ）

## サーバーにデータを送信する
form要素を使うとユーザーの入力からクエリパラメータを生成してページ遷移できる。

・ formのaction属性: フォーム送信時に移動し、データを送信するページ
・input要素: テキストボックス
・inputのname属性: クエリパラメータのキー
・button要素: form内のボタンをクリックするとformのactionに指定したページに遷移する（送信ボタンになる）