class Car {
  weight = "1t";
  cost;
}

const prius = new Car();
prius.cost = 2600000;

document.write(`重さは${prius.weight}で、値段は${prius.cost}円です。`);
