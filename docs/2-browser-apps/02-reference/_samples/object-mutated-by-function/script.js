function incrementAge(person) {
  person.age += 1;
  return person;
}

const tanaka = { name: "田中", age: 18 };
const nextYearTanaka = incrementAge(tanaka);
document.write(nextYearTanaka.age);
document.write(tanaka.age); // 19 と表示されてしまう
