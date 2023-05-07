---
title: プロジェクト
---

import Term from "@site/src/components/Term";
import ViewSource from "@site/src/components/ViewSource";
import ExternalVideoPlayer from "@site/src/components/ExternalVideoPlayer";
import calenderVideo from "./calender.mp4";

ここまでの知識を使って、今月分の予定管理アプリを作ってみましょう。

### ルール

- 日付の部分をクリックすると予定を新たに追加できる
- すでに入っている予定をクリックすると予定を編集できる
- 編集中には消去ボタンが現れ、押すと予定を削除できる。
- 編集中に別の場所を押したりエンターキーを押したりすると予定が確定する（何も入力していない状態だと消える）

<video src={calenderVideo} controls loop autoPlay muted />

## ヒント

いきなり作るのが難しい場合はタスクを分解してみましょう。今回は大まかに<br/>
① カレンダーを作る<br/>
② カレンダーに機能をつける<br/>
の２つの仕事があるので、まず ① からやっていきましょう。

### ① について

- HTML 要素の作成は `document.createElement` 関数を使って行えます。また、`appendChild` メソッドを用いることで要素内に子要素を追加することができます。

- 表を作るわけなので `table` タグを使うのですが、日数を１から３０前後までいちいち HTML ファイルに書き込んでいくのは手間ですし応用が効かないので、JavaScript ファイル上で繰り返しを使ってコードを簡潔にしましょう。もちろん今月の日数はカレンダーを見ればわかりますが、[`Date` クラス](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Date)を用いて月初めの日と月終わりの日を取ってこれば、計算をしなくても始まりの曜日や月の日数が取ってこれそうですね。

```javascript
const today = new Date();
const year = today.getFullYear();
const month = today.getMonth();
const startDate = new Date(year, month, 1);
const endDate = new Date(year, month + 1, 0);
```

- 後で日付の下に予定を追加したり予定を編集したりしたいので、予定を書き込むための要素も作ったうえで、その要素を保存するオブジェクトを作っておきましょう。

```javascript
//予定を書き込むための要素を格納するオブジェクト
const container = {};
//ここに予定を打ち込む要素を保存しておく
```

### ② について

- 要素をクリックした時に実行される関数は要素の `onclick` <Term type="javascriptProperty">プロパティ</Term>から設定することができます。

- イベントが発生して関数が呼び出されると、一番目の引数に発生したイベントの情報が格納された `Event` オブジェクトが渡されてきます。`Event` オブジェクトの `target` <Term type="javascriptProperty">プロパティ</Term>を用いることで、クリックした要素を取得することができます。取得した要素の種類によって関数を変えることで、予定の編集や追加の機能を実現できます。

```html title="index.html"
<div id="div">ここをクリック！</div>
```

```javascript title="script.js"
function clicked(e) {
  console.log(e.target.tagName);
}

const div = document.getElementById("div");

div.onclick = clicked;
```

<ViewSource url={import.meta.url} path="_samples/event-target" />

- グローバル変数の [`window`](https://developer.mozilla.org/ja/docs/Web/API/Window) は、スクリプトを実行しているウィンドウそのものを表します。この変数も `onclick` 要素を指定することができます。

- [`addEventListener` メソッド](https://developer.mozilla.org/ja/docs/Web/API/EventTarget/addEventListener)は、ターゲットに特定のイベントが行われるたびに呼び出される関数を設定します。

```javascript title="script.js"
function pressed() {
  console.log("キーを押しました");
}

window.addEventListener("keypress", pressed);
```

<ViewSource url={import.meta.url} path="_samples/addEventListener" />

## 解答例

解答例は次のリンクを参照してください。

<ViewSource url={import.meta.url} path="_samples/calender" />
