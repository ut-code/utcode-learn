## 課題(メディアクエリ)
スマホは縦向き、横向きの両方で使います。両方の画面を一つのCSSでデザインする練習をしましょう。

以下要件です。画面上に「縦」「横」の2文字を表示した上で、
- 画面が縦長の時は、「縦」を赤くし、赤い下線を引く
- 画面が横長の時は、「横」を赤くし、赤い下線を引く

### 回答例
デバイスが縦長か横長か判別するのに使うメディア特性は`orientation`です。
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
    <div id="div1">横</div>
    <div id="div2">縦</div>  
  </body>
</html>
```

```css title="style.css"
@media (orientation: landscape) {
  #div1 {
    color: red;
    text-decoration-line: underline;
    text-decoration-color: red;
    text-decoration-style: solid;
  }
}

@media (orientation: portrait) {
  #div2 {
    color: red;
    text-decoration-line: underline;
    text-decoration-color: red;
    text-decoration-style: solid;
  }
}
```