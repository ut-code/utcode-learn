import CodeBlock from '@theme/CodeBlock';
import Term from "@site/src/components/Term";
import ViewSource from "@site/src/components/ViewSource";
import Answer from "@site/src/components/Answer";

## 第 5 回演習問題 CSS position

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
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

## 問題

1. 水色の部分(ヘッダー)が、スクロールしても同じ位置にとどまるようにしてみましょう。

(ヒント)

- `#header` を固定すると、その下の `#wrapper` の部分が隠れてしまいますか？これは `#header` を固定したことによって、`#header` が画面手前に向かって浮いたようになり、空いたスペースに `#wrapper` が入り込んだためです。

  - 解説画像（横から見た画像など……）

- `#wrapper` の上部に適切なサイズの余白を設けることで対処しましょう。

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

2. 「予約不要」「予約必要」といった表示が、各企画のカードの右上に表示されるようにしましょう。
   - 画像

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

3. (発展) 「中央通り屋台」「屋外ステージ」などの場所の名前が、その場所の企画が画面上にある間は上部にとどまるようにしてみましょう。
   - 動画

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

## 補足説明したほうが良さそうなこと

- `z-index` について
- 本当は `header` タグを使ったほうが SEO 的に望ましい？
