---
title: Git と GitHub
---

import CodeBlock from '@theme/CodeBlock';
import Term from "@site/src/components/Term";
import ViewSource from "@site/src/components/ViewSource";

:::info
macOS、WSL を利用する場合は Git は標準搭載なので追加インストールの必要なしです！
:::

## GitHub への登録

1. [GitHub](https://github.com)を開き、右上のサインアップをクリック。

   ![Github home](./pictures/github-home.png)

2. 情報を入力する。

   ![create New Account](./pictures/github-signup.png)
   :::caution
   Username は、一度付けると変更が面倒なためよく考えてつけましょう。
   :::

3. 公開鍵と秘密鍵の作成

   Terminal にて以下のコマンドを実行

   ```
   $ cd ~
   $ ssh-keygen -t ed25519
   ```

   途中でターミナルの表示画面が止まりますが、`user@host:~$` が再度表示されるまで Enter キーで進みます。
   公開鍵が格納されたファイルの中身を表示させるため、以下のコマンドを入力します。

   ```
   $ cd ~/.ssh
   $ cat id_ed25519.pub
   ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIFNwa2O/BIlw+WvisPCrSlM6IS2M2bbCRKNU9G8NYq2L [ユーザー名]@[コンピューター名]
   ```

   `ssh-ed25519 AA...2L` の部分をコピーしましょう。これが公開鍵です。

4. GitHub への公開鍵の登録

   登録ページへの移動方法は、`Setting` > `SSH and GPG keys` > `New SSH key`と順に移動すればたどり着けます。
   ![add-ssh-key](./pictures/ssh-key-add.png)

   上記のようなページが表示されたら、Title に適切な名前、Key には先ほど Terminal で表示した公開鍵を入力して登録しましょう。

## Git によるバージョン管理

### ローカルのリポジトリを Git で管理

Git のリポジトリは、コミットと呼ばれるソースコードへの変更の塊の集合です。適当なプロジェクトを、Git の管理下に置いてみましょう。
以下のコマンドを Terminal に入力してください(username や project-name は自分の環境に合わせたものを使用してください)

```
$ cd /Users/username/projects/project-name
$ git init
Initialized empty Git repository in /Users/username/projects/project-name/.git/
```

ファイルリスト中のファイルの色が変わり、`U` の文字が表示されたでしょうか。

![git init](pictures/git-init.png)

`git init` は、ディレクトリを Git の支配下に置くことを宣言するためのコマンドです。このコマンドを実行することにより、プロジェクトディレクトリはまだコミットが存在しない空のリポジトリになりました。
`U` は `Untracked` の頭文字で、そのファイルが最後のコミット（といってもまだ作ったばかりのリポジトリなので空ですが）より後に新しく作成され、まだ Git によって管理されていないことを表します。

```
$ git add -A
```

左側のパネルを `SOURCE CONTROL` にすると、すべてのファイルリストではなく、変更されたファイルのみのリストを表示させることができます。上のコマンドを実行すると、今まで`U`だった部分が`A (Added)`に変更されました。

![ステージング](pictures/git-staging.png)

`git add` コマンドは、変更を**ステージング**するためのコマンドです。ステージングとはコミットの直前の状態で、Git に対して該当ファイルをコミットする意思があることを伝えるためのものです。
今回は `-A` オプションによりすべてのファイルをステージングしましたが、特定のファイルのみとすることもできます。

VSCode は、GUI を利用した Git の操作に標準で対応しています。変更一覧に表示されるプラスボタンがステージング、マイナスボタンがその解除に当たります。

最後に、ステージングされたファイルをコミットしてみましょう。

```
$ git commit -m "init"
```

コミットが作成され、ファイルリストは白色に戻りました。なお、Git ではコミットを作成するとき、そのコミットによって行った変更を説明するための**コミットメッセージ**を付けることになっています。それを指定するためのオプションが `-m` です。

![コミット](pictures/git-commit.png)

なお、これ以降は、最後のコミットと比較し、新しく追加されたファイルには `U` が、編集されたファイルには `M (Modified)` が付与されます。ある程度変更がまとまったら、ステージング（`git add`）、コミット（`git commit`）を繰り返してプログラムを書き進めていきましょう。

![さらに編集](pictures/additional-changes.png)

:::tip `.gitignore`
`.gitignore` ファイルで指定されたファイルはコミットされない。`npm install` で簡単にダウンロードできて容量が大きいのでバージョン管理するメリットのない `node_modules` や、機密情報や環境ごとに異なる情報を含む `.env` といったファイルが指定されます。
:::

### GitHub との同期

ローカルで管理しているリポジトリを GitHub 上のリポジトリに同期させてみましょう。

![GitHub上でリポジトリを作成する](pictures/new-repository.png)

GitHub では、Web インターフェースを使用して Git リポジトリの操作をすることができます。 `Repository name` に適当な名前を入力して、 `Create repository` を押しましょう。

![新しいリポジトリ](pictures/repository-created.png)

`git@github.com:アカウント名/リポジトリ名.git` の部分は、GitHub 上に新しく作ったリポジトリの場所を表す URL です。

ターミナルに戻り、以下のコマンドを実行します。

```
$ git remote add origin git@github.com:アカウント名/リポジトリ名.git
```

このコマンドを実行することで、ローカルリポジトリに対し、URL で指定したリポジトリを `origin` という名前で関連付けさせます。

:::note
`origin` という名前は慣習的に決まっているものです。別の名前で登録することもできますが、あまり一般的ではありません。
:::

`origin` に対し、ローカルリポジトリの変更を**プッシュ**しましょう。

```
$ git push -u origin master
```

:::info
この操作の際、初回は以下のような警告が出る場合があります。

```
The authenticity of host 'github.com (13.114.40.48)' can't be established.
RSA key fingerprint is SHA256:nThbg6kXUpJWGl7E1IGOCspRomTxdCARLviKw6E5SY8.
Are you sure you want to continue connecting (yes/no/[fingerprint])?
```

これは、接続先となっている GitHub が、なりすましではなく本物の GitHub であると信頼してもよいかを尋ねるメッセージです。家庭用のインターネット回線、UTokyo WiFi 等、十分に信頼できるネットワークに接続している場合は問題ありませんので、 `yes` を入力して続行させてください。
:::

:::tip
`-u` オプションは、初回の `push` 時にその宛先を記憶し、次回以降自動的にその場所を指定するためのオプションです。2 回目以降は

```
$ git push
```

だけで構いません。 `master` は、**ブランチ**と呼ばれるソースコードの編集の分岐の名前を表すものですが、この回ではまだ詳しく扱わないこととします。
:::

GitHub をリロードしてみてください。変更が反映されているのを確認できるはずです。

![GitHub上のリポジトリが更新された](pictures/github-updated.png)

## おすすめ拡張機能

- GitLens

  コミットの差分などが見やすくなり便利
  ![gitlens](./pictures/gitLens.png)

- Git Graph

  コマンドパレット(Cmd + Shift + P)に Git Graph: View Git Graph (git log)というメニューが出て見やすい

  ![gitGraph](./pictures/gitGlaph.png)

  ![gitGraph](./pictures/git-git-graph.png)

### 課題

GitHub を実際に使ってみましょう。
隣の人のレポジトリの URL を教えてもらい、そのレポジトリの `README.md` を編集し、pull request を送りましょう。
最初に、GitHub に練習用のレポジトリを `README.md` 付きで作成してください。

```
$ git clone git@github.com:ut-code/readme_practice.git
$ cd readme_practice
$ ls
```

次に、branch を作成します。
branch 名は、今回は `自分のGitHub上の名前+readme` にします。
一般的な場合では、branch 名は、作業する内容を端的に表す名前にすることが推奨されます。

```
$ git branch username_readme
$ git branch
```

ブランチの一覧が閲覧できたでしょうか。
次に、今作成したブランチに HEAD を移動します。

```
$ git checkout username_readme
$ git branch
```

`*` が移動したことを確認してください。

続いて、`README.md` に、`Hello World` という文字を追加しましょう。`README.md` に編集ができたら、ファイルを保存しましょう。
次に、変更をステージングしましょう。`git add` コマンドは、作業ディレクトリ内の変更をステージングエリアに追加するコマンドです。

```
$ git add -A
```

次に、ステージングされたファイルをコミットしましょう。
`git commit` コマンドは、追加・変更したファイルを Git に登録するためのコマンドです。

```
$ git commit -m "README.md に変更を加えました"
```

remote レポジトリに `origin` として変更を登録しましょう。remote レポジトリに local の branch を反映します。

```
$ git push -u origin username_readme
```

ブラウザで、push した隣の人の GitHub のレポジトリを開きましょう。
pull request を出しましょう。

pull request の申請を受け取った人は、確認し merge しましょう。
merge できたでしょうか。

通常の場合、branch は役目を終えたら削除するようにしてください。

<!-- remoteレポジトリの変更をlocalに反映させます。
```
$ git fetch origin main
```
最後にmergeします
```
$ git merge origin main
``` -->

## Git の説明

1. Git は、プログラムのソースコードなどの変更履歴を記録・追跡するための分散型バージョン管理システムです。

2. Git の中身の話をする前に、Git を構成する重要な技術の一つである[hash 関数](https://www.wikiwand.com/ja/%E3%83%8F%E3%83%83%E3%82%B7%E3%83%A5%E9%96%A2%E6%95%B0)についての説明をします。hash 関数は任意のデータを固定長の文字列に変換する非可逆な要約関数です。データが 1 文字でも違うと hash 関数は全く異なる値を出力します。hash 関数の出力の値を比べることで、データが編集されていないかを確かめることができます。(注 異なる入力に対して hash 関数の出力が等しくなる場合(衝突)が稀にあります。)
   ![Git wiki hash](./pictures/git-hash.png)

3. Git は、[有向非巡回グラフ(DAG)](https://www.wikiwand.com/ja/%E6%9C%89%E5%90%91%E9%9D%9E%E5%B7%A1%E5%9B%9E%E3%82%B0%E3%83%A9%E3%83%95)というグラフ構造を取っています。巡回がある場合、定義が無限ループに陥ってしまうため、Git は必ず非巡回のグラフとなっています。
   ![Git wiki dag](./pictures/git-dag.png)
   次に、Git のグラフの中身を見てみましょう。

4. Git は commit object の集合です。commit は、1 つの tree object へのリンク(参照)を持ちます。tree object は 1 つ以上の、tree object や[blob object](https://techacademy.jp/magazine/28210)へのリンク(参照)を持ちます。blob は binary large object の略で、ファイルのバイナリデータです。index.html や script.js などのファイルをバイナリデータにしたものが blob です。具体的な commit の構造を見てみましょう。
   98ca9..や 92ec2..はデータの hash 値です。hash 値は先頭からの一致を用いて比較されます。ここでは先頭の 5 桁が示されています。98ca9..という値は、該当する commit object を hash 関数に入力した時に計算された hash 値です。commit object には、commit の情報が含まれており、それらは hash 関数に入力することで、98ca9..という hash 値が計算されています。
   ![Git mit tree](./pictures/git-mit-tree.png)

5. commit を重ねると、編集の履歴がグラフとして表されます。tree object は snapshot として表されています。98ca9..は最初の commit です。34ac2..は parent の 98ca9..の hash 値を持っています。f30ab..は parent として 34ac2..の hash 値を持っています。98ca9.., 34ac2.., f30ab..の順番で hash が計算されます。parent の commit object を hash 関数の入力にしたときの出力値と、child が保有している parent の hash 値が一致するか確かめることで、正当な継承かどうか確かめることができます。
   ![Git mit commit](./pictures/git-mit-commit.png)

6. branch は、commit object への pointer(参照)です。branch は、commit object の hash 値を持っています。作業する内容に応じて branch を用います。
   ![Git mit commit testing](./pictures/git-mit-branch.png)
   HEAD は現在の位置を指します。HEAD は指している branch の名前を保有します。
   ![Git mit branch](./pictures/git-mit-head.png)

7. 新たに tesing の branch での変更内容を commit します。そのためには、まず HEAD を testing に移動します。
   ![Git mit checkout](./pictures/git-mit-checkout.png)
   HEAD が testing を指している状態で commit をします。新たな commit object が記録されました。testing の branch が指している hash 値は f30ab..から c2b9e..へと更新されました。HEAD の指している branch 名は testing のままで変化していません。c2b9e..は親 commit object の hash 値である f30ab..を保有しています。
   ![Git mit commit testing](./pictures/git-mit-commit-testing.png)
   再び master に作業場を移します。
   ![Git mit checkout master](./pictures/git-mit-checkout-master.png)
   master を commit します
   ![Git commit master](./pictures/git-mit-commit-master.png)
   新たな commit object が登録されました。
   次に、枝分かれした branch を統合する merge, rebase について説明します。

8. master と experiment の 2 つに branch が分かれており、それぞれ commit が 1 つ進んでいる状態を考えます。
   ![Git mit rebase](./pictures/git-mit-merge-rebase.png)
   merge する場合は、C3 と C4 の内容をもとに C5 を作成します。C5 の commit object は、C3 と C4 の 2 つの hash 値を記録しています。
   ![Git mit merge](./pictures/git-mit-merge.png)
   merge の代わりに rebase する場合は以下の通りとなります。新たに C3'が作られます。この commit object は、C4 の hash 値を記録しています。
   ![Git mit rebase](./pictures/git-mit-rebase.png)

Git でコミットを積み重ねることで、レポジトリを作成することができました。レポジトリを管理するサービスとして、GitHub があります。GitHub に関する説明に進んでいきます。

The images in this slide deck are from Pro Git under a Creative Common license (Attribution, Noncommercial, Share alike).

<!-- ### 課題 -->

<!-- ToDo アプリのソースコードを GitHub に保存してみましょう。
 -->
