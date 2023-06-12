---
title: Git と GitHub
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Term from "@site/src/components/Term";
import ViewSource from "@site/src/components/ViewSource";
import gitInitVideo from "./git-init.mp4";
import gitInitWithCliVideo from "./git-init-with-cli.mp4";
import stageChangesVideo from "./stage-changes.mp4";
import stageChangesWithCliVideo from "./stage-changes-with-cli.mp4";
import commitChangesVideo from "./commit-changes.mp4";
import commitChangesWithCliVideo from "./commit-changes-with-cli.mp4";
import secondCommitVideo from "./second-commit.mp4";
import showGitHistoryVideo from "./show-git-history.mp4";
import showGitHistoryWithCliVideo from "./show-git-history-with-cli.mp4";
import showGitDiffWithCliVideo from "./show-git-diff-with-cli.mp4";
import addRemoteRepositoryVideo from "./add-remote-repository.mp4";
import pushChangesVideo from "./push-changes.mp4";
import pushChangesWithCliVideo from "./push-changes-with-cli.mp4";
import cloneRepositoryVideo from "./clone-repository.mp4";
import createNewBranchVideo from "./create-new-branch.mp4";
import createNewBranchWithCliVideo from "./create-new-branch-with-cli.mp4";
import pushNewBranchVideo from "./push-new-branch.mp4";
import pushNewBranchWithCliVideo from "./push-new-branch-with-cli.mp4";
import prPracticeVideo from "./pr-practice.mp4";

## Git リポジトリを作成する

Git では、**リポジトリ**と呼ばれる単位でソースコードを管理します。リポジトリはひとつのディレクトリに相当し、そのディレクトリ以下の全てのファイルが Git による追跡対象となります。

まずは Git で管理するためのディレクトリを作成し、VS Code で開きます。左側のアクティビティバーの `Source Control` パネル内の `Initialize Repository` ボタンを押してください。これで、カレントディレクトリを Git の管理下に置く (カレントディレクトリを Git リポジトリにする) ことができます。

<video src={gitInitVideo} controls autoPlay muted loop />

:::info `git init` コマンド

Git の操作は、コマンドからも行うことが出来ます。カレントディレクトリを Git の管理下に置くには、次のコマンドを実行してください。

```shell
git init
```

<video src={gitInitWithCliVideo} controls autoPlay muted loop />

:::

:::tip `.git` ディレクトリ

Git の管理下に置かれたディレクトリには `.git` という名前のディレクトリが生成されます。このディレクトリには過去のコミットの履歴など、Git が内部的に使用するファイルが格納されます。誤ったディレクトリで `git init` コマンドを実行してしまった場合、このディレクトリを削除しましょう。なお、ピリオドから始まるディレクトリやファイルは `ls` コマンドに `-a` というオプションをつけないといけないので注意が必要です。

```shell
$ ls
$ ls -a
.  ..  .git
$ ls .git
branches  config  description  HEAD  hooks  info  objects  refs
```

:::

## 最初のコミットを作成する

**コミット**は、リポジトリのある時点での状態です。ここでいう状態とは、リポジトリ内のすべてのディレクトリやファイルの名前、その内容、変更日時などです。Git では、コミットを作成することにより、リポジトリへの変更内容を記録します。

それでは、前項で作成したリポジトリで最初のコミットを作成してみましょう。まずはファイルを作成し、適当な内容で保存します。

コミットを作成する前に、変更を**ステージ**する必要があります。ステージとはコミットの直前の状態で、Git に対して該当ファイルをコミットする意思があることを伝えるためのものです。`Source Control` パネル内の変更したファイルの横の `+` ボタンを押します。ファイルが `Changes` から `Staged Changes` に移ったら成功です。

<video src={stageChangesVideo} loop muted autoPlay controls />

:::info `git status` コマンド

現在の状況を確認するには、`git status` コマンドを使います。

ステージされていない場合は、次のように表示されます。

![ステージされる前の状態](./show-unstaged-status.png)

ステージされた後では、次のように表示されます。

![ステージされた後の状態](./show-staged-status.png)

:::

:::info `git add` コマンド

コマンドラインから変更をステージする場合には、`git add` コマンドを実行します。

```shell
$ git add ステージするファイルへのパス
$ git add -A # リポジトリ内部のすべてのファイルをステージする場合
```

`git add` コマンドを使う前後で `git status` コマンドの結果が変化していることを確認しましょう。

<video src={stageChangesWithCliVideo} loop muted autoPlay controls />

:::

ステージされた変更からコミットを作成するには、**コミットメッセージ**を入力して `Commit` ボタンを押します。コミットメッセージには、そのコミットで行われた変更を説明する簡潔なメッセージを入力してください。(日本語も使うことが出来ます。)

<video src={commitChangesVideo} muted autoPlay loop controls />

変更がコミットとして記録されました。

:::info `git commit` コマンド

コマンドラインで実行するには、`git commit` コマンドを使用します。

```shell
git commit -m "コミットメッセージ"
```

<video src={commitChangesWithCliVideo} muted autoPlay loop controls />

:::

ある程度変更がまとまったら、ステージ、コミットを繰り返してプログラムを書き進めていきましょう。

:::tip `.gitignore`

`.gitignore` ファイルで指定されたファイルは Git の管理下に置かれません。`npm install` で簡単にダウンロードできて容量が大きいのでバージョン管理するメリットのない `node_modules` や、機密情報や環境ごとに異なる情報を含む `.env` といったファイルが指定されます。

:::

## 変更履歴を表示する

先ほど作成したファイルを変更し、ステージした後、もう一度コミットを作ってみましょう。

<video src={secondCommitVideo} muted autoPlay loop controls />

これにより、2 つ目のコミットが作成されました。コミットの履歴を確認するために、先ほどインストールした `Git Graph` 拡張機能を起動してみましょう。`Cmd / Ctrl + Shift + P` キーを押してコマンドパレットを開き、`Git Graph: View Git Graph (git log)` を選択します。

<video src={showGitHistoryVideo} muted autoPlay loop controls />

:::info `git log` コマンド

コマンドを用いて変更を表示するには、`git log` コマンドを使用します。

<video src={showGitHistoryWithCliVideo} muted autoPlay loop controls />

:::

:::info `git diff` コマンド

コミットには一意の ID が割り当てられており、この ID を `git diff` コマンドに与えることで、コミット同士を比較することができます。

下の動画の最後で実行されている `git diff @ @~` は、最新のコミットとそのひとつ前のコミットを比較するためのコマンドです。`@` が最新のコミットを、`~` が「そのひとつ前」を表します。

<video src={showGitDiffWithCliVideo} muted autoPlay loop controls />

:::

## 変更を GitHub に保存する

自分のコンピューター上に作成したリポジトリと同期させるため、GitHub 上にもリポジトリを作成します。GitHub 上部のメニューから `New repository` を選択してください。

![リポジトリ](new-repository.png)

必要な設定はリポジトリの名前と公開範囲です。公開するつもりがない場合は公開範囲は `Private` に設定するようにしましょう。

![リポジトリの設定](./repository-settings.png)

続いて、作成したリポジトリと自分の PC 上にあるリポジトリを紐づけます。GitHub 上に表示されている **SSH** の URL をコピーします。(**SSH** にするのを忘れないでください。) これが GitHub 上に作成したリポジトリを表す URL (リモートリポジトリの URL) になります。次のコマンドを実行して、このリモートリポジトリを `origin` (慣習的にリモートリポジトリが一つだけの場合はこの名前が用いられます) という名前で登録します。

```shell
git remote add origin git@github.com:アカウント名/リポジトリ名.git
```

<video src={addRemoteRepositoryVideo} muted controls />

追加が完了したら、`origin` として登録したリモートリポジトリにコミットを送信します。この操作を**プッシュ**と呼びます。プッシュをするには、`Publish Branch` を押します。

<video src={pushChangesVideo} muted autoPlay loop controls />

:::info

この操作の際、初回は以下のような警告が出る場合があります。

```plain
"github.com" has fingerprint "SHA256:+DiY3wvvV6TuJJhbpZisF/zLDA0zPMSvHdk4UvCOqU."
Are you sure you want to continue connecting?
```

これは、接続先となっている GitHub が、なりすましではなく本物の GitHub であると信頼してもよいかを尋ねるメッセージです。家庭用のインターネット回線、UTokyo Wi-Fi 等、十分に信頼できるネットワークに接続している場合は問題ありませんので、 `yes` を押して続行させてください。

:::

:::info `git push` コマンド

コマンドラインから実行するには、`git push` コマンドを使います。

```shell
git push origin main
```

このコマンドの `main` は**ブランチ**と呼ばれるソースコードの変更の分岐を表す名前で、何も指定しなければ `main` という名前になります。

<video src={pushChangesWithCliVideo} muted controls />

:::

GitHub を開いているブラウザを更新して、プログラムが反映されていることを確認したら完了です。

## GitHub を用いた共同開発をする

GitHub を用いると簡単に共同開発ができます。[練習用のリポジトリ](https://github.com/ut-code/readme_practice)を用意してあるのでここに変更を加えてみましょう。変更を加えるのにはリポジトリの編集権限が必要なので、事前に権限をもらっておきましょう。

まずは、共同開発をするリポジトリをローカルにクローンします。クローンするとは、リモートリポジトリを自分の PC 上にコピーすることです。[練習用のリポジトリ](https://github.com/ut-code/readme_practice)の **SSH** の URL をコピーして、次のコマンドを実行してください。その後、クローンしたリポジトリを VS Code で開いてください。

```shell
git clone git@github.com:ut-code/readme_practice.git
```

<video src={cloneRepositoryVideo} muted autoPlay loop controls />

複数のメンバーが並行して変更を加えていくために、Git にはブランチという仕組みが備わっています。まず変更を加えたい時には、メインのブランチから自分の作業専用のブランチを作成します。そして、作業が終わったらメインのブランチに自分のブランチの変更を取り込みます。これによって、プロジェクトの本体に影響を与えずに同時並行で開発を進めることが出来ます。

```mermaid
gitGraph
  commit id: "Add index.html"
  commit id: "Add service.html"
  commit id: "Add company.html"
  branch add-recruit-page
  commit id: "Add recruit.html"
  checkout main
  branch add-contact-page
  commit id: "Add contact.html"
```

まずは、メインのブランチから自分の作業専用のブランチを作成しましょう。
左下の `main` というボタンをクリックして、`Create new branch from...` を選択します。次に、分岐元のブランチを選択します。今回は `main` を選択します。最後に、新しいブランチの名前を入力します。新しいブランチ名には、変更の内容を端的に表す名前をつけてください。今回は `hello-自分のアカウント名` という名前にしてみましょう。左下の表示が新しいブランチ名に変わったことを確認してください。

<video src={createNewBranchVideo} muted autoPlay loop controls />

:::info `git switch` コマンド

ブランチの作成をコマンドラインから行うこともできます。

まずは、現在いるブランチを確認してみましょう。ターミナルで `git branch` コマンドを実行してください。

```shell
$ git branch
* main
```

ここで、`*` から始まっているのが、現在いるブランチです。`main` となっているはずです。

新しいブランチを作成して移動するには、`git switch` コマンドを使います。

```shell
git switch -c 新しいブランチ名
```

現在いるブランチを確認すると、`*` が移動しているはずです。

```shell
$ git branch
  main
* 新しいブランチ名
```

<video src={createNewBranchWithCliVideo} muted autoPlay loop controls />

:::

この状態で、ファイルに必要な変更を行います。練習用のリポジトリに自分だけの新しいファイルを作ってみましょう。`自分のアカウント名.txt` とします。ファイルの中身は何でも構いません。変更ができたらその都度、変更をステージし、コミットします。必要に応じて、コミットの履歴やコミットの差分を確認してください。

変更が終わったら、変更をリモートにも反映します。新しく作ったブランチをリモートリポジトリにプッシュします。

<video src={pushNewBranchVideo} muted autoPlay loop controls />

```mermaid
gitGraph
  commit id: "既存のコミット1"
  commit id: "既存のコミット2"
  branch "hello-自分のアカウント名"
  commit id: "新たな変更"
```

:::info

コマンドラインからプッシュするには、次のコマンドを実行します。

```shell
git push origin ブランチ名
```

<video src={pushNewBranchWithCliVideo} muted autoPlay loop controls />

:::

次に変更をメインのブランチに反映します。GitHub のプルリクエストという機能を使うことで簡単に変更をメインのブランチに取り込むことができます。

```mermaid
gitGraph
commit id: "既存のコミット 1"
commit id: "既存のコミット 2"
branch "hello-自分のアカウント名"
commit id: "新たな変更"
checkout main
merge "hello-自分のアカウント名"
```

GitHub を開き `Pull requests` を開いてください。

![Pull requests](./pull-requests-tab.png)

`New pull request` を押してください。

次のような画面が現れるので、

![Compare changes](./compare-changes.png)

`compare` と書いてある方のブランチを変更して、変更を加えたブランチを選択してください。

![Comparing changes](./comparing-changes.png)

`Create pull request` を押してください。

![Create pull request](./create-pull-request.png)

確認画面が出るので、コメントを書いて `Create pull request` を押してください。これで、プルリクエストを作成することができました。

![Merge pull request](./merge-pull-request.png)

変更が良さそうだったら、`Merge pull request` を押してください。これで、変更を反映できます。

![Delete branch](./delete-branch.png)

マージしたら、不要になったブランチは削除しておきましょう。

<video src={prPracticeVideo} muted controls />
```
