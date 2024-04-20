function incrementAge(person) {
  const newPerson = { ...person, age: person.age + 1 };
  return newPerson;
}

const tanaka = { name: "田中", age: 18 };
const nextYearTanaka = incrementAge(tanaka);
document.write(nextYearTanaka.age); // 19
document.write(tanaka.age); // 18
