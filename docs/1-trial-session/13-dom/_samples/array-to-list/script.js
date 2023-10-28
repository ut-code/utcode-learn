const listWrapper = document.getElementById("wrapper");
const list = ["トマト", "レモン", "バジル"];

for (const itemName of list) {
  const element = document.createElement("li");
  element.textContent = itemName;
  listWrapper.appendChild(element);
}
