function incrementAge(person) {
  return { name: person.name, age: person.age + 1 };
}

const tanaka = { name: "田中", age: 18 };
const nextYearTanaka = incrementAge(tanaka);
document.write(nextYearTanaka.age);
document.write(tanaka.age); // 18
