---
title: 開発環境とデプロイ環境
---

 ## 開発用の環境とデプロイ用の環境の2つが存在します。

 ### 開発環境は, Dockerとdocker-compose.ymlを用いて作成します。データベースは開発環境ではDocker上でローカルに生成します。開発が進みデプロイ段階になった段階で, render, heroku, aws, GCPなどのPaaS,IaaSにデプロイします。

開発環境としては例えば, 以下のように用意します。


.devcontainer \
react \
express \
docker/react/Dockerfile \
docker/express/Dockerfile \
docker/json-server/Dockerfile \
docker/json-server/db.json \
docker/postgresql/Dockerfile \
docker/postgresql/init.sql \
docker/docker-compose.yml

.devcontainerは, vscode上でdockerの仮想環境を起動することができるスクリプトを用意します。.devcontainerにより, dockerフォルダの中にあるdocker-composeが呼ばれ, react, express, database, json-serverのDockerプロセスが立ち上がります。

json-serverにはjsonを記述します。
フロントエンドとバックエンドの開発を非同期にすることを可能にします。

databaseは開発時はLocalに生成します。








