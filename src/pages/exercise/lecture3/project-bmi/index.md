import CodeBlock from '@theme/CodeBlock';
import Term from "@site/src/components/Term";
import ViewSource from "@site/src/components/ViewSource";
import Answer from "@site/src/components/Answer";

# 第 3 回 プロジェクト 問題

身長と体重を入力すると BMI を計算するアプリを作ってみましょう。

<Answer>

```html title="index.html"
<h1>BMI計算アプリ</h1>
<p><input id="height" /> cm</p>
<p><input id="weight" /> kg</p>
<button id="calc-button">BMIを計算する</button>
<p>BMIは……</p>
<p id="answer">？？</p>
<p>です！</p>
```

```javascript title="script.js"
const height = document.getElementById("height");
const weight = document.getElementById("weight");

const calcButton = document.getElementById("calc-button");

const answer = document.getElementById("answer");

calcButton.onclick = () => {
  answer.textContent = weight.value / (height.value / 100) ** 2;
};
```

<!-- <ViewSource path="/src/pages/exercise/lecture3/project-bmi/_samples/bmi" /> -->

</Answer>
