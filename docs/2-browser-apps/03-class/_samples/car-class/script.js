class Car {
  weightInTons = 1;
  cost;
}

const prius = new Car();
prius.cost = 2600000;

document.write(
  `重さは${prius.weightInTons}トンで、値段は${prius.cost}円です。`,
);
