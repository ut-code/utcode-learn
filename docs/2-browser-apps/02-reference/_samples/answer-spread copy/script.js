function incrementAge(person) {
  return { ...person, age: person.age + 1 };
}

const tanaka = { name: "田中", age: 18 };
const nextYearTanaka = incrementAge(tanaka);
document.write(nextYearTanaka.age); // 19
document.write(nextYearTanaka.address); // 東京
