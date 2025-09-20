const usernameInput = document.getElementById("username-input");
const passwordInput = document.getElementById("password-input");

document.getElementById("login-button").onclick = async () => {
  const response = await fetch("/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: usernameInput.value,
      password: passwordInput.value,
    }),
    credentials: "include",
  });
  if (response.ok) {
    alert("ログインに成功しました");
    window.location.href = "/";
  } else {
    alert("ログインに失敗しました");
  }
};
