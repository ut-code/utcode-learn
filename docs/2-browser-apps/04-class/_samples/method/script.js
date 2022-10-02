class Student {
    name;
    age = 18;
    introduceSelf() {
        document.write(`私の名前は${this.name}です。`);
        document.write(`${this.age}歳です`);
    }
    incrementAge() {
        this.age += 1;
    }
}

const tanaka = new Student();
tanaka.name = "田中";
tanaka.age = 19;
tanaka.introduceSelf();
tanaka.incrementAge();
tanaka.introduceSelf();
