const strongElement = document.createElement("strong");
strongElement.textContent = "Hello World!";

const greetingElement = document.getElementById("greeting");
greetingElement.appendChild(strongElement);
