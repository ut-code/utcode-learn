setInterval(async () => {
  const response = await fetch("/messages");
  const messages = await response.json();

  const messageList = document.getElementById("message-list");
  messageList.innerHTML = "";

  for (const message of messages) {
    const li = document.createElement("li");
    li.textContent = message;
    messageList.appendChild(li);
  }
}, 1000);

document.getElementById("send-button").onclick = async () => {
  const message = document.getElementById("message-input").value;
  await fetch("/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: message }),
  });
};
