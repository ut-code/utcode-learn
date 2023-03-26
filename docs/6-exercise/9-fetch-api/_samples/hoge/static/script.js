const restaurantList = document.getElementById("restaurant-list");
const nameInput = document.getElementById("name-input");
const nameSelect = document.getElementById("name-select");
const pointsSelect = document.getElementById("points-select");

let numberOfRestaurants;

setInterval(async () => {
  const response = await fetch("/restaurants");
  const restaurants = await response.json();
  console.log(restaurants);

  restaurantList.innerHTML = "";

  for (let i = 0; i < restaurants.length; i += 1) {
    console.log("for start");
    const li = document.createElement("li");
    const name = document.createElement("h3");
    const average = document.createElement("p");
    name.textContent = restaurants[i].name;
    average.textContent = `平均評価: ${restaurants[i].average}`;
    li.appendChild(name);
    li.appendChild(average);
    restaurantList.appendChild(li);
  }
  if (numberOfRestaurants === restaurants.length) {
    console.log("no diff");
    return;
  } else {
    numberOfRestaurants = restaurants.length;
    nameSelect.innerHTML = "";
    for (let i = 0; i < restaurants.length; i += 1) {
      const option = document.createElement("option");
      option.value = i;
      option.textContent = restaurants[i].name;
      nameSelect.appendChild(option);
      // forEach を使う例もある
    }
  }
}, 1000);

document.getElementById("name-button").onclick = async () => {
  const name = nameInput.value;
  await fetch("/register", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: name }),
  });
};

document.getElementById("rate-button").onclick = async () => {
  const index = nameSelect.value;
  const points = pointsSelect.value;
  await fetch("/rate", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ index: index, points: points }),
  });
};
