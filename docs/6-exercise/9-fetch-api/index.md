---
title: Fetch API 演習
sidebar_position: 8
---

import CodeBlock from '@theme/CodeBlock';
import Term from "@site/src/components/Term";
import ViewSource from "@site/src/components/ViewSource";
import Answer from "@site/src/components/Answer";
import restaurantsVideo from "./restaurants.mp4"

## 課題

料理店に評価をつけられるサイトを作ってみましょう。

<video src={restaurantsVideo} controls />

## ヒント

- 選択式のメニューを作るには `select` タグを用いましょう。

  ```html title="index.html"
  <select id="points-select">
    <option value="5">☆5</option>
    <option value="4">☆4</option>
    <option value="3">☆3</option>
    <option value="2">☆2</option>
    <option value="1">☆1</option>
  </select>
  ```

- `option` の `value` に入れられている数字は文字列のため、平均評価の算出をする前に数値に変換しておくと良いでしょう。以下では `Number` オブジェクトを用いる例を示します。

  ```javascript title="sample.js"
  const one = "1";
  const two = "2";

  console.log(one + two); // 12
  console.log(Number(one) + Number(two)); // 3
  ```

- 今回は、登録されているレストランの最新の情報を取得するため一定時間ごとに画面を描画し直すことが必要ですが、そのようにすると店名を選択する`select` 要素が操作できなくなってしまうことに注意が必要です。以下では、現在操作されている（フォーカスが当たっている）要素を取得する `document.activeElement` を用いて、料理店の評価の送信に必要な `select` 要素が操作されている際には再描画を行わないようにしています。

  ```javascript title="script.js"
  if (
    document.activeElement !== nameSelect &&
    document.activeElement !== pointsSelect
  ) {
    // 再描画
  }
  ```

## 解答例

<Answer>

```javascript title="server.js"
app.get("/restaurants", (request, response) => {
  response.json(restaurants);
});

app.post("/register", (request, response) => {
  restaurants.push({
    name: request.body.name,
    totalRating: 0,
    numRatings: 0,
    averageRating: 0,
  });
  response.end();
});

app.post("/rate", (request, response) => {
  const index = request.body.index;
  restaurants[index].totalRating += Number(request.body.points); // 文字列を数値に変換
  restaurants[index].numRatings += 1;

  if (restaurants[index].numRatings !== 0) {
    // 評価者が0人でないときは、平均点を計算
    restaurants[index].averageRating =
      restaurants[index].totalRating / restaurants[index].numRatings;
  } else {
    // 評価者が0人のときは、平均点は0（ゼロ除算を防ぐため）
    restaurants[index].averageRating = 0;
  }
  response.end();
});
```

```javascript title="static/script.js"
setInterval(async () => {
  // nameSelect にも pointsSelect にもフォーカスが当たっていない際にのみ、要素を再生成する
  if (
    document.activeElement !== nameSelect &&
    document.activeElement !== pointsSelect
  ) {
    const response = await fetch("/restaurants");
    const restaurants = await response.json();
    restaurantList.innerHTML = "";
    nameSelect.innerHTML = "";

    for (let i = 0; i < restaurants.length; i += 1) {
      // 料理店の一覧を生成する部分
      const li = document.createElement("li");
      const name = document.createElement("h3");
      const averageRating = document.createElement("p");
      name.textContent = restaurants[i].name;
      averageRating.textContent = `平均評価: ${restaurants[i].averageRating}`;
      li.appendChild(name);
      li.appendChild(averageRating);
      restaurantList.appendChild(li);

      // 評価する料理店の選択肢を生成する部分
      const option = document.createElement("option");
      option.value = i;
      option.textContent = restaurants[i].name;
      nameSelect.appendChild(option);
    }
  }
}, 1000);
```

コードの全体は以下を参照してください。
<ViewSource url={import.meta.url} path="_samples/restaurants" />

</Answer>
