const questions = ["apple", "black", "cloud"];
const answers = ["りんご", "黒", "雲"];

const questionDisplay = document.getElementById("question");

const answer = document.getElementById("answer");
let index = 0;

questionDisplay.textContent = questions[0];

document.getElementById("answer-button").onclick = () => {
  answer.textContent = answers[index];
};
document.getElementById("next-button").onclick = () => {
  index += 1;
  if (index === questions.length) {
    index = 0;
  }
  questionDisplay.textContent = questions[index];
  answer.textContent = "";
};
