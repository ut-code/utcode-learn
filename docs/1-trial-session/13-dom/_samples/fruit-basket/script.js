const basket = document.getElementById("fruit-basket");
const fruits = ["イチゴ", "スイカ", "バナナ"];

for (const fruit of basket) {
  const item = document.createElement("li");
  item.textContent = fruit;
  basket.appendChild(item);
}
