---
title: CSS によるスタイリング
sidebar_position: 4
---

import Answer from "@site/src/components/Answer";
import ViewSource from "@site/src/components/ViewSource";
import transitionVideo from "./transition.mp4"
import headerScrollVideo from "./header-scroll.mp4"
import placeScrollVideo from "./place-scroll.mp4"
import Details from "@theme/Details";

この章では「高度な CSS」「CSS による配置」の内容を扱っています。

## ブロックレベル要素とインライン要素

1. 以下の点について、ブロックレベル要素とインライン要素の挙動の違いを確認してみましょう。見た目だけでなく、開発者ツールを用いて値がどうなっているか調べてみましょう。

   - `width`, `height` の設定が反映されるかどうか。
   - `margin` の設定が反映されるかどうか。
   - `padding` を設定するとどのように表示されるか。
   - `font-size` を設定し、`width`, `height` を設定しないとき、要素の大きさはどうなるか。

2. 以下のように、`div` 要素の中に `div` 要素を配置するとどのように表示されるでしょうか。`span` 要素の中に `span` 要素を配置した場合はどうでしょうか。また、上に挙げた CSS プロパティを外側の要素にのみ設定した場合や、内側の要素にも値を設定した場合にどうなるか調べてみましょう。

   ```html title="index.html"
   <body>
     <div class="box1">
       A
       <div class="box2">B</div>
       C
     </div>
   </body>
   ```

### 解説

<Details summary={<summary>解説</summary>}>

- ブロックレベル要素は `width`, `height` の値を設定できますが、インライン要素はできません。
- ブロックレベル要素は `margin` を上下左右に設定できますが、インライン要素は左右しか設定できません。
- ブロックレベル要素に上下の `padding` を設定すると、余白が他の要素に被らないように縦の位置が調整されます。一方、インライン要素に上下の `padding` を設定した場合、要素の縦の位置が調整されず他の要素に被って表示されます。
- ブロックレベル要素の `height` やインライン要素の `width`, `height` の初期値は、中身の要素の大きさによって決まるので、`font-size` を変更することで大きさが変化します。また、開発者ツールで値を調べてみると、インライン要素の大きさは文字の大きさと同じになるのに対し、ブロックレベル要素の `height` は `font-size` の 1.5 倍になることがわかります。

</Details>

## フレックスボックスとグリッド

次のようなウェブサイトを作成してみましょう。

![ut.code();のウェブサイト](utcodeWeb.png)

- メニューバーを flexbox で再現してみましょう。
- 記事の部分は grid で適度な間隔を開けて配置してみましょう。

以下発展課題です。

- 記事・ロゴ・ナビゲーションボタン（ABOUT など）はクリックできるようにしてください。ただし button タグは使わないでください。記事は写真も文字も黒い枠もすべてクリックできるようにしてください。
- ナビゲーションボタンにカーソルを合わせると以下のように色が徐々に(0.1 s で)変わるようにしてください。

<video src={transitionVideo} controls />

- 記事の画像は以下からダウンロードしてください。
  [download](article.jpg)

### 解答例

<ViewSource url={import.meta.url} path="_samples/flexbox-grid" />

## position

この問題では、以下の HTML ファイルと CSS ファイルをコピーして使用してください。

<Details summary={<summary>HTML</summary>}>

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>スタイルシート大学 文化祭</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div id="header">
      <h1>スタイルシート大学 文化祭</h1>
      <p>〜Collage of Style Sheet (CSS) Festival〜</p>
    </div>
    <div id="wrapper">
      <p>以下では、場所ごとに開催企画を紹介します。</p>
      <h2 class="district">中央通り屋台</h2>
      <div class="card">
        <h3>牛串</h3>
        <p>牛串を販売しています。おいしいよ。</p>
        <div class="reservation not-needed">予約不要</div>
      </div>
      <div class="card">
        <h3>牛串</h3>
        <p>牛串を販売しています。おいしいよ。</p>
        <div class="reservation not-needed">予約不要</div>
      </div>
      <div class="card">
        <h3>牛串</h3>
        <p>牛串を販売しています。おいしいよ。</p>
        <div class="reservation not-needed">予約不要</div>
      </div>

      <h2 class="district">屋外ステージ</h2>
      <div class="card">
        <h3>軽音サークル ライブ</h3>
        <p>軽音サークルがライブを披露します。</p>
        <div class="reservation not-needed">予約不要</div>
      </div>
      <div class="card">
        <h3>軽音サークル ライブ</h3>
        <p>軽音サークルがライブを披露します。</p>
        <div class="reservation not-needed">予約不要</div>
      </div>
      <div class="card">
        <h3>軽音サークル ライブ</h3>
        <p>軽音サークルがライブを披露します。</p>
        <div class="reservation not-needed">予約不要</div>
      </div>

      <h2 class="district">屋内ステージ</h2>
      <div class="card">
        <h3>ジャズダンス</h3>
        <p>ジャズダンスを披露します。</p>
        <div class="reservation needed">予約必要</div>
      </div>
      <div class="card">
        <h3>ジャズダンス</h3>
        <p>ジャズダンスを披露します。</p>
        <div class="reservation needed">予約必要</div>
      </div>
      <div class="card">
        <h3>ジャズダンス</h3>
        <p>ジャズダンスを披露します。</p>
        <div class="reservation needed">予約必要</div>
      </div>

      <h2 class="district">教室棟</h2>
      <div class="card">
        <h3>映画サークル上映会</h3>
        <p>部員が制作した映画を上映しています。</p>
        <div class="reservation needed">予約必要</div>
      </div>
      <div class="card">
        <h3>映画サークル上映会</h3>
        <p>部員が制作した映画を上映しています。</p>
        <div class="reservation needed">予約必要</div>
      </div>
      <div class="card">
        <h3>映画サークル上映会</h3>
        <p>部員が制作した映画を上映しています。</p>
        <div class="reservation needed">予約必要</div>
      </div>

      <h2 class="district">講堂</h2>
      <div class="card">
        <h3>合唱サークル 演奏会</h3>
        <p>合唱サークルが演奏会を行います。</p>
        <div class="reservation needed">予約必要</div>
      </div>
      <div class="card">
        <h3>合唱サークル 演奏会</h3>
        <p>合唱サークルが演奏会を行います。</p>
        <div class="reservation needed">予約必要</div>
      </div>
      <div class="card">
        <h3>合唱サークル 演奏会</h3>
        <p>合唱サークルが演奏会を行います。</p>
        <div class="reservation needed">予約必要</div>
      </div>
    </div>
  </body>
</html>
```

</Details>

<Details summary={<summary>CSS</summary>}>

```css
body {
  margin: 0;
  font-weight: normal;
}

h1,
h2,
h3 {
  font-weight: normal;
}

#header {
  text-align: center;

  width: 100%;
  height: 160px;
  background-color: lightblue;
  padding: 20px;
  z-index: 10;
}

#wrapper {
  max-width: 600px;
  margin: auto;
  padding: 20px;
}

.card {
  border: 1px solid #aaa;
  padding: 20px;
}

.district {
  background-color: #ddd;
  margin: 0;
}

.reservation {
  width: 5rem;
  text-align: center;
}

.needed {
  background-color: lightpink;
}

.not-needed {
  background-color: lightgreen;
}
```

</Details>

### `position` の問題 1

水色の部分(ヘッダー)が、スクロールしても同じ位置にとどまるようにしてみましょう。

<video src={headerScrollVideo} controls />

#### ヒント

- `#header` を固定すると、`#wrapper` の上部が `#header` の裏側に隠れてしまうでしょうか。これは `#header` を固定したことによって、`#header` が画面手前に向かって浮いたようになり、空いたスペースに `#wrapper` が入り込んだためです。

  - `#wrapper` の上部に適切なサイズの余白を設けることで対処しましょう。

### `position` の問題 1 の解答

<Answer>

以下を追加しましょう。

```css
#header {
  position: fixed;
  top: 0;
}
```

ヘッダーの下の部分が隠れてしまうのを防ぐために、以下を記述します。

```css
#wrapper {
  margin-top: 200px;
}
```

<ViewSource url={import.meta.url} path="_samples/1_fixed" />
</Answer>

### `position` の問題 2

「予約不要」「予約必要」といった表示が、各企画のカードの右上に表示されるようにしましょう。

![予約のラベルをカード右上に表示](./reserve-label.png)

### `position` の問題 2 の解答

<Answer>

以下を追加しましょう。

```css
.reservation {
  position: absolute;
  top: 20px;
  right: 20px;
}
```

```css
.card {
  position: relative;
}
```

<ViewSource url={import.meta.url} path="_samples/2_relative-absolute" />
</Answer>

### `position` の問題 3

(発展) 「中央通り屋台」「屋外ステージ」などの場所の名前が、その場所の企画が画面上にある間は上部にとどまるようにしてみましょう。

<video src={placeScrollVideo} controls />

### `position` の問題 3 の解答

<Answer>

以下を追加しましょう。

```css
.district {
  background-color: #ddd;
  margin: 0;
  /* 以下の部分を追加: (3) */
  position: sticky;
  top: 200px;
  z-index: 5;
}
```

<ViewSource url={import.meta.url} path="_samples/3_sticky" />

</Answer>

## レスポンシブデザイン

スマホは縦向き、横向きの両方で使います。両方の画面を一つの CSS でデザインする練習をしましょう。

以下要件です。画面上に「縦」「横」の 2 文字を表示した上で、

- 画面が縦長の時は、「縦」を赤くし、赤い下線を引く
- 画面が横長の時は、「横」を赤くし、赤い下線を引く

### 解答例

<Answer>

デバイスが縦長か横長か判別するのに使うメディア特性は `orientation` です。

```html title="index.html"
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="utf-8" />
    <title>課題</title>
    <link rel="stylesheet" href="style.css" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body>
    <div id="landscape">横</div>
    <div id="portrait">縦</div>
  </body>
</html>
```

```css title="style.css"
@media (orientation: landscape) {
  #landscape {
    color: red;
    text-decoration-line: underline;
    text-decoration-color: red;
    text-decoration-style: solid;
  }
}

@media (orientation: portrait) {
  #portrait {
    color: red;
    text-decoration-line: underline;
    text-decoration-color: red;
    text-decoration-style: solid;
  }
}
```

<ViewSource url={import.meta.url} path="_samples/responsive-design" />

</Answer>
