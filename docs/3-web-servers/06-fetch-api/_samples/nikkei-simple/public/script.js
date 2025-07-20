document.getElementById("fetch-button").onclick = async () => {
  const response = await fetch("/nikkei");
  const price = await response.text();
  document.getElementById("result").textContent = `現在の日経平均株価: ${price}`;
};