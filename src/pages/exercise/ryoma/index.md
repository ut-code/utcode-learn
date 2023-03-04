# 課題１（配列、繰り返し）

みんなのテストの点数が出ました。
~~~
佐藤...math: 80点、science:70点
鈴木...math: 90点、science:70点
高橋...math:100点、science:40点
田中...math: 85点、science:65点
~~~

この点数データを使って、順位表を作ってください。
![image.jpg](./tableImage.png)

ルールは以下とします。

- `math` , `science`の合計点が高い者を上位とする。
- 上記で同率になった場合、`math`の得点が高い者を上位とする。
- 順位の判定はもちろん、配列内で繰り返し処理（点数の比較）をするプログラムをjavascriptで書いて行う。

~~~ javascript
let academicPerformanceData = [sato, suzuki, takahashi, tanaka];

//let academicPerformanceData = [tanaka, suzuki, sato, takahashi];などでも構わない。

//for文でacademicPerformanceDataの要素を順位順に並べ替える処理を書く
~~~

最初の配列`academicPerformanceData`がどんな並びをしていても,最終的には1位から順に並んだ配列が出てくるようにプログラムを作成すること。(上記の点数の場合は`[suzuki, tanaka, sato, takahashi]`)

__ヒント__
~~~ javascript
const sato = {
  name:"佐藤";
  scores: {
    math: 0,
    science: 0;
    total: 0;
  };
}
~~~

このように氏名・点数のデータからオブジェクトを作成すると処理がしやすいでしょう。

プログラムを書き終えたら、初めの`academicPerformanceData`の順番をいじったり、点数を書き換えたりして、望み通りの表ができるか確認しましょう。
## 回答例
まずは、htmlで表のひな形を作ります。
~~~html title="index.html"
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <table border="1">
    <tr>
      <th>順位</th>
      <th>氏名</th>
      <th>合計点</th>
    </tr>
    <tr>
      <td>1</td>
      <td id="prize1Name"></td>
      <td id="prize1Score"></td>
    </tr>
    <tr>
      <td>2</td>
      <td id="prize2Name"></td>
      <td id="prize2Score"></td>
    </tr>
    <tr>
      <td>3</td>
      <td id="prize3Name"></td>
      <td id="prize3Score"></td>
    </tr>
    <tr>
      <td>4</td>
      <td id="prize4Name"></td>
      <td id="prize4Score"></td>
    </tr>
  </table>
  <script src="./script.js"></script>
</body>
</html>
~~~

続いて、script.jsの回答例です。順を追って解説していきます。
~~~javascript title="script.js"
function makePersonalData(name, mathScore, scienceScore) {
  return {
    name: name,
    scores: {
      math: mathScore,
      science: scienceScore,
      total: mathScore + scienceScore
    }
  };
}

//データオブジェクトを生成
const sato = makePersonalData("佐藤", 80, 70);
const suzuki = makePersonalData("鈴木", 90, 70);
const takahashi = makePersonalData("高橋", 100, 40);
const tanaka = makePersonalData("田中", 85, 65);

//この配列の要素をあとで並び替える。
let academicPerformanceData = [sato, suzuki, takahashi, tanaka];

//並び替えるぞ～
//まず、合計点の順に並べよう。for文のネストが要るぞ！
//佐藤と鈴木を比べる→高橋と「佐藤＆鈴木」を比べる→田中と「佐藤＆鈴木＆高橋」を比べる

//academicPerformanceDataのa番目とb番目の要素を入れ替える関数を用意する。
function swap(a, b) {

  const before_a = academicPerformanceData[a];
  const before_b = academicPerformanceData[b];

  const after_a = before_b;
  const after_b = before_a;
  
  academicPerformanceData[a] = after_a;
  academicPerformanceData[b] = after_b;

}

//いざ、並び替え！
for (let i = 1; i < 4; i++) {

  const person_i = academicPerformanceData[i];

  for (let j = 0; j < i; j++) {

    const person_j = academicPerformanceData[j];
    
    if (person_j.scores.total < person_i.scores.total) {
      //１つ目のルールに従って入れ替え
      swap(j, i);
    
    }  

    if (person_j.scores.total == person_i.scores.total && person_j.scores.math < person_i.scores.math) {
      //２つ目のルールに従って入れ替え
      swap(j, i);

    }

  }

}


//表を埋めていくDOM
for (let i = 0; i < 4; i++) {

  let name = document.getElementById(`prize${i + 1}Name`);
  let score = document.getElementById(`prize${i + 1}Score`);
  name.textContent = academicPerformanceData[i].name;
  score.textContent = academicPerformanceData[i].scores.total;

}
~~~