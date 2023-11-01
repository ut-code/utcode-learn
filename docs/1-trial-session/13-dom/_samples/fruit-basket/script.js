const basket = document.getElementById("fruit-basket");
const list = ["トマト", "レモン", "バジル"];

for (const fruit of basket) {
  const item = document.createElement("li");
  item.textContent = fruit;
  basket.appendChild(item);
}
