# 課題

田中君の成績を格納したオブジェクトがあります。
~~~javascript

 let tanaka = {
  name:"田中",
  scores:{
    math:80,
    science:90
  }
 }

~~~
しかしながら田中君は、親にmath,scienceの成績を高く見せたいと考えました。
下を満たすプログラムを作成して下さい。
- htmlを読み込むと、`成績:数学...80点、理科...90点`と表示される
- ボタンを押すと、`成績:数学...100点、理科...100点`と表示される
- ただし、javascriptは`tanaka`オブジェクトのみを参照する。新しい成績格納オブジェクトを作ってはならない。つまり、`tanaka`オブジェクトの点数プロパティをDOMで直接書き換えること!

## 回答例
~~~html title="index.html"
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>school annual report</title>
</head>
<body>
  <div id="academicPerformance">成績:数学...80点、理科...90点</div>
  <button id="button" type="button">クリック</button>
  <script src="./script.js"></script> 
</body>
</html>
~~~
~~~javascript title="script.js"
let tanaka = {
  name:"田中",
  scores:{
    math:80,
    science:90
  }
 }

function falsify_data() {
  
  tanaka.scores.math = 100;
  tanaka.scores.science = 100;
  let academicPerformance = document.getElementById("academicPerformance");
  academicPerformance.textContent = `成績:数学...${tanaka.scores.math}点、理科...${tanaka.scores.science}点`

}

let trickbutton = document.getElementById("button");
trickbutton.onclick = falsify_data;

~~~