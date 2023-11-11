function incrementAge(person) {
  person.age += 1;
  return person;
}

const tanaka = { name: "田中", age: 18 };
const sato = { name: "佐藤", age: 22 };
const nextYearTanaka = incrementAge(tanaka);
const nextYearSato = incrementAge(sato);
document.write(
  `田中は ${nextYearTanaka.age} 歳、佐藤は ${nextYearSato.age} 歳`,
);
