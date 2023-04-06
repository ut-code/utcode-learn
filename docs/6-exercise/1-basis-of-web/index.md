---
title: Web プログラミングの初歩
sidebar_position: 1
---

import Answer from "@site/src/components/Answer";
import ViewSource from "@site/src/components/ViewSource";

この章では教材の「初めてのウェブ開発」から「ウェブサイトの見た目を整える」までの内容を扱っています。

## SOS 団の Web サイト

簡単な[SOS 団の Web サイト](http://haruhi.tv)を作ってみましょう。いきなり飛躍した印象を受けるかもしれませんが、ひよっこエンジニアのキョンでも、団長ハルヒに急かされてからというもの HTML タグを必死に並べ、なんとか SOS 団を外部に知らしめることに成功したのです...と長話はさておき、HTML タグを皆さんもならべてみましょう。
![image.jpg](./image.png)
現在の知識でも作れるよう少し簡単にしました。こんなページを作ってみてください。

### ヒント

- 写真を出すには `img` タグを使います。`src` 属性に写真の URL を指定しましょう。

- [SOS 団の Web サイト](http://haruhi.tv)を開き、ダウンロードしたい画像にカーソルを当てて右クリックすると、写真をダウンロードすることができます。

- 何らかの理由で画像読み込みに失敗した時、何の写真を出したかったか説明するために、画像には「代替テキスト」を設定することが多いです。`img` タグでは `alt` 属性で代替テキストを指定できます。余力のある人は実装してみましょう。実装したら、写真ファイルを削除して挙動を確認してみましょう。

- 文章や写真がなんとなく真ん中で一列にきれいに揃えられていますね。実は `table` タグで表を作っています。表といえど境界線がないので気づきにくかったかもしれません。`table` タグに `tr`、`th`、`td`タグをネストさせてきれいな表を作りましょう。全ての `td` タグの `align` 属性にある値を入れると...なんということでしょう。真ん中が縦で揃えられた表が完成します。

- [こちら](https://developer.mozilla.org/ja/docs/Web/HTML/Element)で HTML タグの使い方が簡潔に示されています。

### 解答例

<Answer>

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>SOS dan web site</title>
  </head>
  <body>
    <table>
      <tr>
        <th align="center"><h1>SOS団のサイトへようこそ！</h1></th>
      </tr>
      <tr>
        <td align="center"><img src="./zozlogo.jpg" alt="SOS団ロゴ" /></td>
      </tr>
      <tr>
        <td align="center"><h4>入り口</h4></td>
      </tr>
      <tr>
        <td align="center">
          メールはこちらから→<img src="./post_no.jpg" alt="ポスト" />
        </td>
      </tr>
      <tr>
        <td align="center"><h4>活動内容</h4></td>
      </tr>
    </table>
  </body>
</html>
```

`jpg` ファイルは HTML ファイルと同じ階層に入れているので、`img` タグの `src` 属性は `./ファイル名` となっています。

<ViewSource url={import.meta.url} path="_samples/sos-dan" />

</Answer>

## 名前の長さ

太郎くんは、名前を 4 文字以上 10 文字以下で入力して登録できるウェブサイトを作ろうとしています。そこで、名前の文字数を変数に入れておき、

- 文字数が 4 文字以上 10 文字以下なら `登録できます`
- 文字数が 0 文字なら `名前を入力してください`
- それ以外の文字数(1 文字〜3 文字または 11 文字以上)なら `名前は4文字以上10文字以下で入力してください`

と表示されるプログラムを以下のように作成しました。

```javascript
let lengthOfName = 7;
if (4 <= lengthOfName <= 10) {
  document.write("登録できます");
}
if (lengthOfName === 0) {
  document.write("名前を入力してください");
} else {
  document.write("名前は4文字以上10文字以下で入力してください");
}
```

しかし、変数の値を色々変えて試してみたところ、思った通りに表示されないことがわかりました。このプログラムを、正しく動作するように修正してください。修正すべき箇所は 2 つあります。

### 解答例

<Answer>

```javascript
let lengthOfName = 7;
if (4 <= lengthOfName && lengthOfName <= 10) {
  // 比較演算子を2つ並べるのではなく、論理演算子&&を用います。
  document.write("登録できます");
} else if (lengthOfName === 0) {
  // else if の else が抜けていました。
  document.write("名前を入力してください");
} else {
  document.write("名前は4文字以上10文字以下で入力してください");
}
```

<ViewSource url={import.meta.url} path="_samples/length-of-name" />

</Answer>

## ブラックジャック

A さんと B さんの 2 人が、トランプゲームのブラックジャックで遊んでいます。ブラックジャックのルールは以下の通りとします。

- 2 人の手札の数字の合計を比べ、より大きい方が勝ちとなる。
- ただし、どちらか 1 人の手札の数字の合計が 21 を超えていた場合、その人の負けとなる。
- 2 人の手札の数字の合計が同じだった場合や、2 人とも 21 を超えていた場合は引き分けとなる。

A さんと B さんの手札の数字の合計をそれぞれ変数に入れておき、A さんと B さんのどちらが勝つか、あるいは引き分けかを表示するプログラムを作成してください。

### 解答例

<Answer>

```javascript
let numberOfA = 19;
let numberOfB = 22;

// 21を超えていた場合は0(最弱)として扱う
if (numberOfA > 21) numberOfA = 0;
if (numberOfB > 21) numberOfB = 0;

if (numberOfA > numberOfB) {
  document.write("Aさんの勝ち");
} else if (numberOfA < numberOfB) {
  document.write("Bさんの勝ち");
} else {
  document.write("引き分け");
}
```

<ViewSource url={import.meta.url} path="_samples/blackjack" />

</Answer>

## 関数

(1)引数を 2 つとり、そのうち大きい数を返す関数 max を定義してください。

(2)1,1,2,3,5...というように、前 2 つの数を足すと次の数になるような数の並びをフィボナッチ数列と言います。引数 n に対してフィボナッチ数列の n 番目の数を返す関数を定義してください。ただし 1 番目と 2 番目の数は 1 とします。

### 解答例

<Answer>

(1)解答例

```javascript
function max(a, b) {
  if (a > b) {
    return a;
  }
  return b;
}
```

<ViewSource url={import.meta.url} path="_samples/max" />

(2)解答例

```javascript
function fibonacci(n) {
  if (n <= 2) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// このように、関数が自分自身を呼び出すときその関数を再帰関数と呼びます。
```

<ViewSource url={import.meta.url} path="_samples/fibonacci/recursion" />

(2)別解

もし「配列」「繰り返し」という概念をすでに学習している場合、次のような書き方もできます。

```javascript
function fibonacci(n) {
    let sequence = [0, 1];
    if( n === 0 || n === 1 ){
      return sequence[n]
    };
    for ( let i = 2; i < n + 1; i += 1 ){
        sequence.push( sequence[i - 1] + sequence[i - 2] )
    };
    return sequence[n];
  }

```
<ViewSource url={import.meta.url} path="_samples/fibonacci/array" />


</Answer>

## トラック

引っ越しトラックを考えます。

- 段ボール箱の数が 30 個以内
- 合計の重量が 2000 kg 以内

の両方の条件を満たすときに、トラックは出発できます。

「箱の数」「合計の重量」の 2 つの変数の値によって、

- 出発できる場合には「出発できます」
- 箱が多すぎる場合には「箱の数を減らしてください」
- 重量が大きすぎる場合には「重量を減らしてください」
- 箱も多すぎるし、重量も重すぎる場合には「箱の数と重量を減らしてください」

と表示されるプログラムを作ってみましょう。

また、出発できる場合には文字を緑色で、出発できない場合には文字を赤色で表示するようにしましょう。

### ヒント

`document.write()` では文字列だけでなく、HTML 要素を出力することができます。

```javascript title=script.js
document.write("<p style='color: blue'>Hello World!</p>");
```

![青いHello World](./blue-hello-world.jpeg)

### 解答例

<Answer>

```javascript title=script.js
let box = 25;
let weight = 1000;

if (box <= 30 && weight <= 2000) {
  document.write("<p style='color: green'>出発できます</p>");
} else if (box > 30 && weight <= 2000) {
  document.write("<p style='color: red'>箱の数を減らしてください</p>");
} else if (box <= 30 && weight > 2000) {
  document.write("<p style='color: red'>重量を減らしてください</p>");
} else {
  document.write("<p style='color: red'>箱の数と重量を減らしてください</p>");
}
```

<ViewSource url={import.meta.url} path="_samples/truck" />

</Answer>
