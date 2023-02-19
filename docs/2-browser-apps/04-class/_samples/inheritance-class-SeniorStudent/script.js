class Student {
  name;
  age;

  introduceSelf() {
    document.write(`私の名前は${this.name}です。${this.age}歳です。`);
  }
}

class SeniorStudent extends Student {
  researchQuestion;

  introduceSelf() {
    super.introduceSelf();
    document.write(`研究テーマは${this.researchQuestion}です。`);
  }
}

const tanaka = new SeniorStudent();
tanaka.age = 22;
tanaka.name = "田中";
tanaka.researchQuestion = "量子力学";
tanaka.introduceSelf();
