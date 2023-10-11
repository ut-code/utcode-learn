let tanaka = {
  name: "田中",
  scores: {
    math: 80,
    science: 90,
  },
};

function falsifyTanakaData() {
  tanaka.scores.math = 100;
  tanaka.scores.science = 100;
  const academicPerformance = document.getElementById("academic-performance");
  academicPerformance.textContent =
    "成績:数学..." +
    tanaka.scores.math +
    "点、理科..." +
    tanaka.scores.science +
    "点";
}

const trickbutton = document.getElementById("button");
trickbutton.onclick = falsifyTanakaData;
