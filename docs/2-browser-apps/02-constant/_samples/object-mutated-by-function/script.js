function incrementAge(person) {
  person.age = person.age + 1;
};

const tanaka = { name: "田中", age: 18 };
const nextYearTanaka = incrementAge(tanaka);
document.write(nextYearTanaka.age);

// 19 と表示されてしまう
document.write(tanaka.age);
