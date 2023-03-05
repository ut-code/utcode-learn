---
title: 実際の開発をする時のチップス
---

## 初心者向けに、開発の流れをチップスを織り交ぜながら説明していきます。

## 説明の方法

SPA の web アプリケーションを作る上で必要になる知識を、思考実験をしながら説明していきます。

## 3 つのサーバー

フロントエンドのウェブサーバー
バックエンドの API サーバー
データベースサーバー

の 3 つのサーバーを思考実験として作っていきます。
フロントエンドは API サーバーの接続先の情報を知っています。
バックエンドは、データベースの接続先の情報を知っています。

ブラウザで URL を入力すると、TCP/IP 層の機能が、ブラウザが遠隔地にあるアプリケーション層のウェブサーバーを見つけてくれます。
初めて接続した時に、ウェブサーバーは、ブラウザに HTML,CSS,JS 情報を送信します。
ユーザーがブラウザでボタンを押した時に、ブラウザの JS は API サーバーから必要な情報を fetch します。

## 技術選定

フロントエンドの SPA のフレームワークとして、React, Angular, Vue...の中から、今回は React を選択します。Nextjs も用います。
API の通信手段として、RESTAPI, graphql, RPC の中から、今回は RESTApi を選択します。
API サーバーのフレームワークとして、express, nestjs, django-rest-api...の中から、nestjs を選択します。
SQL と NoSQL の中から、SQL を選択します。Postgresql,Mysql...の中から、Postgresql を選択します。
Prisma と TypeOrm の中から、Prisma を選択します。

## デプロイ環境について

フロントエンドは vercel, バックエンドは AWS, データベースは render にデプロイします。

## 開発環境について

フロントエンドとバックエンドとデータベースを 1 つのフォルダの中に作成します。3 つのデプロイ先はそれぞれ別ですが、1 つのレポジトリに入れると開発がしやすいです。
project/server (API サーバー)
project/web (ウェブサーバー)
project/docker-compose.yml (データベース)
のように配置します。

フロントエンドのウェブサーバーと、バックエンドの API サーバーは、local で直接立ち上げます。
データベースサーバーは local の Docker コンテナで立ち上げます。

cd project/server; npm run dev;
cd project/web; npm run dev;
cd project/; docker-compose up -d;

のように立ち上げます。

フロントエンド、サーバー、データベース、type-check といった複数のプロセスを立ち上げます。
この時、tmux を使うことをお勧めします。
terminal で、tmux new -s server というコマンドを打ち、session を開始します。
ctrl+b+", ctrl+b+% というコマンドを打ち、ペインを作成します。
server, web, database のプロセスを起動してください。(npm run dev, docker-compose up -d など)

今回はデータベースを docker で立ち上げました。docker-compose down をすると生データは削除されます。開発中は生データを sample.sql や seed.ts などで生データを逐次生成するので、問題ありません。

## git branch について

git branch TP-001 や git branch frontend-add-form
のように分かりやすいブランチ名を作成します。(TP は tutorial project の略です)
branch は develop から切ります。
git add, git commit, git push origin branch 名とし、pull request を作成します。誰かに review をしてもらいましょう。vscode の git graph や source control の機能を使うと便利です。git push をする前に、remote の変更を pull して local の branch に merge しておきましょう。

## git commit のメッセージ内容について

git commit -m"TP-001 コードでは分からない部分の抽象的な説明を書く"

## git commit の単位について

機能ごとに commit を分けると、分かりやすいです。vscode でマウスでコードを選択し、右クリックを押して stage selected area を選択すると、選択した部分のみを stage できます。source control を使うことで、stage と unstage を自在に操ることが簡単になります。

## migration について

開発中は、prisma や typeorm などの orm で作成したモデルに従って、sql が生成されて実行されます。
開発開始時には、ORM で操作する DB のモデル Model_1 と、DB に入っている生データ Data_1 があるとします。
開発中に、ORM を編集し、DB のモデルを Model_develop に変更したとします。この時、Model_develop と Model_1 の差分を埋める sql が自動で生成され、実行されます。Data_1 は Data_develop に変化します。本来の意図とは違う sql が生成されることを原理的に避けることができません。その時は Data_develop を削除し、新たに適当なデータを代入します。
Model_develop と Model_1 の差分を正しく変更する SQL を、手で作成する必要があります。これを migration file と言います。

今、新たにテーブルを追加し、ボタンを作成するという機能に取り組んでいるとします。
フロントエンドの変更、バックエンドの変更、ORM の変更をします。
次に、migration file の作成を行います。up と down の sql を作成します。
migration の up と down(Data_1→Data_develop, Data_develop→Data_1 の変化)が成功することを確認します。

## Debug について

フロントエンドの debug は、ブラウザ上で行います。http://localhost:3000 を開き、inspect を開きます。
Sources から、javascript のファイルを開きます。監視したいコードの部分をクリックします。web でボタンを押すと、クリックした箇所で実行が静止します。マウスをホバーさせると変数のデータを確認できます。
バックエンドの debug は、vscode 上で行います。F5 キーで debug モードに入ります。

## 開発中のチップス

変数名や関数名の上で右クリックをしましょう。Go to Defenition, Go to Reference, Go to Implementation をすることで、変数や関数が実装されている箇所や、利用されている箇所に飛ぶことができます。

## vscode のチップス

拡張機能を入れすぎないことがお勧めです。設定が重くなったら一度全て削除し、必要になったら機能を追加しましょう。

## キー操作

emacs キーバインド(ctrl+p, ctrl+n, ctrl+b, ctrl+f など)を用いることで、快適な操作が可能になります。

## 補完機能の利用

ルールベースの補完機能を使うと開発のスピードが速くなります。

## MVP の作成

Minimum Valuable Product の作成を早期に目指しましょう。

## オプション

json-server をフロントエンド上で起動させることで、バックエンドがあたかもあるかのように開発を先行して進めることができます。
trello や jira などのアプリを使えば、アジャイル開発を円滑に行うことが可能になります。github issues や project でも同じような機能があります。
dev container を用いると、環境の立ち上げが快適になる可能性があります。一方で、プロセスを全て起動するのは重すぎる場合もあります。必要に応じてプロセスを立ち上げることがお勧めです。
