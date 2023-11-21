const table = document.getElementById("table");

function createPersonalData(name, mathScore, scienceScore) {
  return {
    name: name,
    scores: {
      math: mathScore,
      science: scienceScore,
      total: mathScore + scienceScore,
    },
  };
}

// データオブジェクトを生成
const sato = createPersonalData("佐藤", 80, 70);
const suzuki = createPersonalData("鈴木", 90, 70);
const takahashi = createPersonalData("高橋", 100, 40);
const tanaka = createPersonalData("田中", 85, 65);

// この配列の要素をあとで並び替える。
const personalDataList = [sato, suzuki, takahashi, tanaka];

// 並び替えるぞ～
// まず、合計点の順に並べよう。for 文のネストが要るぞ！
// 佐藤と鈴木を比べる→高橋と「佐藤＆鈴木」を比べる→田中と「佐藤＆鈴木＆高橋」を比べる

// 配列の a 番目と b 番目の要素を入れ替える関数を用意する。
function swap(array, a, b) {
  const previousData = array[a];
  array[a] = array[b];
  array[b] = previousData;
}

// いざ、並び替え！
for (let i = 1; i < 4; i += 1) {
  const person_i = personalDataList[i];

  for (let j = 0; j < i; j += 1) {
    const person_j = personalDataList[j];

    if (person_j.scores.total < person_i.scores.total) {
      // 1 つ目のルールに従って入れ替え
      swap(personalDataList, j, i);
    }

    if (
      person_j.scores.total == person_i.scores.total &&
      person_j.scores.math < person_i.scores.math
    ) {
      // 2 つ目のルールに従って入れ替え
      swap(personalDataList, j, i);
    }
  }
}

// 表を埋めていく DOM
for (const personalData of personalDataList) {
  const newRow = document.createElement("tr");
  const ranking = document.createElement("td");
  const name = document.createElement("td");
  const score = document.createElement("td");
  ranking.textContent = personalDataList.indexOf(personalData);
  name.textContent = personalData.name;
  score.textContent = personalData.scores.total;
  ranking.style.border = "solid";
  name.style.border = "solid";
  score.style.border = "solid";
  newRow.appendChild(ranking);
  newRow.appendChild(name);
  newRow.appendChild(score);
  table.appendChild(newRow);
}
