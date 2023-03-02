import transitionVideo from "./transition.mp4"

## 第５回　フレックスボックスとグリッドの問題

次のようなウェブサイトを作成してみましょう。


![ut.code();のウェブサイト](utcodeWeb.png)

以下要件です。

- 記事・ロゴ・ナビゲーションボタン（ABOUTなど）はクリックできるようにしてください。ただしbuttonタグは使わないでください。記事は写真も文字も黒い枠もすべてクリックできるようにしてください。
- ナビゲーションボタンにカーソルを合わせると以下のように色が徐々に(0.1sで)変わるようにしてください。

<video src={transitionVideo} controls />

- 記事の画像は以下からダウンロードしてください。
[download](article.jpg)

## 解答例
```html title=index.html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>Our site</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <header>
      <a class="logo" href="#"> ut.<span>code</span>(); </a>
      <ul class="nav">
        <li class="nav-about">
          <a class="link" href="#">ABOUT</a>
        </li>
        <li>
          <a class="link" href="#">BLOG</a>
        </li>
        <li>
          <a class="link" href="#">CONTACT</a>
        </li>
      </ul>
    </header>
    <h1>最近の記事</h1>
    <div class="board">
      <article class="article1">
        <a href="#">
          <img src="image.jpg" width="400px" />
          <div href="#" class="title">大会に参加しました！</div></a
        >
      </article>
      <article class="article2">
        <a href="#">
          <img src="image.jpg" width="400px" />
          <div href="#" class="title">ハッカソンをしました！</div></a
        >
      </article>
      <article class="article3">
        <a href="#">
          <img src="image.jpg" width="400px" />
          <div href="#" class="title">タイピングしてみた</div></a
        >
      </article>
      <article class="article4">
        <a href="#">
          <img src="image.jpg" width="400px" />
          <div href="#" class="title">Reactを使おう</div></a
        >
      </article>
    </div>
  </body>
</html>
```

```css title=style.css
header {
  height: 70px;
  display: flex;
  border-bottom: solid;
  padding-right: 10px;
  padding-left: 10px;
  margin-top: 0;
  align-items: center;
}

span {
  color: springgreen;
}

ul.nav {
  display: flex;
  align-items: center;
  list-style: none;
  margin-left: auto;
  height: 100%;
}

.nav li {
  height: 100%;
  width: 100px;
  border-right: solid;
}

li.nav-about {
  border-left: solid;
}

header a {
  color: black;
  text-decoration: none;
  display: block;
  text-align: center;
}

.logo {
  font-size: 40px;
}

.link {
  height: 45px;
  padding-top: 25px;
  transition: 0.25s;
}

.link:hover {
  background-color: palegreen;
}

h1 {
  margin-top: 100px;
  text-align: center;
}

.board {
  display: grid;
  grid-template-columns: 400px 400px;
  grid-template-rows: 300px 300px;
  justify-content: center;  
  gap: 40px 50px;
}

article{
  overflow: hidden;
  background-color: black;
}

article a{
  text-decoration: none;
}


article div.title{
  height: 100%;
  display: block;
  text-align: center;
  color: white;
  letter-spacing: 2px;
}


```