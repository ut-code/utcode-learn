document.getElementById("login-button").onclick = async () => {
  const usernameInput = document.getElementById("username-input");
  const passwordInput = document.getElementById("password-input");
  const response = await fetch("/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: usernameInput.value,
      password: passwordInput.value,
    }),
  });
  if (response.ok) {
    alert(await response.text());
  } else {
    alert("ログインに失敗しました");
  }
};
