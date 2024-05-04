class Student {
  name;
  age;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduceSelf() {
    document.write(`私の名前は${this.name}です。${this.age}歳です。`);
  }
}

class SeniorStudent extends Student {
  researchQuestion;

  constructor(name, age, researchQuestion) {
    super(name, age);
    this.researchQuestion = researchQuestion;
  }

  introduceSelf() {
    super.introduceSelf();
    document.write(`研究テーマは${this.researchQuestion}です。`);
  }
}
const tanaka = new SeniorStudent("田中", 22, "量子力学");
tanaka.introduceSelf();
