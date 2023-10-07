---
title: Render へのデプロイ
---

import Term from "@site/src/components/Term";
import ViewSource from "@site/src/components/ViewSource";
import registerRenderVideo from "./register-render.mp4";
import connectGitHubVideo from "./connect-github.mp4";
import staticSiteDeployVideo from "./static-site-deploy.mp4";
import prPreviewVideo from "./pr-preview.mp4";
import dynamicSiteDeployVideo from "./dynamic-site-deploy.mp4";

## PaaS

**PaaS** (Platform as a Service) は、プログラムをアップロードすることで、そのプログラムを動作させることができるサービスです。[Render](https://render.com/) は最近登場した簡単に操作できる PaaS です。

## Render への登録

[Render](https://render.com/) に登録しましょう。

<video src={registerRenderVideo} controls muted />

初回は、Render の GitHub へのアクセスを許可しないといけません。

<video src={connectGitHubVideo} controls muted />

## 静的サイトと動的サイト

[Render](https://render.com/) に登録すると、最初に次のような画面が現れます。

![Render のホーム画面](./render-home.png)

この画面の `Static Sites` と `Web Services` の違いを解説します。

`Static Sites` は静的ページのことで、大まかに言えば「内容が変化しない Web ページ」です。サーバーにアップロードされてから内容が変化せず、いつ閲覧しても同じページが表示されます。

一方、 Render における `Web Services` は静的ページの対義語にあたる動的ページに分類されます。これは大まかに言えば「内容が変化する Web ページ」で、先ほどやったようなデータベースやサーバーとの通信をすることで閲覧する端末や閲覧する時間によって内容が異なるページが表示されます。

動的ページは SNS やログイン機能のあるページなど、 Web サービスでは必要不可欠ですが、その都度サーバーとの通信をしなければならないため静的ページに比べてサーバー負荷が大きいというデメリットがあります。 Render でも `Static Sites` は無料ですが、`Web Services` はサーバーの性能によって無料〜月 450 ドルのプランを選択することになります。

## 静的サイトのデプロイ

Render を GitHub のリポジトリと接続することで、ファイルを編集するごとに手動でサーバーにアップロードし直す必要なく GitHub での更新に合わせて自動で Web サイトを更新することができます。 事前にアプリケーション全体を GitHub に保存しておいてください。

静的サイトをデプロイするには、ホーム画面から `Static Sites` を選択しましょう。

リポジトリを選択します。

![リポジトリの接続](./connect-repository.png)

設定項目を入力します。

![静的サイトの設定](./static-site-config.png)

`Create Static Site` を押して、ステータスが `Live` になったら成功です！
表示されているリンク (動画の例では `https://render-test-1zpa.onrender.com`) にアプリケーションが公開されています！

<video src={staticSiteDeployVideo} controls muted />

## プルリクエストプレビュー

プルリクエストした内容を実際に確認できるように、プレビューページを自動で生成することもできます。

設定で、`Enable PR Previews` を設定しましょう。

![Enable PR Previews](./enable-pr-previews.png)

プルリクエストをすると画面に変更の内容を反映したサイトへのリンクが表示されるようになるので、そこからプレビューページにアクセスできます！

![PR Preview のリンク](./pr-preview.png)

<video src={prPreviewVideo} controls muted />

## 動的サイトのデプロイ

Render で動的サイトをデプロイするには、ホーム画面から `Web Services` を選択しましょう。

静的サイトのときと同様にリポジトリを選択します。

設定項目を入力します。ここでは Node.js の設定を行っています。

![動的サイトの設定](./dynamic-site-config.png)

ステータスが `Live` になったら成功です！

![Live](./live.png)

<video src={dynamicSiteDeployVideo} controls muted />

:::tip ポート番号

Render では必要ありませんが、PaaS を利用するにあたって、プログラムの改変が必要になる場合があります。ポート番号は、その一例です。ポート番号は `PORT` という名前の環境変数によって指定されています。 Node.js では、環境変数は `process.env` 変数を用いて取得できるので、このポート番号を指定しましょう。

```javascript
app.listen(process.env.PORT || 3000);
```

:::
