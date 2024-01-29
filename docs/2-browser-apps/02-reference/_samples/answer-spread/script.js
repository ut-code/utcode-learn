function incrementAge(person) {
  const newPerson = { ...person };
  newPerson.age += 1;
  return newPerson;
}

const tanaka = { name: "田中", age: 18, address: "東京" };
const nextYearTanaka = incrementAge(tanaka);
document.write(nextYearTanaka.age); // 19
document.write(nextYearTanaka.address); // 東京
