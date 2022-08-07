---
title: カレンダーアプリを作ってみよう
---

import CodeBlock from '@theme/CodeBlock';
import Term from "@site/src/components/Term";
import OpenInCodeSandbox from "@site/src/components/OpenInCodeSandbox";
import ExternalVideoPlayer from "@site/src/components/ExternalVideoPlayer";

import calendarVideo from "./calendar.mp4"

これまで学んできた知識を利用して、予定を追加したり削除したりできるカレンダーアプリを作ってみましょう。

<!-- <video src={calendarVideo} controls /> -->

## ヒント
### 今月のカレンダーを表示する

`table` タグを使用して今月のカレンダーを表示する部分を作っていきます。


最初に、日、月、火... の曜日を表示する見出し行を作ってみましょう。

- 行を作成します。

```javascript
const firstRow = //行を作成
```

- 見出しとなる要素を作成していき、それらに日、月、火... という文字列を与え、最初に作成した行に追加します。
    - 親要素に子要素を追加するには `appendChild` メソッドを使います。
    - 曜日の文字列を追加していくには、配列を用意しておくと便利でしょう。
- 最後に、作成した行を表に追加します。

```javascript
const days = [曜日の配列];

for (初期化; 条件式; 更新式) {
  // 見出しとなる要素を作成
  // 作成した要素に、曜日の文字列を追加
  // 最初に作成した行に要素を追加
}

// 作成した行を表に追加
```

次に、同じ要領で日付の部分も作成していきましょう。

- まずは表のマスを必要なだけ並べ、左上から順にマスに 1, 2, ... と番号を振って管理していきましょう。

- `getDay` メソッドの戻り値は、曜日に対応する数字です。日曜日〜土曜日は、それぞれ0〜6の数字に対応しています。

- このことを利用すると、月の最初の日の曜日さえ分かれば、あとは表のマスの番号から月の最初の日の曜日の番号を引けば、正しい場所に日付が表示されることがわかります。

    - `new Date(year, month, 1)` とすることで、今月の最初の日のDateオブジェクトを得られます。

- あとは月の最後の日付を利用して、日付が表示される範囲を調整しましょう。
    - `new Date(year, month+1, 0)` とすることで、今月の最後の日のDateオブジェクトを得られます。

```javascript
（編集中）

```

### カレンダーに予定を追加できるようにする
- （未着手）

### カレンダーから予定を削除できるようにする
- （未着手）

### スタイルを適用する
- （未着手）
















