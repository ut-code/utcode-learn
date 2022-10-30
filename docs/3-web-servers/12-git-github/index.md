---
title: Git と GitHub
---
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Term from "@site/src/components/Term";
import ViewSource from "@site/src/components/ViewSource";
import registerGitHubVideo from "./register-github.mp4";
import addSshKeyVideo from "./add-ssh-key.mp4";
import gitInitVideo from "./git-init.mp4";
import stageChangesVideo from "./stage-changes.mp4";
import commitChangesVideo from "./commit-changes.mp4";
import secondCommitVideo from "./second-commit.mp4";
import showGitHistoryVideo from "./show-git-history.mp4";
import showGitHistoryWithCliVideo from "./show-git-history-with-cli.mp4";
import addRemoteRepositoryVideo from "./add-remote-repository.mp4";

## バージョン管理システム

**バージョン管理システム**を用いると、プログラムへの変更の履歴を追跡できます。これにより、大規模なプログラムや、複数人で開発されたプログラムを効率的に操作できます。

**Git** は、現在最もよく使われるバージョン管理システムです。軽量ながらも多機能であり、周辺のエコシステムも非常に充実しています。

## GitHub への登録

[GitHub](https://github.com/) は、Git で管理されたソースコードを共有することができるサービスです。Git を使ううえで GitHub への登録は必須ではありませんが、Git を用いた共同開発では通常 GitHub が使用されます。

[GitHub に登録](https://github.com/signup)しましょう。

:::caution 登録する上での注意
GitHub のアカウント名は、開発者コミュニティにおける自分のアイデンティティになります。他の開発者とやり取りする際に表示される名前になるので、慎重に決めてください。
:::

<video src={registerGitHubVideo} controls muted />

## Git の初期設定

Git では、ファイルの変更だけでなく、その変更を行ったのが誰なのかも記録します。Git に対して自分の情報を登録しておましょう。必要な情報は名前とメールアドレスです。

:::warning プライバシーの注意
自分が書いたプログラムを Git を用いて公開する場合、ここで設定した名前とメールアドレスが公開されます。
:::

名前は必ず GitHub のアカウント名と一致させるようにしてください。メールアドレスは GitHub の登録の際に設定したメールアドレスが推奨されますが、メールアドレスを公開したくない場合は、[GitHub のメール設定](https://github.com/settings/emails)から

* Keep my email address private
* Block command line pushes that expose my email

を必要に応じて有効化し、表示されているダミーのメールアドレス (スクリーンショットの例では `112743782+sample-ma9qke@users.noreply.github.com`) を Git に指定してください。

![メールアドレスを隠す](./hide-email-address.png)

次の 2 つのコマンドを実行しましょう。

```shell
$ git config --global user.name 名前
$ git config --global user.email メールアドレス
```

## 公開鍵・秘密鍵ペアの作成と GitHub への登録

GitHub にブラウザからログインする際にはメールアドレスとパスワードを用いますが、Git のコマンドを用いて GitHub を使用する場合には、公開鍵・秘密鍵のペアを使用します。

:::tip 公開鍵暗号と GitHub
公開鍵暗号では、「公開鍵」「秘密鍵」の 2 つの鍵が登場します。この 2 つの鍵は、「公開鍵で暗号化されたデータは秘密鍵を持っていないと復号できない」という特徴を持っています。

自分の PC で生成した公開鍵と秘密鍵のペアのうち、公開鍵のみをブラウザから事前に GitHub に登録しておくことで、自分の PC に保存されている秘密鍵を用いて認証できるようになります。
:::

公開鍵と秘密鍵のペアを生成するには、`ssh-keygen` コマンドを使用します。次のコマンドを実行することで、`Ed25519` というアルゴリズムの実装を用いて鍵を生成できます。

```shell
ssh-keygen -t ed25519
```

デフォルトでは公開鍵が `~/.ssh/id_ed25519.pub`、秘密鍵が `~/.ssh/id_ed25519` に格納されます。公開鍵のファイルを `cat` コマンドを用いて出力し、GitHub の [SSH 鍵の設定](https://github.com/settings/keys)から登録しましょう。

:::tip ホームディレクトリのパスを表す記号
パスの中に現れる `~` は、**ホームディレクトリ**を表します。ホームディレクトリとは、ユーザー毎に割り当てられたディレクトリで、macOS では `/Users/ユーザー名`、Ubuntu では `/home/ユーザー名` になります。デスクトップやドキュメントディレクトリも通常ユーザーディレクトリの下に配置されています。
:::

<video src={addSshKeyVideo} controls muted />

:::tip 公開鍵のフォーマット
`ssh-keygen` が生成する標準の公開鍵は、スペースを区切り文字として 3 つのパートに分かれています。鍵の種類、鍵の中身、コメントです。コメントの部分はなくても構いません。

```
ssh-ed25519 AAAAC3...P3D6i user@computer
```

:::

## Git リポジトリを作成する

Git では、**リポジトリ**と呼ばれる単位でソースコードを管理します。リポジトリはひとつのディレクトリに相当し、そのディレクトリ以下の全てのファイルが Git による追跡対象となります。

Git はコマンドラインから用いるツールですが、理解を深めるために VSCode の機能や拡張機能を併用していきます。次の拡張機能をインストールしておきましょう。

* [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
* [Git Graph](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph)

![インストールする拡張機能](./useful-extensions.png)

まずは Git で管理するためのディレクトリを作成し、VSCode で開きます。ターミナルを開き、次のコマンドを実行しましょう。

```shell
git init
```

<video src={gitInitVideo} controls autoPlay muted loop />

`git init` コマンドは、カレントディレクトリを Git の管理下に置く (カレントディレクトリを Git リポジトリにする) ためのコマンドです。

:::tip `.git` ディレクトリ
Git の管理下に置かれたディレクトリには `.git` という名前のディレクトリが生成されます。このディレクトリには過去のコミットの履歴など、Git が内部的に使用するファイルが格納されます。誤ったディレクトリで `git init` コマンドを実行してしまった場合、このディレクトリを削除しましょう。なお、ピリオドから始まるディレクトリやファイルは `ls` コマンドで見えないで注意が必要です。

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

コミットを作成する前に、変更を**ステージ**する必要があります。VSCode から行う場合、`Source Control` パネル内の変更したファイルの横の `+` ボタンを押します。ファイルが `Changes` セクションから `Staged Changes` に移ったら成功です。

<video src={stageChangesVideo} loop muted autoPlay controls />

コマンドラインから変更をステージする場合には、`git add` コマンドを実行します。

```shell
$ git add ステージするファイルへのパス
$ git add -A # リポジトリ内部のすべてのファイルをステージする場合
```

ステージされた変更からコミットを作成するには、**コミットメッセージ** を入力して `Commit` ボタンを押します。コミットメッセージとは、そのコミットで行われた変更を説明する簡潔なメッセージです。

<video src={commitChangesVideo} muted autoPlay loop controls />

コマンドラインで実行するには、`git commit` コマンドを使用します。

```shell
$ git commit -m "コミットメッセージ"
```

変更がコミットとして記録されました。

## 変更履歴を表示する

先ほど作成したファイルを変更し、ステージした後、もう一度コミットを作ってみましょう。

<video src={secondCommitVideo} muted autoPlay loop controls />

これにより、2 つ目のコミットが作成されました。コミットの履歴を確認するために、先ほどインストールした `Git Graph` 拡張機能を起動してみましょう。`Cmd / Ctrl + Shift + P` キーを押してコマンドパレットを開き、`Git Graph: View Git Graph (git log)` を選択します。

<video src={showGitHistoryVideo} muted autoPlay loop controls />

コマンドを用いて変更を表示するには、`git log` コマンドを使用します。コミットには一意の ID が割り当てられており、この ID を `git diff` コマンドに与えることで、コミット同士を比較することができます。下の動画の最後で実行されている `git diff @ @~` は、最新のコミットとそのひとつ前のコミットを比較するためのコマンドです。`@` が最新のコミットを、`~` が「そのひとつ前」を表します。

<video src={showGitHistoryWithCliVideo} muted autoPlay loop controls />

## 変更を GitHub に保存する

自分のコンピューター上に作成したリポジトリと同期させるため、GitHub 上にもリポジトリを作成します。GitHub 上部のメニューから `New repository` を選択してください。

![リポジトリ](new-repository.png)

必要な設定はリポジトリの名前と公開範囲です。公開するつもりがない場合は公開範囲は `Private` に設定するようにしましょう。

![リポジトリの設定](./repository-settings.png)

続いて、作成したリポジトリと自分の PC 上にあるリポジトリを紐づけます。GitHub 上に表示されている **SSH の** URL をコピーします。これが GitHub 上に作成したリポジトリを表す URL (リモートリポジトリの URL) になります。次のコマンドを実行して、このリモートリポジトリを `origin` (慣習的にリモートリポジトリが一つだけの場合はこの名前が用いられます) という名前で登録します。

```shell
git remote add origin リモートリポジトリのURL
```

追加が完了したら、次のコマンドを実行して `origin` として登録したリモートリポジトリにコミットを送信します。この操作をプッシュと呼びます。`-u` オプションを指定することで、次回から `origin` や `master` の指定を省略し、`git push` のみで実行できるようになります。このコマンドの `master` は**ブランチ**と呼ばれるソースコードの変更の分岐を表す名前で、何も指定しなければ `master` という名前になります。

```shell
git push -u origin master
```

<video src={addRemoteRepositoryVideo} muted controls />

GitHub を開いているブラウザを更新して、プログラムが反映されていることを確認したら完了です。
