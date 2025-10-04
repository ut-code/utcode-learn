document.getElementById("record-button").onclick = async () => {
  const quantityInput = document.getElementById("quantity-input");
  const quantity = Number(quantityInput.value);

  const response = await fetch("/sales", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ quantity: quantity }),
  });
  const sales = await response.json();

  document.getElementById("sales-quantity").textContent = sales.quantity;
  document.getElementById("sales-total").textContent = sales.total;
};
