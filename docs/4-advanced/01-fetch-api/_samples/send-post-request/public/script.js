document.getElementById("send-button").onclick = async () => {
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const body = new URLSearchParams({ name: name, age: age });
  const response = await fetch("/send", { method: "post", body: body });
  const text = await response.text();
  alert(text);
};
