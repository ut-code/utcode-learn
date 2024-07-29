const student = {
  name: "山田太郎",
  age: 15,
  email: "yamada.taro@example.com",
  scores: {
    japanese: 90,
    math: 70,
    english: 80,
  },
};

const averageScore =
  (student.scores.japanese + student.scores.math + student.scores.english) / 3;
document.write(`平均点は${averageScore}点です。`);
