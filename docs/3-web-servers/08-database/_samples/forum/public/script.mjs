setInterval(async () => {
  const response = await fetch("/posts");
  const posts = await response.json();

  const messageList = document.getElementById("message-list");
  messageList.innerHTML = "";

  for (const post of posts) {
    const li = document.createElement("li");
    li.textContent = post.message;
    messageList.appendChild(li);
  }
}, 1000);

document.getElementById("send-button").onclick = async () => {
  const message = document.getElementById("message-input").value;
  await fetch("/send", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: message }),
  });
};
