function makePersonalData(name, mathScore, scienceScore) {
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
const sato = makePersonalData("佐藤", 80, 70);
const suzuki = makePersonalData("鈴木", 90, 70);
const takahashi = makePersonalData("高橋", 100, 40);
const tanaka = makePersonalData("田中", 85, 65);

// この配列の要素をあとで並び替える。
const academicPerformanceData = [sato, suzuki, takahashi, tanaka];

// 並び替えるぞ～
// まず、合計点の順に並べよう。for文のネストが要るぞ！
// 佐藤と鈴木を比べる→高橋と「佐藤＆鈴木」を比べる→田中と「佐藤＆鈴木＆高橋」を比べる

// academicPerformanceDataのa番目とb番目の要素を入れ替える関数を用意する。
function swap(a, b) {
  const before_a = academicPerformanceData[a];
  const before_b = academicPerformanceData[b];

  const after_a = before_b;
  const after_b = before_a;

  academicPerformanceData[a] = after_a;
  academicPerformanceData[b] = after_b;
}

// swapの別解
// function swap(a, b) {
//   const tmp = academicPerformanceData[a];
//   academicPerformanceData[a] = academicPerformanceData[b];
//   academicPerformanceData[b] = tmp;
// }

// いざ、並び替え！
// i++はi += 1と同じ意味です。
for (let i = 1; i < 4; i++) {
  const person_i = academicPerformanceData[i];

  for (let j = 0; j < i; j++) {
    const person_j = academicPerformanceData[j];

    if (person_j.scores.total < person_i.scores.total) {
      // １つ目のルールに従って入れ替え
      swap(j, i);
    }

    if (
      person_j.scores.total == person_i.scores.total &&
      person_j.scores.math < person_i.scores.math
    ) {
      // ２つ目のルールに従って入れ替え
      swap(j, i);
    }
  }
}

// 表を埋めていくDOM
for (let i = 0; i < 4; i++) {
  let name = document.getElementById(`prize${i + 1}Name`);
  let score = document.getElementById(`prize${i + 1}Score`);
  name.textContent = academicPerformanceData[i].name;
  score.textContent = academicPerformanceData[i].scores.total;
}
