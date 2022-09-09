function incrementAge(person) {
  person.age = person.age + 1;
  return person;
}

let tanaka = { name: "田中", age: 18 };
let nextYearTanaka = incrementAge(tanaka);
document.write(nextYearTanaka.age);
