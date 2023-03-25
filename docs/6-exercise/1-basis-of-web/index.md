---
title: Webプログラミングの初歩
sidebar_position: 1
---

この章では教材の「初めてのウェブ開発」から「ウェブサイトの見た目を整える」までの内容を扱っています。

## HTML
簡単な[SOS団のWebサイト](http://haruhi.tv)を作ってみましょう。いきなり飛躍した印象を受けるかもしれませんが、ひよっこエンジニアのキョンでも、団長ハルヒに急かされてからというものhtmlタグを必死に並べ、なんとかSOS団を外部に知らしめることに成功したのです...と長話はさておき、htmlタグを皆さんもならべてみましょう。
![image.jpg](./image.png)
現在の知識でも作れるよう少し簡単にしました。こんなページを作ってみてください。




  __ヒント__

  
  - 写真を出すには`img`タグを使います。`src`属性に写真のURLを指定しましょう。
  
  - [SOS団のWebサイト](http://haruhi.tv)を開き、ダウンロードしたい画像にカーソルを当てて右クリックすると、写真をダウンロードすることができます。
  
  - 何らかの理由で画像読み込みに失敗した時、何の写真を出したかったか説明するために、画像には「代替テキスト」を設定することが多いです。`img`タグでは`alt`属性で代替テキストを指定できます。余力のある人は実装してみましょう。実装したら、写真ファイルを削除して挙動を確認してみましょう。
  
  - 文章や写真がなんとなく真ん中で一列にきれいに揃えられていますね。実は`table`タグで表を作っています。表といえど境界線がないので気づきにくかったかもしれません。`table`タグに`tr` `th` `td`タグをネストさせてきれいな表を作りましょう。全てのtdタグのalign属性にある値を入れると...なんということでしょう。真ん中が縦で揃えられた表が完成します。
  
  - [こちら](http://www.htmq.com/)でHTMLタグの使い方が簡潔に示されています。

## 回答例

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SOS dan web site</title>
  </head>
  <body>
    <table>
      <tr>
        <th align="center"><h1>SOS団のサイトへようこそ！</h1></th>
      </tr>
      <tr>
        <td align="center"><img src="./zozlogo.jpg" alt="SOS団ロゴ"></td>
      </tr>
      <tr>
        <td align="center"><h4>入り口</h4></td>
      </tr>
      <tr>
        <td align="center">メールはこちらから→<img src="./post_no.jpg" alt="ポスト"></td>
      </tr>
      <tr>
        <td align="center"><h4>活動内容</h4></td>
      </tr>
    </table>
  </body>
</html>
```

jpgファイルはhtmlファイルと同じ階層に入れているので、`img`タグの`src`属性は`./ファイル名`となっています。

## 条件分岐

## 関数

##

