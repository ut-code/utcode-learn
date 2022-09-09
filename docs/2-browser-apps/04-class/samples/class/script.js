class Car {
  weight = "1t";
  cost;
}

const PRIUS = new Car();
PRIUS.cost = 2600000;

document.write(`重さは${PRIUS.weight}で、値段は${PRIUS.cost}円です。`);
