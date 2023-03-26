const restaurantList = document.getElementById("restaurant-list");
const nameInput = document.getElementById("name-input");
const nameSelect = document.getElementById("name-select");
const pointsSelect = document.getElementById("points-select");

setInterval(async () => {
  // nameSelect に フォーカスが当たっていない際にのみ、要素を再生成する
  if (document.activeElement !== nameSelect) {
    const response = await fetch("/restaurants");
    const restaurants = await response.json();
    restaurantList.innerHTML = "";
    nameSelect.innerHTML = "";

    for (let i = 0; i < restaurants.length; i += 1) {
      // 料理店の一覧を生成する部分
      const li = document.createElement("li");
      const name = document.createElement("h3");
      const averageRating = document.createElement("p");
      name.textContent = restaurants[i].name;
      averageRating.textContent = `平均評価: ${restaurants[i].averageRating}`;
      li.appendChild(name);
      li.appendChild(averageRating);
      restaurantList.appendChild(li);

      // 評価する料理店の選択肢を生成する部分
      const option = document.createElement("option");
      option.value = i;
      option.textContent = restaurants[i].name;
      nameSelect.appendChild(option);
    }
  }
}, 1000);

document.getElementById("register-button").onclick = async () => {
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
