const messageList = document.getElementById("message-list");
const messageInput = document.getElementById("message-input");

setInterval(async () => {
  const response = await fetch("/messages");
  const messages = await response.json();
  messageList.innerHTML = "";

  for (const message of messages) {
    const li = document.createElement("li");
    li.textContent = message;
    messageList.appendChild(li);
  }
}, 1000);

document.getElementById("send-button").onclick = async () => {
  const message = messageInput.value;
  await fetch("/send", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: message }),
  });
};
