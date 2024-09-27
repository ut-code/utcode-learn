document.getElementById("send-button").onclick = async () => {
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const json = JSON.stringify({ name: name, age: age });
  const response = await fetch("/send", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: json,
  });
  const text = await response.text();
  alert(text);
};
