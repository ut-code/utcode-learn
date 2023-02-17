---
title: 実際の開発をする時のチップス
---

## 初心者向けに、開発の流れをチップスを織り交ぜながら説明していきます。

## 説明の方法
SPAのwebアプリケーションを作る上で必要になる知識を、思考実験をしながら説明していきます。

## 3つのサーバー
フロントエンドのウェブサーバー
バックエンドのAPIサーバー
データベースサーバー

の3つのサーバーを思考実験として作っていきます。
フロントエンドはAPIサーバーの接続先の情報を知っています。
バックエンドは、データベースの接続先の情報を知っています。

ブラウザでURLを入力すると、TCP/IP層の機能が、ブラウザが遠隔地にあるアプリケーション層のウェブサーバーを見つけてくれます。
初めて接続した時に、ウェブサーバーは、ブラウザにHTML,CSS,JS情報を送信します。
ユーザーがブラウザでボタンを押した時に、ブラウザのJSはAPIサーバーから必要な情報をfetchします。


## 技術選定
フロントエンドのSPAのフレームワークとして、React, Angular, Vue...の中から、今回はReactを選択します。Nextjsも用います。
APIの通信手段として、RESTAPI, graphql, RPCの中から、今回はRESTApiを選択します。
APIサーバーのフレームワークとして、express, nestjs, django-rest-api...の中から、nestjsを選択します。
SQLとNoSQLの中から、SQLを選択します。Postgresql,Mysql...の中から、Postgresqlを選択します。
PrismaとTypeOrmの中から、Prismaを選択します。

## デプロイ環境について
フロントエンドはvercel, バックエンドはAWS, データベースはrenderにデプロイします。

## 開発環境について
フロントエンドとバックエンドとデータベースを1つのフォルダの中に作成します。3つのデプロイ先はそれぞれ別ですが、1つのレポジトリに入れると開発がしやすいです。
project/server (APIサーバー)
project/web (ウェブサーバー)
project/docker-compose.yml (データベース)
のように配置します。

フロントエンドのウェブサーバーと、バックエンドのAPIサーバーは、localで直接立ち上げます。
データベースサーバーはlocalのDockerコンテナで立ち上げます。

cd project/server; npm run dev;
cd project/web; npm run dev;
cd project/; docker-compose up -d;

のように立ち上げます。

フロントエンド、サーバー、データベース、type-checkといった複数のプロセスを立ち上げます。
この時、tmuxを使うことをお勧めします。
terminalで、tmux new -s server というコマンドを打ち、sessionを開始します。
ctrl+b+", ctrl+b+% というコマンドを打ち、ペインを作成します。
server, web, databaseのプロセスを起動してください。(npm run dev, docker-compose up -dなど)

今回はデータベースをdockerで立ち上げました。docker-compose downをすると生データは削除されます。開発中は生データをsample.sqlやseed.tsなどで生データを逐次生成するので、問題ありません。

## git branchについて
git branch TP-001 や git branch frontend-add-form
のように分かりやすいブランチ名を作成します。(TPはtutorial projectの略です)
branchはdevelopから切ります。
git add, git commit, git push origin branch名とし、pull requestを作成します。誰かにreviewをしてもらいましょう。vscodeのgit graphやsource controlの機能を使うと便利です。git pushをする前に、remoteの変更をpullしてlocalのbranchにmergeしておきましょう。

## git commitのメッセージ内容について
git commit -m"TP-001 コードでは分からない部分の抽象的な説明を書く"

## git commitの単位について
機能ごとにcommitを分けると、分かりやすいです。vscodeでマウスでコードを選択し、右クリックを押してstage selected areaを選択すると、選択した部分のみをstageできます。source controlを使うことで、stageとunstageを自在に操ることが簡単になります。

## migrationについて
開発中は、prismaやtypeormなどのormで作成したモデルに従って、sqlが生成されて実行されます。
開発開始時には、ORMで操作するDBのモデルModel_1と、DBに入っている生データData_1があるとします。
開発中に、ORMを編集し、DBのモデルをModel_developに変更したとします。この時、Model_developとModel_1の差分を埋めるsqlが自動で生成され、実行されます。Data_1はData_developに変化します。本来の意図とは違うsqlが生成されることを原理的に避けることができません。その時はData_developを削除し、新たに適当なデータを代入します。
Model_developとModel_1の差分を正しく変更するSQLを、手で作成する必要があります。これをmigration fileと言います。

今、新たにテーブルを追加し、ボタンを作成するという機能に取り組んでいるとします。
フロントエンドの変更、バックエンドの変更、ORMの変更をします。
次に、migration fileの作成を行います。upとdownのsqlを作成します。
migrationのupとdown(Data_1→Data_develop, Data_develop→Data_1の変化)が成功することを確認します。

## Debugについて
フロントエンドのdebugは、ブラウザ上で行います。http://localhost:3000を開き、inspectを開きます。
Sourcesから、javascriptのファイルを開きます。監視したいコードの部分をクリックします。webでボタンを押すと、クリックした箇所で実行が静止します。マウスをホバーさせると変数のデータを確認できます。
バックエンドのdebugは、vscode上で行います。F5キーでdebugモードに入ります。

## 開発中のチップス
変数名や関数名の上で右クリックをしましょう。Go to Defenition, Go to Reference, Go to Implementationをすることで、変数や関数が実装されている箇所や、利用されている箇所に飛ぶことができます。

## vscodeのチップス
拡張機能を入れすぎないことがお勧めです。設定が重くなったら一度全て削除し、必要になったら機能を追加しましょう。

## キー操作
emacsキーバインド(ctrl+p, ctrl+n, ctrl+b, ctrl+fなど)を用いることで、快適な操作が可能になります。

## 補完機能の利用
ルールベースの補完機能を使うと開発のスピードが速くなります。

## MVPの作成
Minimum Valuable Productの作成を早期に目指しましょう。


## オプション
json-serverをフロントエンド上で起動させることで、バックエンドがあたかもあるかのように開発を先行して進めることができます。
trelloやjiraなどのアプリを使えば、アジャイル開発を円滑に行うことが可能になります。github issuesやprojectでも同じような機能があります。
dev containerを用いると、環境の立ち上げが快適になる可能性があります。一方で、プロセスを全て起動するのは重すぎる場合もあります。必要に応じてプロセスを立ち上げることがお勧めです。
