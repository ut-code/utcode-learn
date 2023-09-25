const greetingElement = document.getElementById("greeting");
const buttonElement = document.getElementById("button");

function onGreetingButtonClick() {
  greetingElement.textContent = "Hello world!!";
  greetingElement.style.color = "red";
  greetingElement.style.fontSize = "40px";
}

buttonElement.onclick = onGreetingButtonClick;
