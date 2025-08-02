document.getElementById("calculate-button").onclick = async () => {
  const subtotal = parseFloat(document.getElementById("subtotal-input").value);

  const response = await fetch("/calculate", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ subtotal: subtotal }),
  });
  const taxResult = await response.json();

  document.getElementById("tax").textContent = taxResult.tax;
  document.getElementById("total").textContent = taxResult.total;
};
