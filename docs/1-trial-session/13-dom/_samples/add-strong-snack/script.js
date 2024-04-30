const newItem = document.createElement("li");
const strongPart = document.createElement("strong");
strongPart.textContent = "おやつ";
newItem.appendChild(strongPart);

const packingList = document.getElementById("packing-list");
packingList.appendChild(newItem);
