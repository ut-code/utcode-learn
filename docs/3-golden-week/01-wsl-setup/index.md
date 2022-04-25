---
title: WSLのセットアップ (Windows のみ)
---

import CodeBlock from '@theme/CodeBlock';
import Term from "@site/src/components/Term";
import OpenInCodeSandbox from "@site/src/components/OpenInCodeSandbox";
import ExternalVideoPlayer from "@site/src/components/ExternalVideoPlayer";

## Linux と WSL

現在、Web サービスを提供するコンピューターのほとんどに、**Linux** という名前の OS が搭載されています。このため、Web サービスを開発するには、Linux を用いて開発することが理想です。しかしながら、現在流通している一般的なコンピューターに搭載されている OS は、Windows または macOS です。

実は、macOS を使う場合はあまり問題になりません。これは、macOS という OS が、Linux と源流を共にしているからです。こういった理由から、macOS は Web 開発者から強く支持されています。

**WSL** は、こういった状況を覆すべく Microsoft 社によって開発された、**Windows 上で Linux を動かすための仕組み**です。WSL を用いることで、Windows の利便性を享受しつつ、Linux のパワーを活用できます。

## Windows 環境に WSL をインストールする

WSL のインストールは、10 分程度で終わる簡単な作業です。下の動画を参考に実施しましょう。

<ExternalVideoPlayer src="https://www.youtube.com/embed/aRf7NYZpUa0" />

まずは `ターミナル` アプリを管理者として実行します。

:::tip 管理者として実行
`管理者として実行` メニューを使用してアプリを起動することで、アプリは強い権限を行使できるようになります。WSL のインストールにはこのような強い権限が必要なので、起動時に特殊な操作が必要になります。
:::

![管理者として実行](run-as-administrator.png)

続いて、`wsl --install` コマンドを実行します。これにより、WSL が全自動でインストールされます。

![コマンドを打つ](type-wsl-install.png)

インストールが完了すると、自動的にコンピューターが再起動します。このとき、3 回質問を受けます。

- `Enter new UNIX username`: WSL は、普段使っている Windows とは別のコンピューターのように振る舞います。ここで指定する名前は何でも構いませんが、**英数字のみで構成された文字列**とすることを強く推奨します。
- `New password` と `Retype new password` では、上で指定したユーザーのパスワードを入力します。**入力しても画面に変化はありません**が、入力自体は行われているので気にせず入力しましょう。

![ユーザーを作成する](type-password.png)

画面に `$` 記号が表示された状態で止まったら完了です。ウィンドウを閉じても問題ありません。

![完成](completed.png)
